/* ==========================================================================
   QUANTUMVERSE VIRTUAL LAB ENGINE: js/lab.js
   ========================================================================== */

// --- Complex Number Helper Class ---
const Complex = {
  zero: () => ({ r: 0, i: 0 }),
  one: () => ({ r: 1, i: 0 }),
  create: (r, i = 0) => ({ r, i }),
  add: (c1, c2) => ({ r: c1.r + c2.r, i: c1.i + c2.i }),
  sub: (c1, c2) => ({ r: c1.r - c2.r, i: c1.i - c2.i }),
  mul: (c1, c2) => ({
    r: c1.r * c2.r - c1.i * c2.i,
    i: c1.r * c2.i + c1.i * c2.r
  }),
  conj: (c) => ({ r: c.r, i: -c.i }),
  magnitude: (c) => Math.sqrt(c.r * c.r + c.i * c.i),
  magnitudeSq: (c) => c.r * c.r + c.i * c.i,
  scale: (c, s) => ({ r: c.r * s, i: c.i * s }),
  expI: (theta) => ({ r: Math.cos(theta), i: Math.sin(theta) })
};

// --- Single Qubit State Management (Bloch Sphere) ---
window.singleQubitState = {
  alpha: Complex.one(), // |0> state initially
  beta: Complex.zero(),
  
  reset: function() {
    this.alpha = Complex.one();
    this.beta = Complex.zero();
    this.updateUI();
  },

  applyGate: function(gateMatrix) {
    // gateMatrix is a 2x2 array of Complex numbers
    const newAlpha = Complex.add(
      Complex.mul(gateMatrix[0][0], this.alpha),
      Complex.mul(gateMatrix[0][1], this.beta)
    );
    const newBeta = Complex.add(
      Complex.mul(gateMatrix[1][0], this.alpha),
      Complex.mul(gateMatrix[1][1], this.beta)
    );
    this.alpha = newAlpha;
    this.beta = newBeta;
    this.normalize();
    this.updateUI();
  },

  normalize: function() {
    const norm = Math.sqrt(Complex.magnitudeSq(this.alpha) + Complex.magnitudeSq(this.beta));
    if (norm > 0) {
      this.alpha = Complex.scale(this.alpha, 1 / norm);
      this.beta = Complex.scale(this.beta, 1 / norm);
    }
  },

  getCartesian: function() {
    // x = 2 * Re(alpha* * beta)
    const conjAlpha = Complex.conj(this.alpha);
    const alphaStarBeta = Complex.mul(conjAlpha, this.beta);
    const x = 2 * alphaStarBeta.r;
    
    // y = 2 * Im(alpha* * beta)
    const y = 2 * alphaStarBeta.i;
    
    // z = |alpha|^2 - |beta|^2
    const z = Complex.magnitudeSq(this.alpha) - Complex.magnitudeSq(this.beta);
    
    return { x, y, z };
  },

  updateUI: function() {
    const coords = this.getCartesian();
    
    // Update labels in HTML
    const p0 = Complex.magnitudeSq(this.alpha);
    const p1 = Complex.magnitudeSq(this.beta);

    const prob0El = document.getElementById("bloch-prob-0");
    const prob1El = document.getElementById("bloch-prob-1");
    const stateVectorEl = document.getElementById("bloch-state-text");

    if (prob0El) prob0El.textContent = (p0 * 100).toFixed(1) + "%";
    if (prob1El) prob1El.textContent = (p1 * 100).toFixed(1) + "%";

    // Text representation
    if (stateVectorEl) {
      const alphaText = this.formatComplex(this.alpha);
      const betaText = this.formatComplex(this.beta);
      stateVectorEl.innerHTML = `|ψ⟩ = (${alphaText})|0⟩ + (${betaText})|1⟩`;
    }

    // Render Bloch Sphere Vector
    this.drawBlochSphere(coords.x, coords.y, coords.z);
  },

  formatComplex: function(c) {
    if (Math.abs(c.i) < 0.001) return c.r.toFixed(3);
    if (Math.abs(c.r) < 0.001) return c.i.toFixed(3) + "i";
    const sign = c.i >= 0 ? "+" : "-";
    return `${c.r.toFixed(2)} ${sign} ${Math.abs(c.i).toFixed(2)}i`;
  },

  // Dynamic 3D projected drawing of the Bloch Sphere vector using SVG
  drawBlochSphere: function(x, y, z) {
    const svg = document.getElementById("bloch-sphere-svg");
    if (!svg) return;

    // View Angles (Elevation & Azimuth)
    const elSlider = document.getElementById("bloch-el-slider");
    const azSlider = document.getElementById("bloch-az-slider");
    
    const elVal = elSlider ? parseInt(elSlider.value) : 20;
    const azVal = azSlider ? parseInt(azSlider.value) : 45;

    const el = elVal * Math.PI / 180;
    const az = azVal * Math.PI / 180;

    const x0 = 160;
    const y0 = 160;
    const R = 100;

    // Projection Function
    const project = (px, py, pz) => {
      // Rotation around Z (Azimuth)
      const x1 = px * Math.cos(az) - py * Math.sin(az);
      const y1 = px * Math.sin(az) + py * Math.cos(az);
      const z1 = pz;
      
      // Rotation around X (Elevation)
      const x2 = x1;
      const y2 = y1 * Math.cos(el) - z1 * Math.sin(el);
      const z2 = y1 * Math.sin(el) + z1 * Math.cos(el);
      
      return {
        x: x0 + R * x2,
        y: y0 - R * z2 // Y screen is inverted relative to math Z
      };
    };

    // Project axes endpoints
    const axisX = project(1.2, 0, 0);
    const axisY = project(0, 1.2, 0);
    const axisZ = project(0, 0, 1.2);
    
    const axisX_neg = project(-1.2, 0, 0);
    const axisY_neg = project(0, -1.2, 0);
    const axisZ_neg = project(0, 0, -1.2);

    // Project state vector head
    const vectorHead = project(x, y, z);

    // Update SVG elements
    document.getElementById("bloch-axis-x").setAttribute("x1", axisX_neg.x);
    document.getElementById("bloch-axis-x").setAttribute("y1", axisX_neg.y);
    document.getElementById("bloch-axis-x").setAttribute("x2", axisX.x);
    document.getElementById("bloch-axis-x").setAttribute("y2", axisX.y);

    document.getElementById("bloch-axis-y").setAttribute("x1", axisY_neg.x);
    document.getElementById("bloch-axis-y").setAttribute("y1", axisY_neg.y);
    document.getElementById("bloch-axis-y").setAttribute("x2", axisY.x);
    document.getElementById("bloch-axis-y").setAttribute("y2", axisY.y);

    document.getElementById("bloch-axis-z").setAttribute("x1", axisZ_neg.x);
    document.getElementById("bloch-axis-z").setAttribute("y1", axisZ_neg.y);
    document.getElementById("bloch-axis-z").setAttribute("x2", axisZ.x);
    document.getElementById("bloch-axis-z").setAttribute("y2", axisZ.y);

    // Update axis label positions
    const labelX = document.getElementById("bloch-label-x");
    const labelY = document.getElementById("bloch-label-y");
    const labelZ = document.getElementById("bloch-label-z");
    
    if (labelX) { labelX.setAttribute("x", axisX.x + 5); labelX.setAttribute("y", axisX.y + 5); }
    if (labelY) { labelY.setAttribute("x", axisY.x + 5); labelY.setAttribute("y", axisY.y + 5); }
    if (labelZ) { labelZ.setAttribute("x", axisZ.x + 5); labelZ.setAttribute("y", axisZ.y - 5); }

    // Update state vector line and arrowhead
    const blochVectorLine = document.getElementById("bloch-vector-line");
    const blochVectorHead = document.getElementById("bloch-vector-head");
    
    if (blochVectorLine) {
      blochVectorLine.setAttribute("x1", x0);
      blochVectorLine.setAttribute("y1", y0);
      blochVectorLine.setAttribute("x2", vectorHead.x);
      blochVectorLine.setAttribute("y2", vectorHead.y);
    }
    if (blochVectorHead) {
      blochVectorHead.setAttribute("cx", vectorHead.x);
      blochVectorHead.setAttribute("cy", vectorHead.y);
    }

    // Dynamic ellipse for equator projection
    // An ellipse with horizontal radius R, and vertical radius R * sin(elevation)
    const equator = document.getElementById("bloch-equator");
    if (equator) {
      equator.setAttribute("cx", x0);
      equator.setAttribute("cy", y0);
      equator.setAttribute("rx", R);
      equator.setAttribute("ry", R * Math.sin(el));
    }
  }
};

// --- Standard Single Qubit Matrices ---
const SQ_GATES = {
  X: [
    [Complex.zero(), Complex.one()],
    [Complex.one(), Complex.zero()]
  ],
  Y: [
    [Complex.zero(), Complex.create(0, -1)],
    [Complex.create(0, 1), Complex.zero()]
  ],
  Z: [
    [Complex.one(), Complex.zero()],
    [Complex.zero(), Complex.create(-1, 0)]
  ],
  H: [
    [Complex.create(1 / Math.sqrt(2)), Complex.create(1 / Math.sqrt(2))],
    [Complex.create(1 / Math.sqrt(2)), Complex.create(-1 / Math.sqrt(2))]
  ],
  S: [
    [Complex.one(), Complex.zero()],
    [Complex.zero(), Complex.create(0, 1)]
  ],
  T: [
    [Complex.one(), Complex.zero()],
    [Complex.zero(), Complex.create(Math.cos(Math.PI / 4), Math.sin(Math.PI / 4))]
  ]
};

// --- Multi-Qubit Circuit Builder State ---
window.circuitState = {
  slotsCount: 5,
  gates: [
    [null, null, null, null, null], // Wire 0 (Q0)
    [null, null, null, null, null]  // Wire 1 (Q1)
  ],

  clearCircuit: function() {
    this.gates = [
      [null, null, null, null, null],
      [null, null, null, null, null]
    ];
    this.simulate();
  },

  addGate: function(wire, slot, gateType) {
    this.gates[wire][slot] = gateType;
    this.simulate();
  },

  removeGate: function(wire, slot) {
    this.gates[wire][slot] = null;
    this.simulate();
  },

  simulate: function() {
    // State Vector of 2 Qubits initialized to |00>
    // State layout: index 0: |00>, index 1: |01>, index 2: |10>, index 3: |11>
    let state = [
      Complex.one(),  // |00>
      Complex.zero(), // |01>
      Complex.zero(), // |10>
      Complex.zero()  // |11>
    ];

    // Apply gates slot-by-slot from left (0) to right (4)
    for (let slot = 0; slot < this.slotsCount; slot++) {
      const g0 = this.gates[0][slot];
      const g1 = this.gates[1][slot];

      // Check if both are CNOT targets or controls
      if ((g0 === "CX-ctrl" && g1 === "CX-targ") || (g0 === "CX-targ" && g1 === "CX-ctrl")) {
        // CNOT Gate
        const controlQubit = g0 === "CX-ctrl" ? 0 : 1;
        state = this.applyCNOT(state, controlQubit);
      } else {
        // Apply single-qubit gates independently (Q0 first, then Q1)
        if (g0 && g0 !== "CX-ctrl" && g0 !== "CX-targ") {
          state = this.applySingleQubitGate(state, 0, SQ_GATES[g0]);
        }
        if (g1 && g1 !== "CX-ctrl" && g1 !== "CX-targ") {
          state = this.applySingleQubitGate(state, 1, SQ_GATES[g1]);
        }
      }
    }

    // Render results
    this.renderResults(state);
    this.renderCircuit();
  },

  applySingleQubitGate: function(state, qubitIndex, gateMatrix) {
    const newState = [Complex.zero(), Complex.zero(), Complex.zero(), Complex.zero()];
    
    // Qubit 0 is top wire (LSB in binary index: b_1 b_0)
    // Qubit 1 is bottom wire (MSB in binary index: b_1 b_0)
    const u = gateMatrix;

    if (qubitIndex === 0) {
      // Apply U to qubit 0
      // For b_1 = 0 (indices 0 and 1)
      newState[0] = Complex.add(Complex.mul(u[0][0], state[0]), Complex.mul(u[0][1], state[1]));
      newState[1] = Complex.add(Complex.mul(u[1][0], state[0]), Complex.mul(u[1][1], state[1]));
      
      // For b_1 = 1 (indices 2 and 3)
      newState[2] = Complex.add(Complex.mul(u[0][0], state[2]), Complex.mul(u[0][1], state[3]));
      newState[3] = Complex.add(Complex.mul(u[1][0], state[2]), Complex.mul(u[1][1], state[3]));
    } else {
      // Apply U to qubit 1
      // For b_0 = 0 (indices 0 and 2)
      newState[0] = Complex.add(Complex.mul(u[0][0], state[0]), Complex.mul(u[0][1], state[2]));
      newState[2] = Complex.add(Complex.mul(u[1][0], state[0]), Complex.mul(u[1][1], state[2]));
      
      // For b_0 = 1 (indices 1 and 3)
      newState[1] = Complex.add(Complex.mul(u[0][0], state[1]), Complex.mul(u[0][1], state[3]));
      newState[3] = Complex.add(Complex.mul(u[1][0], state[1]), Complex.mul(u[1][1], state[3]));
    }
    return newState;
  },

  applyCNOT: function(state, controlQubit) {
    const newState = [...state];
    if (controlQubit === 0) {
      // Control is Q0. Flip Q1 if Q0 is 1.
      // Q0 is LSB, so control is 1 for indices 1 (|01>) and 3 (|11>).
      // Swap state[1] and state[3]
      const temp = newState[1];
      newState[1] = newState[3];
      newState[3] = temp;
    } else {
      // Control is Q1. Flip Q0 if Q1 is 1.
      // Q1 is MSB, so control is 1 for indices 2 (|10>) and 3 (|11>).
      // Swap state[2] and state[3]
      const temp = newState[2];
      newState[2] = newState[3];
      newState[3] = temp;
    }
    return newState;
  },

  renderResults: function(state) {
    // Probabilities
    const p00 = Complex.magnitudeSq(state[0]);
    const p01 = Complex.magnitudeSq(state[1]);
    const p10 = Complex.magnitudeSq(state[2]);
    const p11 = Complex.magnitudeSq(state[3]);

    const bar00 = document.getElementById("bar-00");
    const bar01 = document.getElementById("bar-01");
    const bar10 = document.getElementById("bar-10");
    const bar11 = document.getElementById("bar-11");

    const text00 = document.getElementById("text-00");
    const text01 = document.getElementById("text-01");
    const text10 = document.getElementById("text-10");
    const text11 = document.getElementById("text-11");

    if (bar00) bar00.style.width = (p00 * 100) + "%";
    if (bar01) bar01.style.width = (p01 * 100) + "%";
    if (bar10) bar10.style.width = (p10 * 100) + "%";
    if (bar11) bar11.style.width = (p11 * 100) + "%";

    if (text00) text00.textContent = (p00 * 100).toFixed(0) + "%";
    if (text01) text01.textContent = (p01 * 100).toFixed(0) + "%";
    if (text10) text10.textContent = (p10 * 100).toFixed(0) + "%";
    if (text11) text11.textContent = (p11 * 100).toFixed(0) + "%";

    // Update State Formula
    const formulaEl = document.getElementById("circuit-state-formula");
    if (formulaEl) {
      const parts = [];
      const labels = ["00", "01", "10", "11"];
      for (let i = 0; i < 4; i++) {
        if (Complex.magnitude(state[i]) > 0.01) {
          parts.push(`(${this.formatComplex(state[i])})|${labels[i]}⟩`);
        }
      }
      formulaEl.innerHTML = parts.join(" + ") || "|00⟩";
    }

    // Update Entanglement indicator
    const entText = document.getElementById("circuit-entangle-status");
    const entLine = document.getElementById("bell-entangle-indicator");
    if (entText) {
      // Simple entanglement check:
      // State is entangled if c00*c11 != c01*c10
      const ad = Complex.mul(state[0], state[3]);
      const bc = Complex.mul(state[1], state[2]);
      const diff = Complex.magnitude(Complex.sub(ad, bc));
      
      if (diff > 0.1) {
        entText.textContent = "Yes (Entangled state detected!)";
        entText.style.color = "var(--cyan)";
        if (entLine) entLine.style.display = "block";
      } else {
        entText.textContent = "No (Separable state)";
        entText.style.color = "var(--text-secondary)";
        if (entLine) entLine.style.display = "none";
      }
    }
  },

  formatComplex: function(c) {
    if (Math.abs(c.i) < 0.001) return c.r.toFixed(2);
    if (Math.abs(c.r) < 0.001) return c.i.toFixed(2) + "i";
    const sign = c.i >= 0 ? "+" : "-";
    return `${c.r.toFixed(2)}${sign}${Math.abs(c.i).toFixed(2)}i`;
  },

  renderCircuit: function() {
    for (let wire = 0; wire < 2; wire++) {
      const wireSlots = document.getElementById(`wire-${wire}-slots`);
      if (!wireSlots) continue;

      wireSlots.innerHTML = "";
      for (let slot = 0; slot < this.slotsCount; slot++) {
        const gate = this.gates[wire][slot];
        const slotDiv = document.createElement("div");
        slotDiv.className = "circuit-slot";
        slotDiv.dataset.wire = wire;
        slotDiv.dataset.slot = slot;

        if (gate) {
          let gateClass = "";
          let label = gate;
          if (gate === "CX-ctrl") {
            gateClass = "gate-cnot-control";
            label = "●";
          } else if (gate === "CX-targ") {
            gateClass = "gate-cnot-target";
            label = "⊕";
          }
          
          slotDiv.innerHTML = `
            <div class="circuit-gate-placed ${gateClass}">
              ${label}
              <div class="gate-remove-btn" onclick="event.stopPropagation(); window.circuitState.removeGate(${wire}, ${slot})">×</div>
            </div>
          `;
        } else {
          slotDiv.addEventListener("click", () => this.openGateSelector(wire, slot));
        }
        wireSlots.appendChild(slotDiv);
      }
    }
  },

  openGateSelector: function(wire, slot) {
    // Open a prompt-free simple custom modal overlay or inline list for selection
    const gateType = window.prompt("Enter gate to place (H, X, Y, Z, S, T, CX-ctrl, CX-targ):");
    if (!gateType) return;
    const cleanGate = gateType.trim().toUpperCase();
    if (["H", "X", "Y", "Z", "S", "T", "CX-CTRL", "CX-TARG"].includes(cleanGate)) {
      let finalGate = cleanGate;
      if (cleanGate === "CX-CTRL") finalGate = "CX-ctrl";
      if (cleanGate === "CX-TARG") finalGate = "CX-targ";
      this.addGate(wire, slot, finalGate);
    } else {
      alert("Invalid gate type. Choose H, X, Y, Z, S, T, CX-ctrl, or CX-targ.");
    }
  }
};
