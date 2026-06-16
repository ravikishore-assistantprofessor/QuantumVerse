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
  }
};
