/* ==========================================================================
   QUANTUMVERSE QUIZ ENGINE: js/quiz.js
   ========================================================================== */

window.quizState = {
  currentModuleId: null,
  currentQuestions: [],
  currentIndex: 0,
  score: 0,
  selectedOption: null,
  hasAnswered: false,

  startQuiz: function(moduleId) {
    const module = window.quantumContent.find(m => m.id === moduleId);
    if (!module) return;

    this.currentModuleId = moduleId;
    this.currentQuestions = module.practiceQuestions.mcqs;
    this.currentIndex = 0;
    this.score = 0;
    this.selectedOption = null;
    this.hasAnswered = false;

    // Show quiz panel, hide start overlay
    document.getElementById("quiz-start-overlay").style.display = "none";
    document.getElementById("quiz-active-container").style.display = "block";
    document.getElementById("quiz-results-container").style.display = "none";

    document.getElementById("quiz-module-title").textContent = `Module ${moduleId} Quiz: ${module.title}`;

    this.renderQuestion();
  },

  renderQuestion: function() {
    if (this.currentIndex >= this.currentQuestions.length) {
      this.showResults();
      return;
    }

    const q = this.currentQuestions[this.currentIndex];
    
    // Reset state
    this.selectedOption = null;
    this.hasAnswered = false;

    // Update Progress labels
    document.getElementById("quiz-q-num").textContent = `Question ${this.currentIndex + 1} of ${this.currentQuestions.length}`;
    document.getElementById("quiz-q-difficulty").textContent = q.difficulty;
    document.getElementById("quiz-q-difficulty").className = `quiz-question-num ${q.difficulty.toLowerCase()}`;

    // Render text
    document.getElementById("quiz-question-text").textContent = q.question;

    // Render options
    const optionsContainer = document.getElementById("quiz-options-list");
    optionsContainer.innerHTML = "";

    const letters = ["A", "B", "C", "D"];
    q.options.forEach((opt, idx) => {
      const optionDiv = document.createElement("div");
      optionDiv.className = "quiz-option";
      optionDiv.dataset.index = idx;
      optionDiv.innerHTML = `
        <span class="quiz-option-letter">${letters[idx]}</span>
        <span class="quiz-option-text">${opt}</span>
      `;
      optionDiv.addEventListener("click", () => this.selectOption(idx));
      optionsContainer.appendChild(optionDiv);
    });

    // Hide feedback panel and Next button
    document.getElementById("quiz-feedback-panel").style.display = "none";
    document.getElementById("quiz-next-btn").style.display = "none";
  },

  selectOption: function(optionIndex) {
    if (this.hasAnswered) return;
    this.hasAnswered = true;
    this.selectedOption = optionIndex;

    const q = this.currentQuestions[this.currentIndex];
    const letters = ["A", "B", "C", "D"];
    const chosenLetter = letters[optionIndex];
    const isCorrect = chosenLetter === q.answer;

    if (isCorrect) {
      this.score++;
    }

    // Highlight options
    const options = document.querySelectorAll(".quiz-option");
    options.forEach((opt, idx) => {
      if (letters[idx] === q.answer) {
        opt.style.borderColor = "#4CAF50";
        opt.style.backgroundColor = "rgba(76, 175, 80, 0.1)";
      } else if (idx === optionIndex) {
        opt.style.borderColor = "#F44336";
        opt.style.backgroundColor = "rgba(244, 67, 54, 0.1)";
      }
    });

    // Show feedback
    const feedbackPanel = document.getElementById("quiz-feedback-panel");
    feedbackPanel.style.display = "block";
    feedbackPanel.className = isCorrect ? "quiz-feedback correct" : "quiz-feedback incorrect";
    
    document.getElementById("quiz-feedback-title").innerHTML = isCorrect 
      ? "<b>✓ Correct Answer!</b>" 
      : `<b>✗ Incorrect.</b> The correct answer is <b>${q.answer}</b>.`;

    document.getElementById("quiz-feedback-exp").textContent = q.explanation;

    // Show Next button
    document.getElementById("quiz-next-btn").style.display = "inline-flex";
  },

  nextQuestion: function() {
    this.currentIndex++;
    this.renderQuestion();
  },

  showResults: function() {
    document.getElementById("quiz-active-container").style.display = "none";
    document.getElementById("quiz-results-container").style.display = "block";

    const total = this.currentQuestions.length;
    const pct = (this.score / total) * 100;
    
    document.getElementById("quiz-score-pct").textContent = pct.toFixed(0) + "%";
    document.getElementById("quiz-score-fraction").textContent = `You scored ${this.score} out of ${total} questions.`;

    const recEl = document.getElementById("quiz-recommendations");
    if (pct === 100) {
      recEl.innerHTML = `<p style="color:#2E7D32;">🌟 Excellent work! You have fully mastered this module's curriculum.</p>`;
    } else if (pct >= 70) {
      recEl.innerHTML = `<p>Good job! We recommend reviewing the <b>Theory Notes</b> and solving the <b>Numerical Assignments</b> to clarify minor doubts.</p>`;
    } else {
      recEl.innerHTML = `<p style="color:#C62828;">We recommend reading the <b>Formula Sheets</b>, practicing the <b>Solved Examples</b>, and retaking the quiz to improve your score.</p>`;
    }

    // Update Progress database
    if (window.studentProgress) {
      window.studentProgress.recordQuiz(this.currentModuleId, this.score, total);
    }
  }
};
