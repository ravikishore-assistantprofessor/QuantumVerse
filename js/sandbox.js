/* ==========================================================================
   QUANTUMVERSE QISKIT CODE PLAYGROUND & SIMULATOR: js/sandbox.js
   ========================================================================== */

window.qiskitSandbox = {
  templates: {
    bell: `# Qiskit v1.0: Generate Bell State (|Φ⁺⟩)
from qiskit import QuantumCircuit
from qiskit_aer import AerSimulator

# Create a 2-qubit quantum circuit
qc = QuantumCircuit(2)

# Place Qubit 0 in superposition
qc.h(0)

# Entangle Qubit 0 and Qubit 1
qc.cx(0, 1)

# Add measurements to all qubits
qc.measure_all()

# Run simulator
simulator = AerSimulator()
result = simulator.run(qc).result()
counts = result.get_counts()
print("Measurement outcomes:", counts)
`,
    superposition: `# Qiskit v1.0: Single Qubit Hadamard Superposition
from qiskit import QuantumCircuit
from qiskit_aer import AerSimulator

# Create a 1-qubit circuit
qc = QuantumCircuit(1)

# Apply Hadamard gate to create 50/50 superposition
qc.h(0)

# Measure the qubit
qc.measure_all()

# Simulate
simulator = AerSimulator()
result = simulator.run(qc).result()
counts = result.get_counts()
print("Measurement outcomes:", counts)
`,
    cnot: `# Qiskit v1.0: CNOT Gate Test
from qiskit import QuantumCircuit
from qiskit_aer import AerSimulator

# Create a 2-qubit circuit
qc = QuantumCircuit(2)

# Flip Qubit 0 to |1⟩
qc.x(0)

# Apply CNOT: control=0, target=1
qc.cx(0, 1)

qc.measure_all()

# Simulate
simulator = AerSimulator()
result = simulator.run(qc).result()
counts = result.get_counts()
print("Measurement outcomes:", counts)
`,
    multi: `# Qiskit v1.0: 3-Qubit GHZ maximally entangled state
from qiskit import QuantumCircuit
from qiskit_aer import AerSimulator

# Create a 3-qubit circuit
qc = QuantumCircuit(3)

# Put qubit 0 in superposition
qc.h(0)

# Entangle Qubit 0 with Qubit 1 and 2
qc.cx(0, 1)
qc.cx(1, 2)

qc.measure_all()

# Simulate
simulator = AerSimulator()
result = simulator.run(qc).result()
counts = result.get_counts()
print("Measurement outcomes:", counts)
`
  },

  init: function() {
    this.loadTemplate("bell");
  },

  loadTemplate: function(name) {
    const editor = document.getElementById("sandbox-code-editor");
    if (editor && this.templates[name]) {
      editor.value = this.templates[name];
    }
  },

  switchTab: function(tabId) {
    const tabs = ["circuit", "histogram", "console"];
    tabs.forEach(t => {
      const pane = document.getElementById(`sandbox-pane-${t}`);
      const btn = document.getElementById(`sandbox-tab-${t}`);
      if (pane) pane.style.display = t === tabId ? "block" : "none";
      if (btn) {
        if (t === tabId) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      }
    });
  },

  // Complex Helper (local to sandbox simulator)
  complexMul: function(c1, c2) {
    return {
      r: c1.r * c2.r - c1.i * c2.i,
      i: c1.r * c2.i + c1.i * c2.r
    };
  },

  complexAdd: function(c1, c2) {
    return { r: c1.r + c2.r, i: c1.i + c2.i };
  },

  runCode: function() {
    const editor = document.getElementById("sandbox-code-editor");
    const consoleText = document.getElementById("sandbox-console-text");
    if (!editor || !consoleText) return;

    const code = editor.value;
    consoleText.textContent = "> Compiling and running Qiskit code...\n";

    // 1. Parsing lines
    const lines = code.split("\n");
    let numQubits = 0;
    const gates = [];
    let hasMeasure = false;

    // Standard Single Qubit Matrices
    const GATES = {
      H: [
        [{r: 1/Math.sqrt(2), i:0}, {r: 1/Math.sqrt(2), i:0}],
        [{r: 1/Math.sqrt(2), i:0}, {r: -1/Math.sqrt(2), i:0}]
      ],
      X: [
        [{r:0, i:0}, {r:1, i:0}],
        [{r:1, i:0}, {r:0, i:0}]
      ],
      Y: [
        [{r:0, i:0}, {r:0, i:-1}],
        [{r:0, i:1}, {r:0, i:0}]
      ],
      Z: [
        [{r:1, i:0}, {r:0, i:0}],
        [{r:0, i:0}, {r:-1, i:0}]
      ],
      S: [
        [{r:1, i:0}, {r:0, i:0}],
        [{r:0, i:0}, {r:0, i:1}]
      ],
      T: [
        [{r:1, i:0}, {r:0, i:0}],
        [{r:0, i:0}, {r:Math.cos(Math.PI/4), i:Math.sin(Math.PI/4)}]
      ]
    };

    for (let line of lines) {
      const clean = line.split("#")[0].trim();
      if (!clean) continue;

      // Match QuantumCircuit(n)
      const circMatch = clean.match(/QuantumCircuit\s*\(\s*(\d+)\s*\)/);
      if (circMatch) {
        numQubits = parseInt(circMatch[1]);
        if (numQubits > 3 || numQubits < 1) {
          consoleText.textContent += "Error: This sandbox supports 1, 2, or 3 qubits for optimal performance.\n";
          return;
        }
        continue;
      }

      // Match qc.h(q), qc.x(q), etc.
      const singleGateMatch = clean.match(/qc\.([hxystz])\(\s*(\d+)\s*\)/i);
      if (singleGateMatch) {
        const type = singleGateMatch[1].toUpperCase();
        const qubit = parseInt(singleGateMatch[2]);
        if (qubit >= numQubits) {
          consoleText.textContent += `Error: Index out of range. Qubit ${qubit} does not exist in a ${numQubits}-qubit circuit.\n`;
          return;
        }
        gates.push({ type, qubit });
        continue;
      }

      // Match CNOT / cx
      const cnotMatch = clean.match(/qc\.(cx|cnot)\(\s*(\d+)\s*,\s*(\d+)\s*\)/i);
      if (cnotMatch) {
        const ctrl = parseInt(cnotMatch[2]);
        const targ = parseInt(cnotMatch[3]);
        if (ctrl >= numQubits || targ >= numQubits) {
          consoleText.textContent += `Error: CNOT index out of range. Ctrl ${ctrl}, Target ${targ}.\n`;
          return;
        }
        gates.push({ type: "CX", ctrl, targ });
        continue;
      }

      // Match measure
      if (clean.includes("measure_all") || clean.includes(".measure(")) {
        hasMeasure = true;
      }
    }

    if (numQubits === 0) {
      consoleText.textContent += "Error: No QuantumCircuit initialized (e.g. qc = QuantumCircuit(2)).\n";
      return;
    }

    consoleText.textContent += `✓ Compiled circuit with ${numQubits} qubits and ${gates.length} gates.\n`;

    // 2. Simulation State Vector Calculation
    const stateSize = Math.pow(2, numQubits);
    let state = Array(stateSize).fill(0).map((_, idx) => idx === 0 ? {r:1, i:0} : {r:0, i:0});

    for (let gate of gates) {
      if (gate.type === "CX") {
        // Apply CNOT gate
        const c = gate.ctrl;
        const t = gate.targ;
        const newState = Array(stateSize).fill(0).map(() => ({r:0, i:0}));
        
        for (let i = 0; i < stateSize; i++) {
          const bitCtrl = (i >> c) & 1;
          if (bitCtrl === 1) {
            // Flip target bit
            const targetFlippedIndex = i ^ (1 << t);
            newState[targetFlippedIndex] = state[i];
          } else {
            newState[i] = state[i];
          }
        }
        state = newState;
      } else {
        // Apply single qubit gate
        const q = gate.qubit;
        const U = GATES[gate.type];
        const newState = Array(stateSize).fill(0).map(() => ({r:0, i:0}));

        for (let i = 0; i < stateSize; i++) {
          const bitQ = (i >> q) & 1;
          if (bitQ === 0) {
            // Pair state i with state where qubit q is 1 (i + 2^q)
            const pairIndex = i | (1 << q);
            const val0 = state[i];
            const val1 = state[pairIndex];

            // out0 = U00 * val0 + U01 * val1
            newState[i] = this.complexAdd(
              this.complexMul(U[0][0], val0),
              this.complexMul(U[0][1], val1)
            );
            // out1 = U10 * val0 + U11 * val1
            newState[pairIndex] = this.complexAdd(
              this.complexMul(U[1][0], val0),
              this.complexMul(U[1][1], val1)
            );
          }
        }
        state = newState;
      }
    }

    // 3. Probabilities
    const probs = state.map(c => c.r * c.r + c.i * c.i);
    
    // Simulate measurement outcomes (1024 runs)
    const counts = {};
    if (hasMeasure) {
      for (let run = 0; run < 1024; run++) {
        const rand = Math.random();
        let cumulative = 0;
        let selectedState = 0;
        for (let s = 0; s < stateSize; s++) {
          cumulative += probs[s];
          if (rand <= cumulative) {
            selectedState = s;
            break;
          }
        }
        const binStr = selectedState.toString(2).padStart(numQubits, "0");
        counts[binStr] = (counts[binStr] || 0) + 1;
      }
    } else {
      // If no measurement, counts reflect exact probabilities
      for (let s = 0; s < stateSize; s++) {
        if (probs[s] > 0.01) {
          const binStr = s.toString(2).padStart(numQubits, "0");
          counts[binStr] = Math.round(probs[s] * 1024);
        }
      }
    }

    // Output console log
    consoleText.textContent += `Simulator executed. Outputs:\n`;
    consoleText.textContent += `Measurement outcomes: ${JSON.stringify(counts)}\n`;

    // 4. Render Circuit SVG
    this.drawCircuitSVG(numQubits, gates);

    // 5. Render Histogram Bars
    this.renderHistogramBars(numQubits, probs);

    // Auto switch to circuit tab
    this.switchTab("circuit");
  },

  drawCircuitSVG: function(numQubits, gates) {
    const container = document.getElementById("sandbox-pane-circuit");
    if (!container) return;

    const spacingY = 50;
    const marginY = 30;
    const spacingX = 60;
    const marginX = 80;
    
    const svgWidth = Math.max(300, marginX * 2 + gates.length * spacingX);
    const svgHeight = marginY * 2 + (numQubits - 1) * spacingY;

    let svgHtml = `<svg width="${svgWidth}" height="${svgHeight}" style="background-color: var(--bg-secondary); border-radius: var(--border-radius-md); overflow:visible;">`;

    // Draw lines for qubit wires
    for (let q = 0; q < numQubits; q++) {
      const y = marginY + q * spacingY;
      svgHtml += `<line x1="20" y1="${y}" x2="${svgWidth - 20}" y2="${y}" stroke="var(--text-tertiary)" stroke-width="2"></line>`;
      svgHtml += `<text x="15" y="${y + 5}" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="12" font-weight="bold" text-anchor="end">q[${q}]</text>`;
    }

    // Place Gates
    gates.forEach((gate, idx) => {
      const x = marginX + idx * spacingX;
      
      if (gate.type === "CX") {
        // CNOT gate
        const yCtrl = marginY + gate.ctrl * spacingY;
        const yTarg = marginY + gate.targ * spacingY;

        // Vertical line connector
        svgHtml += `<line x1="${x}" y1="${yCtrl}" x2="${x}" y2="${yTarg}" stroke="var(--electric-blue)" stroke-width="2"></line>`;
        
        // Control dot (●)
        svgHtml += `<circle cx="${x}" cy="${yCtrl}" r="6" fill="var(--electric-blue)"></circle>`;
        
        // Target circle (⊕)
        svgHtml += `<circle cx="${x}" cy="${yTarg}" r="12" fill="none" stroke="var(--electric-blue)" stroke-width="2"></circle>`;
        svgHtml += `<line x1="${x - 12}" y1="${yTarg}" x2="${x + 12}" y2="${yTarg}" stroke="var(--electric-blue)" stroke-width="2"></line>`;
        svgHtml += `<line x1="${x}" y1="${yTarg - 12}" x2="${x}" y2="${yTarg + 12}" stroke="var(--electric-blue)" stroke-width="2"></line>`;
      } else {
        // Single qubit gate box
        const y = marginY + gate.qubit * spacingY;
        const boxSize = 30;

        let boxColor = "var(--quantum-purple)";
        if (gate.type === "H") boxColor = "var(--cyan)";
        if (gate.type === "X") boxColor = "var(--electric-blue)";

        svgHtml += `<rect x="${x - boxSize/2}" y="${y - boxSize/2}" width="${boxSize}" height="${boxSize}" rx="4" fill="${boxColor}" stroke="var(--border-color)" stroke-width="1"></rect>`;
        svgHtml += `<text x="${x}" y="${y + 4}" fill="${gate.type === "H" ? "var(--primary-navy)" : "white"}" font-family="var(--font-mono)" font-size="12" font-weight="bold" text-anchor="middle">${gate.type}</text>`;
      }
    });

    svgHtml += `</svg>`;
    container.innerHTML = svgHtml;
  },

  renderHistogramBars: function(numQubits, probs) {
    const container = document.getElementById("sandbox-histogram-bars");
    if (!container) return;

    container.innerHTML = "";
    const stateSize = probs.length;

    for (let s = 0; s < stateSize; s++) {
      const binStr = s.toString(2).padStart(numQubits, "0");
      const pct = (probs[s] * 100).toFixed(0);

      const wrapper = document.createElement("div");
      wrapper.className = "probability-bar-wrapper";
      wrapper.innerHTML = `
        <div class="probability-bar-header">
          <span>|${binStr}⟩</span>
          <span>${pct}%</span>
        </div>
        <div class="probability-bar-outer">
          <div class="probability-bar-inner" style="width: ${pct}%;"></div>
        </div>
      `;
      container.appendChild(wrapper);
    }
  }
};

// Autoload sandbox template on DOM load
document.addEventListener("DOMContentLoaded", () => {
  if (window.qiskitSandbox) {
    window.qiskitSandbox.init();
  }
});
