/* ==========================================================================
   QUANTUMVERSE MAIN RUNTIME COORDINATOR: js/app.js
   ========================================================================== */

// --- Student Progress DB (No gamification, just completion checklist) ---
window.studentProgress = {
  db: {
    completedModules: [],
    completedProjects: [],
    quizScores: {} // moduleId -> percentage
  },

  load: function() {
    const data = localStorage.getItem("quantumverse_progress");
    if (data) {
      try {
        this.db = JSON.parse(data);
      } catch (e) {
        console.error("Error loading progress, resetting:", e);
      }
    }
    this.updateNavbarProgress();
  },

  save: function() {
    localStorage.setItem("quantumverse_progress", JSON.stringify(this.db));
    this.updateNavbarProgress();
    this.renderDashboard();
  },

  recordModuleCompletion: function(moduleId) {
    if (!this.db.completedModules.includes(moduleId)) {
      this.db.completedModules.push(moduleId);
      this.save();
    }
  },

  recordProject: function(projectId) {
    if (!this.db.completedProjects.includes(projectId)) {
      this.db.completedProjects.push(projectId);
      this.save();
    }
  },

  recordQuiz: function(moduleId, score, total) {
    const pct = (score / total) * 100;
    this.db.quizScores[moduleId] = Math.max(this.db.quizScores[moduleId] || 0, pct);
    this.save();
  },

  updateNavbarProgress: function() {
    // Determine overall percentage completion
    // Out of: 5 Modules, 4 Projects, 5 Quizzes (total 14 items)
    const modulesCount = this.db.completedModules.length;
    const projectsCount = this.db.completedProjects.length;
    const quizzesCount = Object.keys(this.db.quizScores).length;
    
    const completed = modulesCount + projectsCount + quizzesCount;
    const total = 14;
    const pct = (completed / total) * 100;

    const bar = document.getElementById("nav-progress-bar-inner");
    const label = document.getElementById("nav-progress-label");
    
    if (bar) bar.style.width = pct + "%";
    if (label) label.textContent = pct.toFixed(0) + "%";
  },

  renderDashboard: function() {
    const container = document.getElementById("progress-dashboard-container");
    if (!container) return;

    const modHtml = [1, 2, 3, 4, 5].map(idx => {
      const done = this.db.completedModules.includes(idx);
      return `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0; border-bottom: 1px dashed var(--border-color);">
          <span style="font-weight: 500;">Module ${idx}: ${window.quantumContent.find(m => m.id === idx).title}</span>
          <span style="font-weight: bold; color: ${done ? 'var(--cyan)' : 'var(--text-tertiary)'};">
            ${done ? '✓ Completed' : 'Pending'}
          </span>
        </div>
      `;
    }).join("");

    const projHtml = ["coin-toss", "dice", "qrng", "qkd"].map(pid => {
      const done = this.db.completedProjects.includes(pid);
      const labels = { "coin-toss": "Quantum Coin Toss", "dice": "Quantum Dice", "qrng": "QRNG Key Generator", "qkd": "BB84 Key Distribution" };
      return `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0; border-bottom: 1px dashed var(--border-color);">
          <span style="font-weight: 500;">${labels[pid]}</span>
          <span style="font-weight: bold; color: ${done ? 'var(--cyan)' : 'var(--text-tertiary)'};">
            ${done ? '✓ Executed' : 'Not Run'}
          </span>
        </div>
      `;
    }).join("");

    const quizHtml = [1, 2, 3, 4, 5].map(idx => {
      const score = this.db.quizScores[idx];
      return `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0; border-bottom: 1px dashed var(--border-color);">
          <span style="font-weight: 500;">Module ${idx} Assessment</span>
          <span style="font-weight: bold; color: ${score !== undefined ? 'var(--quantum-purple)' : 'var(--text-tertiary)'};">
            ${score !== undefined ? score.toFixed(0) + '%' : 'No Attempt'}
          </span>
        </div>
      `;
    }).join("");

    container.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
        <div class="lab-panel">
          <h4 style="margin-bottom: 1rem; border-bottom: 2px solid var(--cyan); padding-bottom: 0.5rem;">Modules Read Checklist</h4>
          ${modHtml}
        </div>
        <div class="lab-panel">
          <h4 style="margin-bottom: 1rem; border-bottom: 2px solid var(--quantum-purple); padding-bottom: 0.5rem;">Quiz High Scores</h4>
          ${quizHtml}
        </div>
        <div class="lab-panel">
          <h4 style="margin-bottom: 1rem; border-bottom: 2px solid var(--electric-blue); padding-bottom: 0.5rem;">Lab Projects Run</h4>
          ${projHtml}
        </div>
      </div>
    `;
  }
};

// --- SPA Hash Router ---
window.router = {
  routes: {
    "home": "section-home",
    "curriculum": "section-curriculum",
    "virtual-lab": "section-virtual-lab",
    "coding-practice": "section-coding-practice",
    "assignments": "section-assignments",
    "quiz": "section-quiz",
    "projects": "section-projects",
    "resources": "section-resources",
    "faq": "section-faq",
    "faculty": "section-faculty",
    "contact": "section-contact"
  },

  init: function() {
    window.addEventListener("hashchange", () => this.handleRouting());
    this.handleRouting();
  },

  handleRouting: function() {
    const hash = window.location.hash.replace("#", "") || "home";
    const targetSectionId = this.routes[hash];

    // Hide all sections
    Object.values(this.routes).forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = "none";
    });

    // Show active section
    if (targetSectionId) {
      const activeEl = document.getElementById(targetSectionId);
      if (activeEl) {
        activeEl.style.display = "block";
        window.scrollTo(0, 0);
      }
    }

    // Update nav links active class
    document.querySelectorAll(".nav-link").forEach(link => {
      const href = link.getAttribute("href");
      if (href === `#${hash}`) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Special renders when entering specific views
    if (hash === "curriculum") {
      window.curriculumController.renderModuleList();
    } else if (hash === "virtual-lab") {
      window.singleQubitState.reset();
      window.circuitState.clearCircuit();
    } else if (hash === "projects") {
      window.projectsState.initProject("coin-toss"); // Load coin toss by default
    } else if (hash === "home") {
      // Re-render student dashboard on landing page progress check
      window.studentProgress.renderDashboard();
    }
  }
};

// --- Curriculum Controller (Modules Tabs & Sidebar rendering) ---
window.curriculumController = {
  activeModuleId: 1,
  activeTab: "intro",

  renderModuleList: function() {
    const modulesGrid = document.getElementById("modules-grid-list");
    if (!modulesGrid) return;

    modulesGrid.innerHTML = "";
    window.quantumContent.forEach(mod => {
      const card = document.createElement("div");
      card.className = "card";
      card.style.cursor = "pointer";
      card.innerHTML = `
        <div class="card-icon">${mod.id}</div>
        <h3 class="card-title">${mod.title}</h3>
        <p class="card-desc">${mod.introduction}</p>
        <button class="btn btn-secondary" style="margin-top: 1rem; width: 100%;">Study Module</button>
      `;
      card.addEventListener("click", () => {
        this.openModuleDetail(mod.id);
      });
      modulesGrid.appendChild(card);
    });
  },

  openModuleDetail: function(moduleId) {
    this.activeModuleId = moduleId;
    this.activeTab = "intro";

    document.getElementById("modules-overview-panel").style.display = "none";
    const detailPanel = document.getElementById("module-detail-panel");
    detailPanel.style.display = "block";

    const mod = window.quantumContent.find(m => m.id === moduleId);
    document.getElementById("active-module-header-title").textContent = `Module ${mod.id}: ${mod.title}`;
    
    // Draw the sidebar tab buttons
    this.renderTabs(mod);
    
    // Auto-record progress
    window.studentProgress.recordModuleCompletion(moduleId);
  },

  exitModuleDetail: function() {
    document.getElementById("modules-overview-panel").style.display = "block";
    document.getElementById("module-detail-panel").style.display = "none";
  },

  renderTabs: function(mod) {
    const contentBox = document.getElementById("module-tab-contents");
    if (!contentBox) return;

    // Build outcomes list
    const outcomesList = mod.outcomes.map(o => `<li>${o}</li>`).join("");

    // Build solved examples list
    const solvedList = mod.solvedExamples.map((ex, idx) => `
      <div style="background-color: var(--bg-tertiary); padding: 1.25rem; border-radius: var(--border-radius-md); margin-bottom: 1.5rem; border-left: 4px solid var(--cyan);">
        <div style="font-weight: 700; color: var(--primary-navy); margin-bottom: 0.5rem;">Example ${idx + 1}: ${ex.question}</div>
        <div style="font-size: 0.95rem; color: var(--text-secondary);"><b style="color:var(--quantum-purple);">Solution:</b> ${ex.solution}</div>
      </div>
    `).join("");

    // Build applications list
    const appList = mod.applications.map(app => `
      <div class="card" style="padding:1.5rem;">
        <h4 style="color: var(--quantum-purple); margin-bottom:0.5rem;">${app.title}</h4>
        <p style="font-size:0.9rem; margin-bottom:0;">${app.description}</p>
      </div>
    `).join("");

    // Build flashcards
    const flashList = mod.flashcards.map((fc, idx) => `
      <div class="flashcard" onclick="this.classList.toggle('flipped')">
        <div class="flashcard-inner">
          <div class="flashcard-front">
            <span>Concept Card #${idx+1}</span>
            <p style="font-weight:600;">${fc.question}</p>
          </div>
          <div class="flashcard-back">
            <p>${fc.answer}</p>
          </div>
        </div>
      </div>
    `).join("");

    // Build glossary
    const glossList = mod.glossary.map(gl => `
      <div style="margin-bottom:1rem; border-bottom:1px dashed var(--border-color); padding-bottom:0.75rem;">
        <b style="color: var(--primary-navy); font-family: var(--font-mono);">${gl.term}</b>
        <p style="font-size:0.9rem; color: var(--text-secondary); margin-top:0.25rem; margin-bottom:0;">${gl.definition}</p>
      </div>
    `).join("");

    // Build formulas
    const formList = mod.formulas.map(f => `
      <div style="background-color: var(--bg-tertiary); padding:1rem; border-radius:var(--border-radius-sm); margin-bottom:1rem; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <b style="color: var(--quantum-purple);">${f.name}</b>
          <div style="font-size:0.85rem; color: var(--text-secondary); margin-top:0.25rem;">${f.description}</div>
        </div>
        <div style="font-family: var(--font-mono); font-size:1.1rem; font-weight:700; background-color: var(--bg-secondary); padding:0.4rem 0.8rem; border-radius:4px; border:1px solid var(--border-color);">${f.formula}</div>
      </div>
    `).join("");

    // Build FAQ list
    const faqList = mod.faqs.map(f => `
      <div style="margin-bottom:1.5rem;">
        <h4 style="font-size:1.1rem; color: var(--primary-navy); margin-bottom:0.5rem;">Q: ${f.question}</h4>
        <p style="font-size:0.95rem; color: var(--text-secondary); margin-bottom:0;">A: ${f.answer}</p>
      </div>
    `).join("");

    // Build assignments page HTML
    const assign = mod.assignment;
    const assignmentHtml = `
      <div class="lab-panel" style="margin-top: 1rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom: 2px solid var(--quantum-purple); padding-bottom:0.5rem; margin-bottom:1.5rem;">
          <h4 style="font-size:1.25rem;">Assignment Tasks</h4>
          <a class="btn btn-secondary btn-sm" href="data:text/plain;charset=utf-8,${encodeURIComponent('Module ' + mod.id + ' Assignment Tasks\n\n1. Theory: ' + assign.theory + '\n\n2. Numerical: ' + assign.numerical + '\n\n3. Coding: ' + assign.coding + '\n\n4. Research: ' + assign.research)}" download="Module_${mod.id}_Assignment.txt">Download Tasks</a>
        </div>
        
        <div style="margin-bottom:1.5rem;">
          <h5 style="color:var(--quantum-purple); margin-bottom:0.25rem;">1. Theoretical Question</h5>
          <p>${assign.theory}</p>
        </div>
        
        <div style="margin-bottom:1.5rem;">
          <h5 style="color:var(--quantum-purple); margin-bottom:0.25rem;">2. Numerical Problem</h5>
          <p>${assign.numerical}</p>
        </div>
        
        <div style="margin-bottom:1.5rem;">
          <h5 style="color:var(--quantum-purple); margin-bottom:0.25rem;">3. Qiskit Coding Task</h5>
          <pre style="margin-top:0.5rem;"><code>${assign.coding}</code></pre>
        </div>

        <div>
          <h5 style="color:var(--quantum-purple); margin-bottom:0.25rem;">4. Literature Research Task</h5>
          <p>${assign.research}</p>
        </div>
      </div>
    `;

    // Render contents to pane
    contentBox.innerHTML = `
      <!-- 1. Introduction & Outcomes -->
      <div class="tab-pane active" id="pane-intro">
        <h3>Introduction</h3>
        <p style="font-size:1.1rem; line-height:1.7; margin-bottom:2rem;">${mod.introduction}</p>
        
        <h3>Learning Outcomes</h3>
        <p>By the end of this module, students will be able to:</p>
        <ul class="outcomes-list">${outcomesList}</ul>
      </div>

      <!-- 2. Detailed Notes -->
      <div class="tab-pane" id="pane-theory">
        ${mod.theory}
      </div>

      <!-- 3. Math Derivations -->
      <div class="tab-pane" id="pane-math">
        ${mod.math}
      </div>

      <!-- 4. Solved Examples -->
      <div class="tab-pane" id="pane-solved">
        <h3>Step-by-Step Solved Problems</h3>
        <p>These exercises detail the theoretical derivations and computations matching the lecture notes.</p>
        <div style="margin-top:2rem;">${solvedList}</div>
      </div>

      <!-- 5. Applications -->
      <div class="tab-pane" id="pane-apps">
        <h3>Real-world Applications & Case Study</h3>
        <div class="cards-grid" style="margin-top:1.5rem; margin-bottom:2.5rem;">${appList}</div>
        
        <div class="lab-panel">
          <h4 style="color:var(--quantum-purple); margin-bottom:1rem;">Industrial Case Study: ${mod.caseStudy.title}</h4>
          <p><b>Challenge:</b> ${mod.caseStudy.problem}</p>
          <p><b>Analysis:</b> ${mod.caseStudy.analysis}</p>
          <p><b>Engineering Resolution:</b> ${mod.caseStudy.solution}</p>
        </div>
      </div>

      <!-- 6. Qiskit Notebooks -->
      <div class="tab-pane" id="pane-qiskit">
        <h3>Qiskit Coding Exercise</h3>
        <p>${mod.qiskitCode.description}</p>
        
        <div style="position:relative; margin: 1.5rem 0;">
          <pre><code class="language-python">${mod.qiskitCode.code}</code></pre>
          <a class="btn btn-secondary btn-sm" style="position:absolute; top:10px; right:10px;" href="data:text/plain;charset=utf-8,${encodeURIComponent(mod.qiskitCode.code)}" download="module_${mod.id}_exercise.py">Download Code</a>
        </div>
        
        <h4>Expected Simulator Output</h4>
        <pre style="background-color: var(--primary-navy); color: #00FFCC; border-color:#00FFCC;"><code>${mod.qiskitCode.output}</code></pre>
        
        <h4 style="margin-top:1.5rem;">Interpretation</h4>
        <p>${mod.qiskitCode.explanation}</p>
      </div>

      <!-- 7. Formula Sheet & Revision Cards -->
      <div class="tab-pane" id="pane-revision">
        <h3>Important Formulas</h3>
        <div style="margin-top:1.5rem; margin-bottom:2.5rem;">${formList}</div>

        <h3>Flash Revision Cards</h3>
        <p>Click cards below to flip and verify key terminologies.</p>
        <div class="flashcards-container">${flashList}</div>
      </div>

      <!-- 8. Glossary & FAQs -->
      <div class="tab-pane" id="pane-glossary">
        <h3>Glossary of Terms</h3>
        <div style="margin-top:1.5rem; margin-bottom:2.5rem;">${glossList}</div>

        <h3>Common FAQs</h3>
        <div style="margin-top:1.5rem;">${faqList}</div>
      </div>

      <!-- 9. Assignments & Projects -->
      <div class="tab-pane" id="pane-assignments">
        ${assignmentHtml}
        
        <div class="lab-panel" style="margin-top: 2rem; border-left:4px solid var(--quantum-purple);">
          <h4 style="color:var(--quantum-purple); margin-bottom:0.5rem;">Required Mini Project: ${mod.miniProject.title}</h4>
          <p><b>Objective:</b> ${mod.miniProject.objective}</p>
          <p><b>Procedure:</b> ${mod.miniProject.procedure}</p>
          <p><b>Expected Outcome:</b> ${mod.miniProject.expectedOutcome}</p>
          <p><b>Evaluation Rubric:</b> ${mod.miniProject.rubric}</p>
        </div>
      </div>
    `;

    // Make tab buttons click listeners
    document.querySelectorAll(".module-tab-btn").forEach(btn => {
      btn.classList.remove("active");
      
      const tabId = btn.dataset.tab;
      if (tabId === this.activeTab) {
        btn.classList.add("active");
      }

      btn.onclick = () => {
        document.querySelectorAll(".module-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.activeTab = tabId;

        // Hide all panes
        document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("active"));
        // Show selected pane
        document.getElementById(`pane-${tabId}`).classList.add("active");
      };
    });
  }
};

// --- Smart Search Indexer (Navbar Global Search) ---
window.searchIndexer = {
  index: [],

  buildIndex: function() {
    this.index = [];
    
    // Index Curriculum content
    window.quantumContent.forEach(mod => {
      this.index.push({
        title: `Module ${mod.id}: ${mod.title} (Theory Notes)`,
        type: "Notes",
        hash: `curriculum`,
        snippet: mod.introduction,
        text: mod.theory + " " + mod.introduction
      });

      mod.formulas.forEach(f => {
        this.index.push({
          title: `Formula: ${f.name} (${f.formula})`,
          type: "Formula",
          hash: `curriculum`,
          snippet: f.description,
          text: f.name + " " + f.formula + " " + f.description
        });
      });

      mod.glossary.forEach(g => {
        this.index.push({
          title: `Glossary Term: ${g.term}`,
          type: "Glossary",
          hash: `curriculum`,
          snippet: g.definition,
          text: g.term + " " + g.definition
        });
      });
    });

    // Index general FAQs
    const faqCards = document.querySelectorAll(".faq-card");
    faqCards.forEach(c => {
      const q = c.querySelector("h4")?.textContent || "";
      const a = c.querySelector("p")?.textContent || "";
      this.index.push({
        title: `FAQ: ${q}`,
        type: "FAQ",
        hash: "faq",
        snippet: a.substring(0, 100) + "...",
        text: q + " " + a
      });
    });
  },

  search: function(query) {
    if (!query) return [];
    const qClean = query.toLowerCase().trim();
    return this.index.filter(item => {
      return item.title.toLowerCase().includes(qClean) || item.text.toLowerCase().includes(qClean);
    });
  },

  handleSearchInput: function(el) {
    const query = el.value;
    const results = this.search(query);
    const modal = document.getElementById("search-modal");
    const backdrop = document.getElementById("search-backdrop");
    const list = document.getElementById("search-results-list");

    if (results.length > 0) {
      if (modal) modal.style.display = "block";
      if (backdrop) backdrop.style.display = "block";
      if (list) {
        list.innerHTML = results.map(res => `
          <div class="search-result-item" onclick="window.searchIndexer.goResult('${res.hash}')">
            <span class="search-result-type">${res.type}</span>
            <div class="search-result-title">${res.title}</div>
            <div class="search-result-snippet">${res.snippet}</div>
          </div>
        `).join("");
      }
    } else {
      if (query.length > 2) {
        if (modal) modal.style.display = "block";
        if (backdrop) backdrop.style.display = "block";
        if (list) list.innerHTML = `<p style="padding:1rem; color:var(--text-secondary);">No results found matching "${query}".</p>`;
      } else {
        this.closeSearch();
      }
    }
  },

  goResult: function(hash) {
    this.closeSearch();
    const searchInput = document.getElementById("nav-search-input");
    if (searchInput) searchInput.value = "";
    window.location.hash = `#${hash}`;
  },

  closeSearch: function() {
    const modal = document.getElementById("search-modal");
    const backdrop = document.getElementById("search-backdrop");
    if (modal) modal.style.display = "none";
    if (backdrop) backdrop.style.display = "none";
  }
};

// --- Accessibility & Theme Toggler ---
window.themeManager = {
  setTheme: function(themeName) {
    document.documentElement.setAttribute("data-theme", themeName);
    localStorage.setItem("quantumverse_theme", themeName);
  },

  toggleTheme: function() {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    let next = "dark";
    if (current === "dark") next = "high-contrast";
    else if (current === "high-contrast") next = "light";
    this.setTheme(next);
  },

  init: function() {
    const saved = localStorage.getItem("quantumverse_theme") || "light";
    this.setTheme(saved);
  }
};

// --- App Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  window.themeManager.init();
  window.studentProgress.load();
  window.router.init();
  window.searchIndexer.buildIndex();
});
