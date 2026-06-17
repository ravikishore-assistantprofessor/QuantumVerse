/* ==========================================================================
   QUANTUMVERSE PROJECTS RUNTIME: js/projects.js
   ========================================================================== */

window.projectsState = {
  activeProject: null,

  initProject: function(projectId) {
    this.activeProject = projectId;
    const container = document.getElementById("project-playground-container");
    if (!container) return;

    // Load appropriate HTML and bind events
    switch (projectId) {
      case "coin-toss":
        this.loadCoinToss(container);
        break;
      case "dice":
        this.loadDice(container);
        break;
      case "qrng":
        this.loadQRNG(container);
        break;
      case "qkd":
        this.loadQKD(container);
        break;
      case "dj":
        this.loadDJ(container);
        break;
      default:
        container.innerHTML = `<p class="text-secondary">Select a project from the cards above to launch the interactive simulator.</p>`;
    }
  },

  // --- Project 1: Quantum Coin Toss ---
  loadCoinToss: function(container) {
    container.innerHTML = `
      <div class="lab-panel">
        <h3 class="lab-panel-title">🪙 Quantum Coin Toss Simulator</h3>
        <p>A classical coin is deterministic (Heads or Tails). A quantum coin starts as |0⟩ (Heads). We apply a Hadamard gate to put it in a superposition state: <b>(|0⟩ + |1⟩)/√2</b>. Measuring it collapses the state, yielding a 50% probability of Heads or Tails.</p>
        
        <div style="text-align: center; margin: 2rem 0;">
          <div id="quantum-coin" style="width: 100px; height: 100px; border-radius: 50%; background: radial-gradient(circle, var(--cyan) 0%, var(--quantum-purple) 100%); margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 2rem; color: white; font-weight: bold; border: 4px solid white; box-shadow: var(--shadow-lg); transition: transform 1s ease-in-out;">
            ?
          </div>
          <div style="margin-top: 1.5rem; font-family: var(--font-mono); font-weight: bold;" id="coin-state-readout">State: |0⟩</div>
        </div>

        <div style="display: flex; gap: 1rem; justify-content: center;">
          <button class="btn btn-primary" onclick="window.projectsState.flipCoin()">Apply H & Flip</button>
          <button class="btn btn-secondary" onclick="window.projectsState.resetCoin()">Reset</button>
        </div>
      </div>
    `;
  },

  flipCoin: function() {
    const coin = document.getElementById("quantum-coin");
    const readout = document.getElementById("coin-state-readout");
    if (!coin || !readout) return;

    // Apply spin animation
    coin.style.transform = "rotateY(720deg) scale(1.1)";
    readout.textContent = "State: (|0⟩ + |1⟩)/√2 (Superposition)";

    setTimeout(() => {
      const outcome = Math.random() < 0.5 ? "Heads" : "Tails";
      coin.style.transform = "rotateY(0deg) scale(1)";
      coin.textContent = outcome === "Heads" ? "H" : "T";
      readout.textContent = `Measured Outcome: ${outcome} (Collapsed to |${outcome === "Heads" ? "0" : "1"}⟩)`;
      
      // Track progress
      if (window.studentProgress) window.studentProgress.recordProject("coin-toss");
    }, 1000);
  },

  resetCoin: function() {
    const coin = document.getElementById("quantum-coin");
    const readout = document.getElementById("coin-state-readout");
    if (coin && readout) {
      coin.textContent = "?";
      coin.style.transform = "rotateY(0deg)";
      readout.textContent = "State: |0⟩";
    }
  },

  // --- Project 2: Quantum Dice ---
  loadDice: function(container) {
    container.innerHTML = `
      <div class="lab-panel">
        <h3 class="lab-panel-title">🎲 8-Sided Quantum Dice</h3>
        <p>By applying Hadamard gates to a 3-qubit register, we create a superposition of 2³ = 8 basis states: <b>|000⟩</b> through <b>|111⟩</b>. Measuring them collapses the register, giving an equal 1/8 (12.5%) chance for any number from 1 to 8.</p>
        
        <div style="text-align: center; margin: 2rem 0;">
          <div id="quantum-die" style="width: 80px; height: 80px; background-color: var(--bg-tertiary); border: 2px solid var(--border-color); border-radius: var(--border-radius-md); margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; font-weight: 800; color: var(--quantum-purple); box-shadow: var(--shadow-md); transition: transform 0.5s ease;">
            ?
          </div>
          <div style="margin-top: 1.5rem; font-family: var(--font-mono); font-size: 0.9rem;" id="die-state-readout">State: |000⟩</div>
        </div>

        <div style="display: flex; gap: 1rem; justify-content: center;">
          <button class="btn btn-primary" onclick="window.projectsState.rollDice()">Apply H⊗3 & Roll</button>
          <button class="btn btn-secondary" onclick="window.projectsState.resetDice()">Reset</button>
        </div>
      </div>
    `;
  },

  rollDice: function() {
    const die = document.getElementById("quantum-die");
    const readout = document.getElementById("die-state-readout");
    if (!die || !readout) return;

    die.style.transform = "rotate(360deg) scale(0.9)";
    readout.textContent = "Superposition: (1/√8) ∑ |x⟩";

    setTimeout(() => {
      const roll = Math.floor(Math.random() * 8) + 1;
      const binary = (roll - 1).toString(2).padStart(3, "0");
      die.style.transform = "rotate(0deg) scale(1)";
      die.textContent = roll;
      readout.textContent = `Outcome: Die rolled ${roll} (Collapsed to state |${binary}⟩)`;

      if (window.studentProgress) window.studentProgress.recordProject("dice");
    }, 500);
  },

  resetDice: function() {
    const die = document.getElementById("quantum-die");
    const readout = document.getElementById("die-state-readout");
    if (die && readout) {
      die.textContent = "?";
      readout.textContent = "State: |000⟩";
    }
  },

  // --- Project 3: QRNG ---
  loadQRNG: function(container) {
    container.innerHTML = `
      <div class="lab-panel">
        <h3 class="lab-panel-title">🔑 Quantum Random Number Generator</h3>
        <p>Unlike pseudo-random software, quantum measurement randomness is fundamentally unpredictable. Here we simulate measuring single qubits in superposition to compile secure cryptographic strings.</p>
        
        <div style="margin-bottom: 1.5rem;">
          <label style="font-weight: 600; display: block; margin-bottom: 0.5rem;">Key Length (Bits):</label>
          <select id="qrng-length" style="padding: 0.5rem 1rem; border-radius: var(--border-radius-sm); border: 1px solid var(--border-color); width: 100%;">
            <option value="8">8 Bits</option>
            <option value="16" selected>16 Bits</option>
            <option value="32">32 Bits</option>
            <option value="64">64 Bits</option>
          </select>
        </div>

        <div style="background-color: var(--bg-tertiary); padding: 1rem; border-radius: var(--border-radius-sm); margin-bottom: 1.5rem;">
          <div style="font-size: 0.8rem; font-weight: bold; color: var(--text-secondary); text-transform: uppercase;">Binary Output</div>
          <div id="qrng-bin" style="font-family: var(--font-mono); font-size: 1.1rem; word-break: break-all; margin: 0.5rem 0;">-</div>
          
          <div style="font-size: 0.8rem; font-weight: bold; color: var(--text-secondary); text-transform: uppercase; margin-top: 1rem;">Hex Output</div>
          <div id="qrng-hex" style="font-family: var(--font-mono); font-size: 1.1rem; word-break: break-all; margin: 0.5rem 0;">-</div>
        </div>

        <div style="text-align: center;">
          <button class="btn btn-primary" onclick="window.projectsState.generateKey()">Generate Quantum Key</button>
        </div>
      </div>
    `;
  },

  generateKey: function() {
    const lenSelect = document.getElementById("qrng-length");
    const binOutput = document.getElementById("qrng-bin");
    const hexOutput = document.getElementById("qrng-hex");
    if (!lenSelect || !binOutput || !hexOutput) return;

    const length = parseInt(lenSelect.value);
    let binary = "";
    for (let i = 0; i < length; i++) {
      binary += Math.random() < 0.5 ? "0" : "1";
    }

    binOutput.textContent = binary;
    
    // Convert binary to hex
    let hex = "";
    for (let i = 0; i < binary.length; i += 4) {
      const chunk = binary.substring(i, i + 4);
      hex += parseInt(chunk, 2).toString(16).toUpperCase();
    }
    hexOutput.textContent = "0x" + hex;

    if (window.studentProgress) window.studentProgress.recordProject("qrng");
  },

  // --- Project 4: QKD BB84 ---
  loadQKD: function(container) {
    container.innerHTML = `
      <div class="lab-panel" style="max-width: 100%;">
        <h3 class="lab-panel-title">📡 Quantum Key Distribution (BB84)</h3>
        <p>Simulate Alice sending 10 qubits to Bob. They randomize polarizations and compare bases to establish a secure cryptographic key.</p>
        
        <div style="overflow-x: auto; margin: 1.5rem 0;">
          <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem;" id="qkd-table">
            <thead>
              <tr style="border-bottom: 2px solid var(--border-color); text-align: left;">
                <th style="padding: 0.5rem;">Pulse</th>
                <th style="padding: 0.5rem;">Alice Bit</th>
                <th style="padding: 0.5rem;">Alice Base</th>
                <th style="padding: 0.5rem;">Alice State</th>
                <th style="padding: 0.5rem;">Bob Base</th>
                <th style="padding: 0.5rem;">Bob Measure</th>
                <th style="padding: 0.5rem;">Match?</th>
                <th style="padding: 0.5rem;">Key Bit</th>
              </tr>
            </thead>
            <tbody id="qkd-table-body">
              <tr>
                <td colspan="8" style="text-align: center; padding: 2rem; color: var(--text-secondary);">Click "Run QKD Protocol" to begin.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style="background-color: var(--bg-tertiary); padding: 1rem; border-radius: var(--border-radius-md); margin-bottom: 1.5rem;">
          <div style="font-weight: 700; color: var(--primary-navy); margin-bottom: 0.5rem;">Shared Secret Key Result:</div>
          <div id="qkd-final-key" style="font-family: var(--font-mono); font-size: 1.25rem; font-weight: bold; color: var(--quantum-purple);">-</div>
        </div>

        <div style="text-align: center;">
          <button class="btn btn-primary" onclick="window.projectsState.runQKD()">Run QKD Protocol</button>
        </div>
      </div>
    `;
  },

  runQKD: function() {
    const tbody = document.getElementById("qkd-table-body");
    const keyReadout = document.getElementById("qkd-final-key");
    if (!tbody || !keyReadout) return;

    tbody.innerHTML = "";
    let finalKey = "";

    const basesList = ["+", "×"]; // + = Rectilinear, × = Diagonal
    const states = {
      "+": ["|0⟩", "|1⟩"], // Index 0 or 1
      "×": ["|+⟩", "|-⟩"]
    };

    for (let pulse = 1; pulse <= 10; pulse++) {
      const aliceBit = Math.random() < 0.5 ? 0 : 1;
      const aliceBase = basesList[Math.floor(Math.random() * 2)];
      const aliceState = states[aliceBase][aliceBit];
      
      const bobBase = basesList[Math.floor(Math.random() * 2)];
      
      let bobMeasure = 0;
      if (aliceBase === bobBase) {
        bobMeasure = aliceBit;
      } else {
        bobMeasure = Math.random() < 0.5 ? 0 : 1; // Random output if bases mismatch
      }

      const match = aliceBase === bobBase ? "Yes" : "No";
      let keyBit = "-";
      let matchStyle = "color: #F44336; font-weight: bold;";
      if (match === "Yes") {
        keyBit = aliceBit.toString();
        finalKey += keyBit;
        matchStyle = "color: #4CAF50; font-weight: bold;";
      }

      const tr = document.createElement("tr");
      tr.style.borderBottom = "1px solid var(--border-color)";
      tr.innerHTML = `
        <td style="padding: 0.5rem; font-weight: bold;">#${pulse}</td>
        <td style="padding: 0.5rem; font-family: var(--font-mono);">${aliceBit}</td>
        <td style="padding: 0.5rem; font-weight: bold; font-family: var(--font-mono);">${aliceBase}</td>
        <td style="padding: 0.5rem; font-family: var(--font-mono);">${aliceState}</td>
        <td style="padding: 0.5rem; font-weight: bold; font-family: var(--font-mono);">${bobBase}</td>
        <td style="padding: 0.5rem; font-family: var(--font-mono);">${bobMeasure}</td>
        <td style="padding: 0.5rem; ${matchStyle}">${match}</td>
        <td style="padding: 0.5rem; font-weight: bold; font-family: var(--font-mono); color: var(--quantum-purple);">${keyBit}</td>
      `;
      tbody.appendChild(tr);
    }

    keyReadout.textContent = finalKey.length > 0 ? finalKey : "No bits matched. Retrying would be required.";
    
    if (window.studentProgress) window.studentProgress.recordProject("qkd");
  },

  djState: {
    step: 1,
    oracle: "constant-0"
  },

  loadDJ: function(container) {
    this.djState.step = 1;
    container.innerHTML = `
      <div class="lab-panel">
        <h3 class="lab-panel-title">🖥 Deutsch-Jozsa Algorithm Visualizer</h3>
        <p>The Deutsch-Jozsa algorithm determines if a boolean function f(x) is constant (always 0 or always 1) or balanced (equal 0s and 1s) in a single query, which classically takes 2 queries.</p>
        
        <div style="margin-bottom:1.5rem; display:flex; gap:1rem; align-items:center; flex-wrap:wrap;">
          <div>
            <label style="font-weight:600; font-size:0.85rem; display:block; margin-bottom:0.5rem; color:var(--text-secondary);">Select Oracle Function (f):</label>
            <select id="dj-oracle-select" onchange="window.projectsState.setDJOracle(this.value)" style="padding:0.4rem 0.8rem; border-radius:var(--border-radius-sm); border:1px solid var(--border-color); background:var(--bg-secondary); color:var(--text-primary); font-size:0.9rem;">
              <option value="constant-0">Constant 0 (f(x) = 0)</option>
              <option value="constant-1">Constant 1 (f(x) = 1)</option>
              <option value="balanced-01">Balanced A (f(0) = 0, f(1) = 1)</option>
              <option value="balanced-10">Balanced B (f(0) = 1, f(1) = 0)</option>
            </select>
          </div>
        </div>

        <div style="display:grid; grid-template-columns: 1.2fr 0.8fr; gap:2rem; align-items:stretch; margin-bottom:1.5rem;">
          <!-- Left: Math & explanation -->
          <div class="lab-panel" style="background-color:var(--bg-tertiary); justify-content:space-between; padding:1.5rem;">
            <div>
              <h4 style="color:var(--quantum-purple); margin-bottom:0.5rem; font-size:1.1rem;" id="dj-step-title">Step 1: Initialization</h4>
              <p id="dj-step-desc" style="font-size:0.9rem; line-height:1.5; color:var(--text-secondary);"></p>
            </div>
            
            <div style="display:flex; justify-content:space-between; margin-top:1.5rem;">
              <button class="btn btn-secondary btn-sm" onclick="window.projectsState.prevDJStep()" style="padding:0.4rem 0.8rem; font-size:0.85rem;">← Previous</button>
              <span id="dj-step-indicator" style="font-weight:600; font-size:0.9rem; align-self:center; color:var(--text-secondary);">Step 1 of 4</span>
              <button class="btn btn-primary btn-sm" onclick="window.projectsState.nextDJStep()" style="padding:0.4rem 0.8rem; font-size:0.85rem;">Next →</button>
            </div>
          </div>

          <!-- Right: Visual Circuit & Math state -->
          <div class="lab-panel" style="border:1px solid var(--border-color); align-items:center; justify-content:center; gap:1.5rem; padding:1.5rem;">
            <div id="dj-circuit-svg" style="width:100%; display:flex; justify-content:center;"></div>
            <div style="text-align:center; font-family:var(--font-mono); font-weight:700; font-size:0.95rem; color:var(--text-primary);" id="dj-math-state">
              State: |01⟩
            </div>
          </div>
        </div>
      </div>
    `;
    this.updateDJView();
  },

  setDJOracle: function(val) {
    this.djState.oracle = val;
    this.updateDJView();
  },

  prevDJStep: function() {
    if (this.djState.step > 1) {
      this.djState.step--;
      this.updateDJView();
    }
  },

  nextDJStep: function() {
    if (this.djState.step < 4) {
      this.djState.step++;
      this.updateDJView();
      if (this.djState.step === 4 && window.studentProgress) {
        window.studentProgress.recordProject("dj");
      }
    }
  },

  updateDJView: function() {
    const stepTitle = document.getElementById("dj-step-title");
    const stepDesc = document.getElementById("dj-step-desc");
    const stepInd = document.getElementById("dj-step-indicator");
    const mathState = document.getElementById("dj-math-state");
    const circuitDiv = document.getElementById("dj-circuit-svg");

    if (!stepTitle || !stepDesc || !stepInd || !mathState || !circuitDiv) return;

    const step = this.djState.step;
    const oracle = this.djState.oracle;
    stepInd.textContent = `Step ${step} of 4`;

    let stateText = "";
    let desc = "";
    let title = "";
    let svgGates = [];

    const isConstant = oracle.startsWith("constant");
    const f0 = oracle === "constant-1" || oracle === "balanced-10" ? 1 : 0;
    const f1 = oracle === "constant-1" || oracle === "balanced-01" ? 1 : 0;

    switch (step) {
      case 1:
        title = "Step 1: State Initialization";
        desc = "We initialize the input qubit q0 in state |0⟩ and the helper qubit q1 in state |1⟩. The total initial state vector is: |01⟩.";
        stateText = "State: |01⟩";
        svgGates = [];
        break;
      case 2:
        title = "Step 2: Superposition";
        desc = "Apply a Hadamard gate to both qubits. This creates a superposition. The helper qubit q1 is put in the |-⟩ state to prepare for phase kickback. State: (|0⟩+|1⟩)(|0⟩-|1⟩)/2.";
        stateText = "State: (1/2) (|00⟩ - |01⟩ + |10⟩ - |11⟩)";
        svgGates = [{ type: "H", q: 0 }, { type: "H", q: 1 }];
        break;
      case 3:
        title = "Step 3: Oracle Query";
        desc = `Apply the Oracle gate U_f which maps |x, y⟩ → |x, y ⊕ f(x)⟩. Under phase kickback, this multiplies state |0⟩ by (-1)^f(0) and |1⟩ by (-1)^f(1), changing the relative phase. Here, f(0) = ${f0} and f(1) = ${f1}.`;
        
        // Compute math state vector based on oracle
        if (oracle === "constant-0") stateText = "State: (1/2) (|00⟩ - |01⟩ + |10⟩ - |11⟩)";
        if (oracle === "constant-1") stateText = "State: (1/2) (-|00⟩ + |01⟩ - |10⟩ + |11⟩)";
        if (oracle === "balanced-01") stateText = "State: (1/2) (|00⟩ - |01⟩ - |10⟩ + |11⟩)";
        if (oracle === "balanced-10") stateText = "State: (1/2) (-|00⟩ + |01⟩ + |10⟩ - |11⟩)";

        svgGates = [{ type: "H", q: 0 }, { type: "H", q: 1 }, { type: "U_f", q: 0, q1: 1 }];
        break;
      case 4:
        title = "Step 4: Interference & Measurement";
        desc = `Apply another Hadamard gate to the input qubit q0 to cause constructive or destructive interference. 
        Measuring q0 yields |${isConstant ? '0' : '1'}⟩ with 100% probability. Because the function is ${isConstant ? 'CONSTANT' : 'BALANCED'}, we resolved it in exactly ONE query!`;
        
        stateText = isConstant ? "Measured outcome: |0⟩ (Constant)" : "Measured outcome: |1⟩ (Balanced)";
        
        svgGates = [{ type: "H", q: 0 }, { type: "H", q: 1 }, { type: "U_f", q: 0, q1: 1 }, { type: "H", q: 0 }, { type: "Measure", q: 0 }];
        break;
    }

    stepTitle.textContent = title;
    stepDesc.textContent = desc;
    mathState.textContent = stateText;

    // Draw simple SVG circuit diagram
    const svgWidth = 280;
    const svgHeight = 110;
    const spacingY = 40;
    const marginY = 30;
    
    let svgHtml = `<svg width="${svgWidth}" height="${svgHeight}" style="background-color: var(--bg-secondary); overflow:visible;">`;
    
    // Draw wire lines
    for (let q = 0; q < 2; q++) {
      const y = marginY + q * spacingY;
      svgHtml += `<line x1="20" y1="${y}" x2="${svgWidth - 20}" y2="${y}" stroke="var(--text-tertiary)" stroke-width="2"></line>`;
      svgHtml += `<text x="15" y="${y + 4}" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="12" font-weight="bold" text-anchor="end">q[${q}]</text>`;
    }

    // Draw gates
    let currentX = 60;
    svgGates.forEach(gate => {
      const y = marginY + gate.q * spacingY;
      
      if (gate.type === "U_f") {
        // Double wire oracle box
        const y0 = marginY;
        svgHtml += `<rect x="${currentX - 15}" y="${y0 - 15}" width="30" height="70" rx="4" fill="var(--quantum-purple)" stroke="var(--border-color)" stroke-width="1"></rect>`;
        svgHtml += `<text x="${currentX}" y="${y0 + 24}" fill="white" font-family="var(--font-mono)" font-size="12" font-weight="bold" text-anchor="middle">U</text>`;
        svgHtml += `<text x="${currentX}" y="${y0 + 36}" fill="white" font-family="var(--font-mono)" font-size="9" font-weight="bold" text-anchor="middle">f</text>`;
      } else if (gate.type === "Measure") {
        svgHtml += `<rect x="${currentX - 15}" y="${y - 15}" width="30" height="30" rx="4" fill="var(--primary-navy)" stroke="var(--border-color)" stroke-width="1"></rect>`;
        svgHtml += `<text x="${currentX}" y="${y + 5}" fill="white" font-family="var(--font-sans)" font-size="14" font-weight="bold" text-anchor="middle">M</text>`;
      } else {
        // Single qubit gate (H)
        svgHtml += `<rect x="${currentX - 15}" y="${y - 15}" width="30" height="30" rx="4" fill="var(--cyan)" stroke="var(--border-color)" stroke-width="1"></rect>`;
        svgHtml += `<text x="${currentX}" y="${y + 5}" fill="var(--primary-navy)" font-family="var(--font-mono)" font-size="12" font-weight="bold" text-anchor="middle">${gate.type}</text>`;
      }
      currentX += 45;
    });

    svgHtml += `</svg>`;
    circuitDiv.innerHTML = svgHtml;
  }
};
