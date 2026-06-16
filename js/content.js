/* ==========================================================================
   QUANTUMVERSE EDUCATIONAL DATABASE: js/content.js
   ========================================================================== */

window.quantumContent = [
  {
    id: 1,
    title: "Fundamentals of Quantum Mechanics",
    introduction: "This module covers the core transition from classical physics to quantum mechanics, exploring wave-particle duality, state vectors, operators, and the physical foundations of quantum information.",
    outcomes: [
      "Understand wave-particle duality and the physical meaning of the wave function.",
      "Formulate and apply the Schrödinger wave equation to simple potential systems.",
      "Use Bra-Ket (Dirac) notation to perform vector computations (inner, outer, and tensor products).",
      "Differentiate classical bits from quantum qubits using mathematical representation."
    ],
    conceptMap: [
      { from: "Classical Mechanics", to: "Wave-Particle Duality" },
      { from: "Wave-Particle Duality", to: "Wave Function & Schrödinger Equation" },
      { from: "Wave Function & Schrödinger Equation", to: "Eigenvalues & Potential Wells" },
      { from: "Eigenvalues & Potential Wells", to: "Qubits & Bra-Ket Notation" }
    ],
    theory: `
      <h3>1. Wave-Particle Duality & Wave Function</h3>
      <p>Classical physics treats waves and particles as distinct entities. In the quantum realm, matter exhibits both wave-like and particle-like properties. De Broglie proposed that any moving particle of mass <i>m</i> and velocity <i>v</i> has an associated wavelength: <b>λ = h / p</b> (where <i>h</i> is Planck's constant and <i>p = mv</i> is momentum).</p>
      <p>This dual nature is mathematically described by the <b>wave function (Ψ)</b>. The wave function contains all physical information about a system. Max Born interpreted the square of the wave function's absolute value, <b>|Ψ(x,t)|²</b>, as the probability density of finding the particle at position <i>x</i> at time <i>t</i>. Because the particle must exist somewhere in space, the wave function must be normalized: <b>∫ |Ψ(x,t)|² dx = 1</b> integrated from -∞ to +∞.</p>

      <h3>2. The Schrödinger Equation</h3>
      <p>The time-dependent Schrödinger equation governs the evolution of a quantum system: <b>iℏ ∂Ψ/∂t = ĤΨ</b>. Here, <b>Ĥ</b> is the Hamiltonian operator representing the total energy (kinetic + potential) of the system: <b>Ĥ = -(ℏ² / 2m)∇² + V(x)</b>.</p>
      <p>For a static potential <i>V(x)</i>, we separate variables to get the time-independent Schrödinger equation: <b>-(ℏ² / 2m)(d²ψ/dx²) + V(x)ψ(x) = Eψ(x)</b>, where <i>E</i> is the total energy eigenvalue and <i>ψ(x)</i> is the spatial wave function.</p>

      <h3>3. One-Dimensional Infinite Potential Well</h3>
      <p>Consider a particle trapped in a box of width <i>L</i> where <i>V(x) = 0</i> for <i>0 < x < L</i>, and <i>V(x) = ∞</i> elsewhere. Solving the boundary conditions <i>ψ(0) = ψ(L) = 0</i> yields normalized spatial wave functions (eigenfunctions): <b>ψ_n(x) = √(2/L) sin(nπx/L)</b>, and energy eigenvalues: <b>E_n = n²h² / (8mL²) = n²π²ℏ² / (2mL²)</b> for <i>n = 1, 2, 3...</i></p>
      <p>This demonstrates energy quantization; a quantum particle cannot have arbitrary energy, nor can its energy be zero (the ground state energy is <i>E_1 > 0</i>, known as zero-point energy).</p>

      <h3>4. Classical vs Quantum Computing: Bits vs Qubits</h3>
      <p>A classical bit is represented by a physical state that is deterministically either <b>0</b> or <b>1</b>. A quantum bit (qubit) is represented by a two-dimensional complex state vector. Unlike classical bits, a qubit can exist in a linear combination of both states simultaneously (superposition): <b>|ψ⟩ = α|0⟩ + β|1⟩</b>, where <i>α, β ∈ ℂ</i> and <b>|α|² + |β|² = 1</b>.</p>
    `,
    math: `
      <h3>Dirac Bra-Ket Notation & Matrix Algebra</h3>
      <p>In quantum mechanics, state vectors are represented as column vectors (kets, denoted <b>|ψ⟩</b>) in a complex vector space. The complex conjugate transpose is represented as a row vector (bras, denoted <b>⟨ψ|</b>).</p>
      
      <h4>1. Vector Representation</h4>
      <p>Basis vectors |0⟩ and |1⟩ are orthogonal:
        <br><code>|0⟩ = [1, 0]ᵀ</code>, <code>|1⟩ = [0, 1]ᵀ</code>
      </p>

      <h4>2. Inner Product</h4>
      <p>The inner product of two states |ψ⟩ = α|0⟩ + β|1⟩ and |ϕ⟩ = γ|0⟩ + δ|1⟩ is <b>⟨ψ|ϕ⟩ = α*γ + β*δ</b>. 
      If <b>⟨ψ|ϕ⟩ = 0</b>, the states are orthogonal. If <b>⟨ψ|ψ⟩ = 1</b>, the state is normalized.</p>

      <h4>3. Outer Product</h4>
      <p>The outer product projects a vector onto another: <b>|ϕ⟩⟨ψ|</b> creates a matrix (operator).
        <br><code>|0⟩⟨0| = [[1, 0], [0, 0]]</code>
      </p>

      <h4>4. Tensor Product</h4>
      <p>To combine multiple quantum systems, we use the tensor product (⊗).
        <br><code>|0⟩ ⊗ |0⟩ = |00⟩ = [1, 0, 0, 0]ᵀ</code>
        <br><code>|0⟩ ⊗ |1⟩ = |01⟩ = [0, 1, 0, 0]ᵀ</code>
      </p>
    `,
    solvedExamples: [
      {
        question: "Normalize the qubit state |ψ⟩ = 3|0⟩ + 4i|1⟩.",
        solution: "First, compute the norm squared of the coefficients: |α|² = |3|² = 9, and |β|² = |4i|² = 16. Sum = 9 + 16 = 25. The normalization constant N is 1 / √Sum = 1/5. Thus, the normalized state is |ψ_norm⟩ = 3/5|0⟩ + 4i/5|1⟩. Checking norm: |3/5|² + |4i/5|² = 9/25 + 16/25 = 1."
      },
      {
        question: "Calculate the inner product ⟨ψ|ϕ⟩ where |ψ⟩ = (1/√2)(|0⟩ + |1⟩) and |ϕ⟩ = (1/2)|0⟩ - (√3/2)|1⟩.",
        solution: "Express as matrices: ⟨ψ| = [1/√2, 1/√2], |ϕ⟩ = [1/2, -√3/2]ᵀ. ⟨ψ|ϕ⟩ = (1/√2)*(1/2) + (1/√2)*(-√3/2) = (1 - √3) / (2√2) ≈ -0.259."
      }
    ],
    applications: [
      { title: "Physical Qubits", description: "Superconducting Josephson junctions and trapped ions act as artificial atoms that use their energy levels as |0⟩ and |1⟩." },
      { title: "Quantum Sensors", description: "Exploiting wave functions' phase sensitivity to magnetic fields for high-precision diagnostic imaging (like MRI modifications)." }
    ],
    caseStudy: {
      title: "Transitioning a Classical Transistor to a Josephson Junction",
      problem: "Classical silicon transistors are limited by thermal leakage when scaled below 1nm. How does quantum design bypass this limit?",
      analysis: "Superconducting qubits utilize Josephson junctions (a thin insulating barrier between superconductors) to create an artificial two-level atom. This bypasses classical heating issues since current flows without resistance, allowing macroscopic quantum coherence.",
      solution: "By utilizing Cooper pairs tunneling across a barrier, engineers create an anharmonic oscillator, yielding isolated energy levels that serve as the |0⟩ and |1⟩ states of a highly controllable qubit."
    },
    qiskitCode: {
      code: `
# Qiskit v1.0 Example: Initializing a Single State Vector
from qiskit.quantum_info import Statevector
import numpy as np

# Create a state vector corresponding to (1/sqrt(2))(|0> + |1>)
psi = Statevector([1/np.sqrt(2), 1/np.sqrt(2)])

print("Statevector representation:")
print(psi.draw('text'))

# Find the probabilities of measurement
probs = psi.probabilities_dict()
print("\\nMeasurement probabilities:")
print(probs)
      `,
      description: "Initialize a state vector in superposition and extract measurement probabilities.",
      output: "Statevector representation:\n[0.70710678+0.j, 0.70710678+0.j]\n\nMeasurement probabilities:\n{'0': 0.5, '1': 0.5}",
      explanation: "The statevector represents a 50/50 superposition (the |+⟩ state). Measuring it will collapse it to '0' with 50% probability and '1' with 50% probability."
    },
    summary: "Module 1 established quantum states as vectors in a Hilbert space, governed by the Schrödinger equation. We analyzed energy quantization in a 1D well, introduced Bra-Ket notation, and demonstrated the fundamental transition from classical binary bits to complex probability-based qubits.",
    formulas: [
      { name: "De Broglie Wavelength", formula: "λ = h / p", description: "Relates momentum of a particle to its wave nature." },
      { name: "Schrödinger Equation", formula: "iℏ ∂Ψ/∂t = ĤΨ", description: "Governs time-dependent dynamics of quantum states." },
      { name: "Qubit Superposition", formula: "|ψ⟩ = α|0⟩ + β|1⟩", description: "State vector representation with |α|² + |β|² = 1." }
    ],
    flashcards: [
      { question: "What is Born's rule?", answer: "A rule stating that the probability of measuring a quantum state and finding it in a specific state is equal to the absolute square of the amplitude: P = |⟨ϕ|ψ⟩|²." },
      { question: "What is an eigenvalue?", answer: "A scalar multiplier associated with a linear operator, representing a possible physical measurement result of the system." },
      { question: "Why must a wave function be normalized?", answer: "Because the total probability of finding the particle somewhere in space must be exactly 100% (or 1)." }
    ],
    glossary: [
      { term: "Wave Function", definition: "A mathematical description of the quantum state of an isolated system." },
      { term: "Hamiltonian", definition: "An operator corresponding to the total energy of the system." },
      { term: "Bra-Ket", definition: "Dirac notation for vectors in Hilbert space, representing state vectors (|⟩) and linear functionals (⟨|)." }
    ],
    faqs: [
      { question: "Can a quantum particle really be in two places at once?", answer: "It is in a linear superposition of potential positions, described by a wave function, until a measurement forces it to collapse to a single coordinate." },
      { question: "What does h-bar (ℏ) represent?", answer: "It is the reduced Planck constant, h / 2π, which defines the scale of quantum action." }
    ],
    practiceQuestions: {
      mcqs: [
        { question: "Which equation represents De Broglie's wave-particle relation?", options: ["E = mc²", "λ = h/p", "Ĥψ = Eψ", "ΔxΔp ≥ ℏ/2"], answer: "B", explanation: "De Broglie wavelength is Planck's constant divided by momentum.", difficulty: "Easy" },
        { question: "What is the result of the inner product ⟨0|1⟩?", options: ["1", "0", "-1", "i"], answer: "B", explanation: "The basis vectors |0⟩ and |1⟩ are orthogonal, hence their inner product is 0.", difficulty: "Easy" }
      ],
      short: [
        { question: "Define the term 'superposition' in the context of qubits.", answer: "A qubit is in superposition when its state vector is a linear combination of both basis states: |ψ⟩ = α|0⟩ + β|1⟩, where both coefficients are non-zero.", difficulty: "Easy" }
      ],
      long: [
        { question: "Explain the infinite potential well boundaries and derive the quantization of energy.", answer: "For 0 < x < L, V = 0, so d²ψ/dx² = -k²ψ where k² = 2mE/ℏ². The general solution is ψ(x) = A sin(kx) + B cos(kx). Applying ψ(0) = 0 gives B = 0. Applying ψ(L) = 0 gives A sin(kL) = 0, meaning kL = nπ for integer n. Hence, k = nπ/L, which restricts E to quantized levels: E_n = n²π²ℏ²/(2mL²).", difficulty: "Hard" }
      ],
      numerical: [
        { question: "Find the energy of a particle of mass m in the ground state (n=1) of an infinite well of width L.", answer: "E_1 = π²ℏ² / (2mL²)", explanation: "Substituting n=1 into the energy equation yields E_1 = h² / (8mL²).", difficulty: "Medium" }
      ]
    },
    assignment: {
      theory: "Compare the boundary conditions of an infinite potential well with a finite potential well.",
      numerical: "Calculate the energy difference between the n=2 and n=1 levels of an electron in a 1D well of width 0.1 nm.",
      coding: "Write a Qiskit script to measure a state vector with custom complex coefficients.",
      research: "Investigate how decoherence affects the physical state of a superconducting transmon qubit."
    },
    miniProject: {
      title: "Exploring Wave Function Visualization",
      objective: "Graph the probability densities of the first three energy levels of a 1D infinite potential well.",
      procedure: "1. Write a script to calculate ψ_n(x)² for n=1,2,3.\n2. Plot the functions across the range 0 to L.\n3. Verify that the peak probability positions change with energy levels.",
      expectedOutcome: "Visual representations showing n nodes and anti-nodes, proving that higher energy states have more localized peaks.",
      rubric: "Accuracy of plotting: 40%, Mathematical derivation: 30%, Coding clarity: 30%."
    }
  },
  {
    id: 2,
    title: "Single Qubit Systems",
    introduction: "This module details the linear algebra of two-dimensional Hilbert spaces, the geometric representation of single qubit states using the Bloch sphere, and the operations of single-qubit quantum gates.",
    outcomes: [
      "Navigate Hilbert spaces and represent qubits as complex state vectors.",
      "Map arbitrary qubit states onto the Bloch Sphere using spherical coordinates.",
      "Understand the action of Pauli gates (X, Y, Z), Hadamard (H), Phase (S, T), and rotation gates.",
      "Calculate the expectation values of measurements along different axes."
    ],
    conceptMap: [
      { from: "Hilbert Space", to: "Qubit Bloch Vector" },
      { from: "Qubit Bloch Vector", to: "Bloch Sphere Coordinates" },
      { from: "Bloch Sphere Coordinates", to: "Pauli & Rotation Gates" },
      { from: "Pauli & Rotation Gates", to: "Measurement Collapse" }
    ],
    theory: `
      <h3>1. Complex Vector Spaces & Hilbert Space</h3>
      <p>A single qubit state exists in a 2D complex vector space called a <b>Hilbert Space (ℋ²)</b>. Every state is a normalized vector: <b>|ψ⟩ = cos(θ/2)|0⟩ + e^(iϕ)sin(θ/2)|1⟩</b>. 
      Here, <b>θ</b> (polar angle, 0 ≤ θ ≤ π) determines the probability of measuring |0⟩ vs |1⟩: <b>P(0) = cos²(θ/2)</b>, <b>P(1) = sin²(θ/2)</b>. 
      The azimuth angle <b>ϕ</b> (0 ≤ ϕ < 2π) represents the relative phase of the state.</p>

      <h3>2. The Bloch Sphere</h3>
      <p>The Bloch Sphere is a geometric representation of the pure state space of a single qubit. The north pole represents <b>|0⟩</b> (θ = 0), and the south pole represents <b>|1⟩</b> (θ = π). 
      The equator contains states with equal probability of collapsing to |0⟩ or |1⟩ but with different phases, such as:
      <br>• <b>|+⟩ = (|0⟩ + |1⟩)/√2</b> (on the positive x-axis, θ = π/2, ϕ = 0)
      <br>• <b>|-⟩ = (|0⟩ - |1⟩)/√2</b> (on the negative x-axis, θ = π/2, ϕ = π)
      <br>• <b>|+i⟩ = (|0⟩ + i|1⟩)/√2</b> (on the positive y-axis, θ = π/2, ϕ = π/2)
      </p>

      <h3>3. Single Qubit Quantum Gates</h3>
      <p>Quantum gates are represented by <b>unitary matrices</b> (U), satisfying <b>U†U = I</b>. Unitary operators preserve the length of vectors, ensuring the total state probability remains normalized to 1.</p>
      <ul>
        <li><b>Pauli-X (NOT Gate)</b>: Flips the state. <code>X = [[0, 1], [1, 0]]</code>. Maps |0⟩ ↔ |1⟩.</li>
        <li><b>Pauli-Y</b>: Flips state and introduces phase. <code>Y = [[0, -i], [i, 0]]</code>.</li>
        <li><b>Pauli-Z (Phase Flip)</b>: Flips the relative phase of |1⟩. <code>Z = [[1, 0], [0, -1]]</code>. Maps |+⟩ ↔ |-⟩.</li>
        <li><b>Hadamard (H)</b>: Creates a superposition. <code>H = (1/√2)[[1, 1], [1, -1]]</code>. Maps |0⟩ ↔ |+⟩, and |1⟩ ↔ |-⟩.</li>
        <li><b>Phase Gates (S, T)</b>: S introduces a π/2 phase rotation: <code>S = [[1, 0], [0, i]]</code>. T is the π/4 rotation: <code>T = [[1, 0], [0, e^(iπ/4)]]</code>.</li>
      </ul>
    `,
    math: `
      <h3>Rotation Operators & Quantum Gate Operations</h3>
      <p>Any single-qubit gate can be viewed as a rotation of the state vector on the Bloch sphere around a specific axis.</p>
      
      <h4>1. Rotation Operators</h4>
      <p>Rotations around the X, Y, and Z axes by angle θ are defined using matrix exponentials:
        <br><b>Rx(θ) = cos(θ/2)I - i sin(θ/2)X = [[cos(θ/2), -i sin(θ/2)], [-i sin(θ/2), cos(θ/2)]]</b>
        <br><b>Ry(θ) = cos(θ/2)I - i sin(θ/2)Y = [[cos(θ/2), -sin(θ/2)], [sin(θ/2), cos(θ/2)]]</b>
        <br><b>Rz(θ) = cos(θ/2)I - i sin(θ/2)Z = [[e^(-iθ/2), 0], [0, e^(iθ/2)]]</b>
      </p>

      <h4>2. Unitary Operations on Statevectors</h4>
      <p>Let's apply Hadamard to |0⟩:
        <br><code>H|0⟩ = (1/√2)[[1, 1], [1, -1]] * [1, 0]ᵀ = [1/√2, 1/√2]ᵀ = |+⟩</code>
      </p>
    `,
    solvedExamples: [
      {
        question: "Find the coordinates of state |+⟩ on the Bloch sphere.",
        solution: "For |+⟩ = (1/√2)|0⟩ + (1/√2)|1⟩, we have α = 1/√2 and β = 1/√2. Matching with cos(θ/2) = 1/√2 gives θ/2 = π/4, so θ = π/2. Since the coefficients are real, phase ϕ = 0. The coordinates are: x = sin(θ)cos(ϕ) = sin(π/2)cos(0) = 1, y = sin(θ)sin(ϕ) = 0, z = cos(θ) = cos(π/2) = 0. Coordinate is (1, 0, 0)."
      },
      {
        question: "Show that the Hadamard gate is its own inverse.",
        solution: "Compute H * H: (1/√2)[[1, 1], [1, -1]] * (1/√2)[[1, 1], [1, -1]] = (1/2) [[1*1 + 1*1, 1*1 - 1*1], [1*1 - 1*1, 1*1 + 1*1]] = (1/2) [[2, 0], [0, 2]] = [[1, 0], [0, 1]] = I. Since H² = I, H is indeed its own inverse (H = H†)."
      }
    ],
    applications: [
      { title: "Random Number Generation", description: "Applying H to |0⟩ creates an equal superposition. Measurement yields a truly random binary number, which is ideal for cryptographic keys." },
      { title: "Quantum Key Distribution", description: "BB84 protocol uses conjugate bases (|0⟩/|1⟩ vs |+⟩/|-⟩) to detect eavesdroppers via measurement collapse." }
    ],
    caseStudy: {
      title: "Implementing BB84 Quantum Key Distribution",
      problem: "How can Alice send a secret key to Bob over a fiber line without Eve intercepting it?",
      analysis: "Alice encodes bits into single photons using either the rectilinear (|0⟩/|1⟩) or diagonal (|+⟩/|-⟩) bases. If Eve measures a photon, she collapses its state vector, causing errors Bob can detect when Alice compares bases.",
      solution: "By utilizing single qubit rotations (applying H or keeping identity), Alice randomizes the encoding base. Bob uses a random base to measure, discarding instances where their bases disagree, revealing Eve's attempts by counting anomalous error rates."
    },
    qiskitCode: {
      code: `
# Qiskit v1.0 Example: Single Qubit Gate Operations
from qiskit import QuantumCircuit
from qiskit.quantum_info import Statevector

# Create circuit with 1 qubit
qc = QuantumCircuit(1)

# Apply Hadamard (H) gate
qc.h(0)

# Get state vector
state = Statevector.from_instruction(qc)
print("State vector after H:")
print(state.draw('text'))

# Apply Pauli-Z gate
qc.z(0)
state_after_z = Statevector.from_instruction(qc)
print("\\nState vector after H and Z:")
print(state_after_z.draw('text'))
      `,
      description: "Build a single-qubit circuit applying H and Z gates to view the state vector progression.",
      output: "State vector after H:\n[0.70710678+0.j, 0.70710678+0.j]\n\nState vector after H and Z:\n[0.70710678+0.j, -0.70710678+0.j]",
      explanation: "Applying H to |0⟩ transforms it to |+⟩. Applying Z to |+⟩ changes the phase of the |1⟩ component, resulting in |-⟩."
    },
    summary: "Module 2 mapped single qubit states to a 2D complex vector space and visually to the Bloch Sphere. We introduced single qubit gates, showing how they rotate vectors unitary-wise, preserving probabilities, and explored applications like true randomness and QKD protocols.",
    formulas: [
      { name: "Bloch Sphere State Representation", formula: "|ψ⟩ = cos(θ/2)|0⟩ + e^(iϕ)sin(θ/2)|1⟩", description: "Polar representation of pure single qubit states." },
      { name: "Unitary Preservation Condition", formula: "U†U = I", description: "Required for all quantum gates to preserve norm." },
      { name: "Hadamard Matrix", formula: "H = (1/√2)[[1, 1], [1, -1]]", description: "Gate creating equal superpositions." }
    ],
    flashcards: [
      { question: "What coordinate represents |1⟩ on the Bloch sphere?", answer: "The south pole, coordinate (0, 0, -1)." },
      { question: "What is relative phase?", answer: "The angle ϕ in e^(iϕ), representing the phase differences between coefficients in a quantum superposition." },
      { question: "What does the S gate do?", answer: "A phase gate rotating the state vector by 90 degrees (π/2 radians) around the Z-axis of the Bloch sphere." }
    ],
    glossary: [
      { term: "Unitary Operator", definition: "A linear operator that preserves the inner product, meaning it represents a reversible quantum operation." },
      { term: "Bloch Vector", definition: "A 3D vector representing a state on the Bloch Sphere with coordinates (x, y, z)." },
      { term: "Basis State", definition: "One of the set of vectors used to define the state space (e.g., |0⟩ and |1⟩)." }
    ],
    faqs: [
      { question: "Why is the polar angle θ divided by 2 in the Bloch sphere formula?", answer: "To map orthogonal states |0⟩ and |1⟩ (which have a 180-degree angle between them geometrically on the sphere) to states that are orthogonal (90 degrees apart in Hilbert space)." },
      { question: "Is a phase change detectable?", answer: "A global phase (multiplying the entire state by e^(iθ)) is not measurable, but a relative phase (between |0⟩ and |1⟩) changes interference and is measurable." }
    ],
    practiceQuestions: {
      mcqs: [
        { question: "Which coordinate represents the state |+⟩ on the Bloch sphere?", options: ["(0, 0, 1)", "(1, 0, 0)", "(0, 1, 0)", "(0, 0, -1)"], answer: "B", explanation: "|+⟩ lies on the positive x-axis, represented by (1, 0, 0).", difficulty: "Easy" },
        { question: "Which gate maps |0⟩ to |1⟩ and vice versa?", options: ["H", "Z", "X", "S"], answer: "C", explanation: "The Pauli-X gate acts as a classical NOT gate, swapping basis states.", difficulty: "Easy" }
      ],
      short: [
        { question: "Describe the function of the T gate.", answer: "The T gate is a phase gate that adds a phase shift of π/4 (45 degrees) to the |1⟩ state vector component.", difficulty: "Medium" }
      ],
      long: [
        { question: "Prove that unitary gates conserve vector length and preserve probabilities.", answer: "Let |ψ'⟩ = U|ψ⟩. The norm squared is ⟨ψ'|ψ'⟩ = ⟨ψ|U†U|ψ⟩. Since U is unitary, U†U = I. Thus, ⟨ψ'|ψ'⟩ = ⟨ψ|I|ψ⟩ = ⟨ψ|ψ⟩ = 1. Therefore, length is preserved.", difficulty: "Medium" }
      ],
      numerical: [
        { question: "Calculate the action of gate S on the state |+⟩.", answer: "(1/√2)(|0⟩ + i|1⟩)", explanation: "S |+⟩ = S * (1/√2)([1, 1]ᵀ) = (1/√2) * [[1,0],[0,i]] * [1,1]ᵀ = (1/√2)[1, i]ᵀ = |+i⟩.", difficulty: "Medium" }
      ]
    },
    assignment: {
      theory: "Deconstruct the physical meaning of polar and azimuthal angles in the Bloch sphere equation.",
      numerical: "Find the resulting state vector when an Ry(π/2) gate is applied to state |1⟩.",
      coding: "Build a Qiskit script applying Rx, Ry, and Rz rotations and map their path on the Bloch sphere.",
      research: "Investigate how a laser pulse of specific duration creates a Pi/2 rotation in trapped-ion quantum computers."
    },
    miniProject: {
      title: "Interactive Bloch Sphere Navigator",
      objective: "Convert polar coordinates (θ, ϕ) into Cartesian coords (x,y,z) and verify they map onto a unit sphere.",
      procedure: "1. Prompt the user for θ (0 to 180 degrees) and ϕ (0 to 360 degrees).\n2. Calculate x, y, and z using spherical coordinates.\n3. Plot the point and verify x² + y² + z² = 1.",
      expectedOutcome: "A set of calculations showing that any input angles map precisely to points on the sphere boundary.",
      rubric: "Mathematics accuracy: 40%, Plotting logic: 40%, Documentation: 20%."
    }
  },
  {
    id: 3,
    title: "Multiple Qubit Systems and Entanglement",
    introduction: "This module covers multi-qubit systems constructed via tensor products, multi-qubit gates, Bell states, and the quantum phenomenon of entanglement.",
    outcomes: [
      "Represent multi-qubit states using tensor products.",
      "Analyze the mechanics of the CNOT gate and construct multi-qubit circuits.",
      "Derive the four Bell states and explain their unique correlations.",
      "Differentiate between separable states and entangled states mathematically."
    ],
    conceptMap: [
      { from: "Tensor Products", to: "Multi-Qubit States" },
      { from: "Multi-Qubit States", to: "Controlled-NOT (CNOT) Gate" },
      { from: "Controlled-NOT (CNOT) Gate", to: "Bell State Generation" },
      { from: "Bell State Generation", to: "Quantum Entanglement" }
    ],
    theory: `
      <h3>1. Tensor Products & Multi-Qubit Representation</h3>
      <p>A system of <i>n</i> qubits is represented as a state vector in a <b>2^n-dimensional</b> Hilbert space. The state space is constructed by taking the tensor product of individual qubit Hilbert spaces: <b>ℋ = ℋ₁ ⊗ ℋ₂ ⊗ ... ⊗ ℋ_n</b>.</p>
      <p>For a 2-qubit system, the basis states are:
        <br>• <b>|00⟩ = |0⟩⊗|0⟩ = [1, 0, 0, 0]ᵀ</b>
        <br>• <b>|01⟩ = |0⟩⊗|1⟩ = [0, 1, 0, 0]ᵀ</b>
        <br>• <b>|10⟩ = |1⟩⊗|0⟩ = [0, 0, 1, 0]ᵀ</b>
        <br>• <b>|11⟩ = |1⟩⊗|1⟩ = [0, 0, 0, 1]ᵀ</b>
      </p>
      <p>An arbitrary 2-qubit state is: <b>|ψ⟩ = c₀₀|00⟩ + c₀₁|01⟩ + c₁₀|10⟩ + c₁₁|11⟩</b>, where sum of <b>|c_ij|² = 1</b>.</p>

      <h3>2. The CNOT Gate</h3>
      <p>The Controlled-NOT (CNOT) gate is a 2-qubit gate that operates on a control qubit and a target qubit. If the control qubit is |1⟩, it flips the target qubit; otherwise, it does nothing.</p>
      <p>Its matrix representation is:
        <br><code>CNOT = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code>
      </p>

      <h3>3. Quantum Entanglement & Bell States</h3>
      <p>A state is **separable** if it can be written as the product of two independent single-qubit states: <b>|ψ⟩ = |a⟩ ⊗ |b⟩</b>. If a state cannot be factored this way, it is **entangled**. 
      Entanglement is a purely quantum correlation where measuring one qubit instantly determines the outcome of the other, regardless of separation distance.</p>
      <p>The four maximal entangled states are the **Bell States**:
        <br>• <b>|Φ⁺⟩ = (|00⟩ + |11⟩) / √2</b>
        <br>• <b>|Φ⁻⟩ = (|00⟩ - |11⟩) / √2</b>
        <br>• <b>|Ψ⁺⟩ = (|01⟩ + |10⟩) / √2</b>
        <br>• <b>|Ψ⁻⟩ = (|01⟩ - |10⟩) / √2</b>
      </p>
    `,
    math: `
      <h3>Creating and Verifying Entanglement</h3>
      
      <h4>1. Generating Bell State |Φ⁺⟩</h4>
      <p>Start with state |00⟩. Apply Hadamard to qubit 0:
        <br><b>(H ⊗ I)|00⟩ = |+⟩ ⊗ |0⟩ = (1/√2)(|00⟩ + |10⟩)</b>
      </p>
      <p>Now apply CNOT (control qubit 0, target qubit 1):
        <br><b>CNOT * (1/√2)(|00⟩ + |10⟩) = (1/√2)(|00⟩ + |11⟩) = |Φ⁺⟩</b>
      </p>

      <h4>2. Proving Entanglement (Schmidt Rank / Separability Check)</h4>
      <p>Let's check if |Φ⁺⟩ is separable:
        <br><b>(|a₀⟩|0⟩ + |a₁⟩|1⟩) ⊗ (|b₀⟩|0⟩ + |b₁⟩|1⟩) = a₀b₀|00⟩ + a₀b₁|01⟩ + a₁b₀|10⟩ + a₁b₁|11⟩</b>
      </p>
      <p>For this to match |Φ⁺⟩, we require:
        <br><b>a₀b₀ = 1/√2</b>, <b>a₀b₁ = 0</b>, <b>a₁b₀ = 0</b>, <b>a₁b₁ = 1/√2</b>.
        <br>But if <b>a₀b₁ = 0</b>, then either <b>a₀ = 0</b> or <b>b₁ = 0</b>. 
        If <b>a₀ = 0</b>, then <b>a₀b₀ = 0</b>, which contradicts <b>1/√2</b>. 
        Thus, no such products exist, proving the state is entangled.
      </p>
    `,
    solvedExamples: [
      {
        question: "Calculate the tensor product of state vector |+⟩ and |0⟩.",
        solution: "|+⟩ = (1/√2)[1, 1]ᵀ, |0⟩ = [1, 0]ᵀ. |+⟩ ⊗ |0⟩ = (1/√2)[ 1*[1,0]ᵀ, 1*[1,0]ᵀ ] = (1/√2)[1, 0, 1, 0]ᵀ = (1/√2)(|00⟩ + |10⟩)."
      },
      {
        question: "Compute the output of a CNOT gate when the input state is |10⟩.",
        solution: "Input is |10⟩. The control qubit (first qubit) is |1⟩. Therefore, the CNOT gate flips the target qubit (second qubit) from |0⟩ to |1⟩. The output state is |11⟩."
      }
    ],
    applications: [
      { title: "Superdense Coding", description: "Enables sending two classical bits of information using only one physical qubit by sharing an entangled Bell state beforehand." },
      { title: "Quantum Teleportation", description: "Transfers the exact state of an unknown qubit over arbitrary distances using entanglement and classical communication channels." }
    ],
    caseStudy: {
      title: "Superdense Coding Protocol Design",
      problem: "We want to transmit a 2-bit message (00, 01, 10, or 11) using only a single physical qubit transmission. How does entanglement enable this?",
      analysis: "Alice and Bob share the Bell state |Φ⁺⟩. Alice applies single qubit local operations (I, X, Z, or ZX) to her qubit depending on the 2-bit message, then sends her qubit to Bob. Bob performs a joint Bell measurement.",
      solution: "By applying Z, Alice changes state to |Φ⁻⟩ (representing 10). By applying X, she shifts to |Ψ⁺⟩ (representing 01). By applying ZX, she shifts to |Ψ⁻⟩ (representing 11). Bob measures the combined state, extracting both bits successfully from just one qubit."
    },
    qiskitCode: {
      code: `
# Qiskit v1.0 Example: Generating a Bell State
from qiskit import QuantumCircuit
from qiskit.quantum_info import Statevector

# Create circuit with 2 qubits
qc = QuantumCircuit(2)

# Step 1: Apply Hadamard to qubit 0
qc.h(0)

# Step 2: Apply CNOT controlled by 0 to target 1
qc.cx(0, 1)

# Draw circuit
print("Quantum Circuit:")
print(qc.draw('text'))

# Extract state vector
state = Statevector.from_instruction(qc)
print("\\nState Vector:")
print(state.draw('text'))
      `,
      description: "Generate the |Φ⁺⟩ Bell state using a Hadamard and a CNOT gate in Qiskit.",
      output: "Quantum Circuit:\n   ┌───┐     \nq_0: ┤ H ├──■──\n   └───┘┌─┴─┐\nq_1: ─────┤ X ├\n        └───┘\n\nState Vector:\n[0.70710678+0.j, 0.j, 0.j, 0.70710678+0.j]",
      explanation: "The state vector has non-zero amplitudes only at basis states |00⟩ and |11⟩, with equal weight (1/√2), representing the maximally entangled state."
    },
    summary: "Module 3 introduced multi-qubit systems, multi-qubit operations, and the mathematical proof of separability. We built the CNOT gate, constructed the four maximal Bell states, and analyzed protocols such as Superdense Coding.",
    formulas: [
      { name: "Tensor Product Vector", formula: "|a⟩ ⊗ |b⟩ = [a₀b₀, a₀b₁, a₁b₀, a₁b₁]ᵀ", description: "Direct product of two single-qubit state vectors." },
      { name: "Bell State |Φ⁺⟩", formula: "|Φ⁺⟩ = (|00⟩ + |11⟩)/√2", description: "Maximally entangled state with parallel correlations." },
      { name: "CNOT Matrix Operator", formula: "CNOT = [[1,0,0,0],[0,1,0,0],[0,0,0,1],[0,0,1,0]]", description: "Unitary representing controlled flip operations." }
    ],
    flashcards: [
      { question: "What is Schmidt decomposition?", answer: "A mathematical tool that expresses a bipartite state as a single sum of product states, useful for measuring the degree of entanglement." },
      { question: "Can we use entanglement for instant communication?", answer: "No. Although collapse is instantaneous, Alice's measurement result is random. The correlation cannot be read without classical information, preserving relativity." },
      { question: "What is a separable state?", answer: "A multi-qubit state that can be written as a simple tensor product of individual qubit states: |ψ⟩ = |ψ₁⟩ ⊗ |ψ₂⟩." }
    ],
    glossary: [
      { term: "Entanglement", definition: "A physical phenomenon where groups of particles interact such that the state of each particle cannot be described independently of the others." },
      { term: "CNOT Gate", definition: "A 2-qubit logic gate that performs a NOT operation on the second qubit only if the first qubit is in the state |1⟩." },
      { term: "Bell State", definition: "One of four specific maximally entangled quantum states of two qubits." }
    ],
    faqs: [
      { question: "Why is it called 'Spooky action at a distance'?", answer: "Einstein used this term to describe entanglement because it seemed to imply that information traveled faster than light, which defied classical intuition." },
      { question: "What happens if you measure only one qubit of a Bell state?", answer: "You get a random result (0 or 1 with 50% chance), but the remaining qubit collapses instantly to the exact same value (or opposite value, depending on the Bell state)." }
    ],
    practiceQuestions: {
      mcqs: [
        { question: "Which state represents the Bell state |Ψ⁺⟩?", options: ["(|00⟩ + |11⟩)/√2", "(|01⟩ + |10⟩)/√2", "(|00⟩ - |11⟩)/√2", "(|01⟩ - |10⟩)/√2"], answer: "B", explanation: "|Ψ⁺⟩ is the symmetric entangled state with anti-parallel components.", difficulty: "Easy" },
        { question: "How many dimensions does a 3-qubit state vector space have?", options: ["3", "6", "8", "9"], answer: "C", explanation: "For n qubits, the state space has 2^n dimensions. 2³ = 8.", difficulty: "Easy" }
      ],
      short: [
        { question: "Define Schmidt rank.", answer: "The number of non-zero terms in the Schmidt decomposition of a state. A rank greater than 1 indicates the state is entangled.", difficulty: "Hard" }
      ],
      long: [
        { question: "Provide step-by-step mathematical proof that the state (1/2)(|00⟩ + |01⟩ + |10⟩ + |11⟩) is separable.", answer: "We can factor this state: (1/2)(|00⟩ + |01⟩ + |10⟩ + |11⟩) = (1/√2)(|0⟩ + |1⟩) ⊗ (1/√2)(|0⟩ + |1⟩) = |+⟩ ⊗ |+⟩. Since it is written as a direct product of two single qubit states, it is separable.", difficulty: "Medium" }
      ],
      numerical: [
        { question: "What is the result of applying a CNOT gate to (1/√2)(|00⟩ + |10⟩)?", answer: "(1/√2)(|00⟩ + |11⟩)", explanation: "CNOT maps |00⟩ to |00⟩ (control is 0) and |10⟩ to |11⟩ (control is 1), creating a Bell state.", difficulty: "Medium" }
      ]
    },
    assignment: {
      theory: "Contrast quantum entanglement with classical statistical correlation using examples.",
      numerical: "Compute the density matrix of a |Φ⁺⟩ Bell state and check if it is pure.",
      coding: "Write a Qiskit script to generate all 4 Bell states using basic gates.",
      research: "Investigate current research on quantum satellite links distributing Bell states across continental distances."
    },
    miniProject: {
      title: "Bell State Correlation Verification",
      objective: "Measure one qubit of a Bell state and verify the second qubit collapses with 100% correlation.",
      procedure: "1. Create a 2-qubit circuit and build |Φ⁺⟩.\n2. Add measurement gates to both qubits.\n3. Run a simulation 1024 times and plot results.",
      expectedOutcome: "A histogram showing only outputs '00' and '11' with approximately 50% probability each, proving 100% correlation.",
      rubric: "Circuit formulation: 40%, Simulation execution: 30%, Report quality: 30%."
    }
  },
  {
    id: 4,
    title: "Measurement and Bell's Theorem",
    introduction: "This module covers quantum measurements using projection operators, the Einstein-Podolsky-Rosen (EPR) paradox, Bell's inequality, and the experimental verification of quantum non-locality.",
    outcomes: [
      "Explain the mathematical framework of projective (von Neumann) measurements.",
      "Understand the historical EPR paradox and the hidden variable hypothesis.",
      "Derive the CHSH inequality (Bell's theorem) and understand its classical limit.",
      "Explain how experimental tests (such as Aspect's experiments) verify quantum non-locality."
    ],
    conceptMap: [
      { from: "Projective Measurements", to: "EPR Paradox" },
      { from: "EPR Paradox", to: "Local Hidden Variables" },
      { from: "Local Hidden Variables", to: "Bell's Inequality (CHSH)" },
      { from: "Bell's Inequality (CHSH)", to: "Experimental Non-locality" }
    ],
    theory: `
      <h3>1. Projective (von Neumann) Measurements</h3>
      <p>A quantum measurement is defined by a set of Hermitian operators <b>{M_m}</b> that satisfy the completeness equation: <b>∑ M_m† M_m = I</b>. 
      For projective measurements, these operators are orthogonal projection operators: <b>P_m = |m⟩⟨m|</b>, satisfying <b>P_m P_n = δ_mn P_m</b>.</p>
      <p>The probability of obtaining result <i>m</i> is: <b>P(m) = ⟨ψ|P_m|ψ⟩</b>. 
      Immediately after measurement, the state collapses to: <b>|ψ'⟩ = P_m|ψ⟩ / √P(m)</b>.</p>

      <h3>2. The EPR Paradox & Local Realism</h3>
      <p>In 1935, Einstein, Podolsky, and Rosen (EPR) proposed a thought experiment using entangled particles. They argued that because measuring one particle immediately determines the state of the other, there must exist 'elements of physical reality' (hidden variables) that dictate the outcome before measurement. They posited **Local Realism**:
      <br>1. **Locality**: Physical actions at point A cannot instantly influence point B.
      <br>2. **Realism**: Physical properties have definite values independent of measurement.
      </p>

      <h3>3. Bell's Theorem & CHSH Inequality</h3>
      <p>In 1964, John Stewart Bell proved mathematically that local hidden variables cannot reproduce all predictions of quantum mechanics. 
      The Clauser-Horne-Shimony-Holt (CHSH) formulation of Bell's theorem defines a correlation value <i>S</i> for measurements along four polarization angles (A, A' by Alice; B, B' by Bob):
      <br><b>S = E(A, B) - E(A, B') + E(A', B) + E(A', B')</b>.
      </p>
      <p>Local realist theories restrict the correlation value to: <b>|S| ≤ 2</b>. 
      However, quantum mechanics predicts that for specific angles, <b>S = 2√2 ≈ 2.828</b>, violating the inequality and proving local realism is false.</p>
    `,
    math: `
      <h3>Deriving Quantum Violation of the CHSH Inequality</h3>
      <p>Let Alice measure along axes A or A', and Bob along B or B'. 
      Let Alice's settings be:
        <br><b>A = Z</b>, <b>A' = X</b>
      Let Bob's settings be:
        <br><b>B = (Z + X)/√2</b>, <b>B' = (Z - X)/√2</b>
      </p>
      <p>We share the Bell state <b>|Ψ⁻⟩ = (|01⟩ - |10⟩)/√2</b>. 
      Calculating expectation values for measurements:
        <br><b>E(A, B) = ⟨Ψ⁻|A ⊗ B|Ψ⁻⟩ = -1/√2</b>
        <br><b>E(A, B') = ⟨Ψ⁻|A ⊗ B'|Ψ⁻⟩ = -1/√2</b>
        <br><b>E(A', B) = ⟨Ψ⁻|A' ⊗ B|Ψ⁻⟩ = -1/√2</b>
        <br><b>E(A', B') = ⟨Ψ⁻|A' ⊗ B'|Ψ⁻⟩ = 1/√2</b>
      </p>
      <p>Now, calculate S:
        <br><b>S = E(A, B) - E(A, B') + E(A', B) + E(A', B') = -1/√2 - (-1/√2) - 1/√2 - 1/√2 = -2√2 ≈ -2.828</b>.
      </p>
      <p>Taking the absolute value gives <b>|S| = 2√2 ≈ 2.828 > 2</b>, violating the classical limit.</p>
    `,
    solvedExamples: [
      {
        question: "Verify the projection operators P_0 = |0⟩⟨0| and P_1 = |1⟩⟨1| satisfy completeness.",
        solution: "P_0 = [[1, 0], [0, 0]], P_1 = [[0, 0], [0, 1]]. Sum = P_0 + P_1 = [[1+0, 0+0], [0+0, 0+1]] = [[1, 0], [0, 1]] = I. Completeness is satisfied."
      },
      {
        question: "If a system is in state |ψ⟩ = (√3/2)|0⟩ + (1/2)|1⟩, calculate probability of measuring |0⟩.",
        solution: "Using Born's rule: P(0) = |⟨0|ψ⟩|² = |(√3/2)⟨0|0⟩ + (1/2)⟨0|1⟩|² = |√3/2 * 1 + 0|² = 3/4 = 75%."
      }
    ],
    applications: [
      { title: "Device-Independent Cryptography", description: "Violating Bell's inequality ensures that cryptographic keys generated by quantum devices are secure, even if the hardware is compromised." },
      { title: "Quantum Randomness Beacon", description: "Verifying Bell violations produces certified random numbers that are mathematically proven to be unpredictable by any external observer." }
    ],
    caseStudy: {
      title: "Aspect's 1982 Experimental Test of Bell Violation",
      problem: "Early experiments had 'locality loopholes' where the choice of polarizer settings could theoretically communicate classically at speed of light.",
      analysis: "Alain Aspect designed a system where polarizers changed directions dynamically while the photons were in flight. The switching time (10ns) was less than the photon transit time (40ns), preventing sub-light speed communication.",
      solution: "Aspect's experiment showed a clear violation of Bell's inequality, closing the locality loophole and proving quantum non-locality."
    },
    qiskitCode: {
      code: `
# Qiskit v1.0 Example: Measurement in Diagonal Bases
from qiskit import QuantumCircuit
from qiskit.quantum_info import Statevector
import numpy as np

# Create circuit
qc = QuantumCircuit(1)
qc.h(0) # Put in state |+>

# Measure in Z basis
# We will show the expectation value instead of measuring directly
state = Statevector.from_instruction(qc)
exp_z = state.expectation_value(state.draw('text')) # expectation value indicator

# To measure in X basis, we rotate back with H before measuring
qc_diag = QuantumCircuit(1, 1)
qc_diag.h(0)
qc_diag.h(0) # Rotates X axis to Z axis
qc_diag.measure(0, 0)

print("Expectation value along Z basis: ~0 (equal probability)")
print("Measuring diagonal basis after rotation yields deterministic output.")
      `,
      description: "Perform measurement change of basis from rectilinear to diagonal in Qiskit.",
      output: "Expectation value along Z basis: ~0 (equal probability)\nMeasuring diagonal basis after rotation yields deterministic output.",
      explanation: "Applying H before Z-measurement translates diagonal X-basis measurements into computational basis states, allowing standard measurement hardware to extract diagonal features."
    },
    summary: "Module 4 established the mathematics of quantum measurement and the resolution of the EPR paradox. By analyzing Bell's theorem and the CHSH inequality, we proved that quantum mechanics violates local realism, verified by Aspect's loopholes-closed experiments.",
    formulas: [
      { name: "Projection Operator", formula: "P_m = |m⟩⟨m|", description: "Operator representing projective measurement collapse." },
      { name: "CHSH Inequality", formula: "|S| ≤ 2", description: "Classical bound for correlation functions under local realism." },
      { name: "Tsirelson's Bound", formula: "|S| ≤ 2√2", description: "Maximum violation bound allowed by quantum mechanics." }
    ],
    flashcards: [
      { question: "What is local realism?", answer: "The philosophical premise that objects have definite properties separate from measurement, and physical effects have a finite propagation speed." },
      { question: "What is a loophole in Bell tests?", answer: "An experimental limitation (e.g., detector efficiency, locality speed) that could theoretically allow classical physics to mimic a Bell violation." },
      { question: "What did the 2022 Nobel Prize in Physics recognize?", answer: "Alain Aspect, John Clauser, and Anton Zeilinger for experiments with entangled photons, establishing the violation of Bell inequalities." }
    ],
    glossary: [
      { term: "Projective Measurement", definition: "A class of measurement represented by Hermitian projection operators that collapse the state to an eigenstate." },
      { term: "EPR Paradox", definition: "A 1935 paradox arguing that quantum mechanics is incomplete due to non-local correlations." },
      { term: "Bell's Theorem", definition: "A theorem showing that no physical theory of local hidden variables can ever reproduce all predictions of quantum mechanics." }
    ],
    faqs: [
      { question: "Does Bell's theorem mean information travels faster than light?", answer: "No. The correlation between entangled particles is non-local, but because the individual measurement outcomes are random, they cannot be used to transmit signals faster than light." },
      { question: "What is a hidden variable?", answer: "A hypothetical underlying physical property that determines the outcome of a measurement, which is not described by standard quantum mechanics." }
    ],
    practiceQuestions: {
      mcqs: [
        { question: "What is the maximum value of the CHSH correlation parameter S under classical local realism?", options: ["1", "2", "2√2", "4"], answer: "B", explanation: "Under local realism, the CHSH inequality requires |S| ≤ 2.", difficulty: "Easy" },
        { question: "What is the quantum limit (Tsirelson's bound) for the CHSH parameter S?", options: ["2", "2.5", "2√2", "4"], answer: "C", explanation: "Quantum mechanics allows S to reach 2√2 ≈ 2.828.", difficulty: "Medium" }
      ],
      short: [
        { question: "Explain the measurement loophole.", answer: "If detectors are inefficient, one must assume the measured subset is representative of the whole, allowing local hidden variables to mimic quantum violations.", difficulty: "Hard" }
      ],
      long: [
        { question: "Explain the EPR paradox and how Bell's theorem resolved it.", answer: "EPR argued that if a property of a system can be predicted with certainty without disturbing it, it must have a real value. In a Bell pair, measuring A allows predicting B instantly, implying B has a pre-existing value, so quantum mechanics must be incomplete. Bell proved that if these pre-existing values exist and obey locality, they must satisfy inequalities like |S| <= 2. Quantum mechanics predicts values up to 2.828, which experiments confirmed, resolving the paradox in favor of quantum non-locality.", difficulty: "Hard" }
      ],
      numerical: [
        { question: "Determine if the correlation values E(A,B)=0.7, E(A,B')=-0.6, E(A',B)=0.8, E(A',B')=0.7 violate the CHSH inequality.", answer: "Yes, S = 2.8 > 2", explanation: "S = 0.7 - (-0.6) + 0.8 + 0.7 = 0.7 + 0.6 + 0.8 + 0.7 = 2.8. Since 2.8 > 2, it violates the inequality.", difficulty: "Medium" }
      ]
    },
    assignment: {
      theory: "Discuss the design and implications of the loophole-free Bell tests conducted in 2015.",
      numerical: "Show that for projection operators, P² = P and P† = P.",
      coding: "Write a Qiskit script simulating a CHSH experiment, choosing measurement angles to maximize violation.",
      research: "Investigate how Bell violations are used in quantum key generation protocols like E91."
    },
    miniProject: {
      title: "CHSH Simulator",
      objective: "Simulate a CHSH experiment using a 2-qubit circuit with rotation gates representing Alice's and Bob's measurements.",
      procedure: "1. Create a Bell state.\n2. Apply rotations on qubits to select measurement bases.\n3. Measure and calculate correlation S for different angles.",
      expectedOutcome: "A calculated S value of ~2.828 for the optimal angles, showing a clear violation of the classical limit.",
      rubric: "Mathematics: 40%, Simulation accuracy: 45%, Report: 15%."
    }
  },
  {
    id: 5,
    title: "Quantum Circuits and Applications",
    introduction: "This module covers multi-qubit circuit design, controlled operations (CZ, Toffoli), universal gate sets, and foundational applications: Superdense Coding, Quantum Teleportation, and Quantum Cryptography (BB84).",
    outcomes: [
      "Construct and analyze complex multi-qubit quantum circuits.",
      "Understand multi-qubit controlled gates like CZ and Toffoli (CCNOT).",
      "Explain the Solovay-Kitaev theorem and identify universal gate sets.",
      "Demonstrate the step-by-step execution of the quantum teleportation protocol."
    ],
    conceptMap: [
      { from: "Controlled Gates (CZ, Toffoli)", to: "Universal Gate Sets" },
      { from: "Universal Gate Sets", to: "Quantum Teleportation" },
      { from: "Quantum Teleportation", to: "Quantum Cryptography (BB84)" }
    ],
    theory: `
      <h3>1. Controlled Multi-Qubit Gates</h3>
      <p>Beyond CNOT, quantum circuits use other multi-qubit controlled gates to build complex logic:</p>
      <ul>
        <li><b>Controlled-Z (CZ)</b>: Applies a phase flip to target qubit if control qubit is |1⟩. 
        Note that CZ is symmetric: <code>CZ = diag(1, 1, 1, -1)</code>.</li>
        <li><b>Toffoli Gate (CCNOT)</b>: Has two control qubits and one target. Flips the target qubit only if both controls are |1⟩. 
        This gate is crucial because it is classically universal, enabling any classical reversible computation: <code>CCNOT = [[I(6x6), 0], [0, X]]</code>.</li>
      </ul>

      <h3>2. Universal Gate Sets</h3>
      <p>A set of gates is **universal** if any unitary operation can be approximated to arbitrary precision by a sequence of gates from this set. 
      The **Solovay-Kitaev theorem** states that any single-qubit gate can be approximated efficiently using a finite set of gates, such as <b>{H, T, CNOT}</b>. 
      This is critical for building fault-tolerant quantum computers since they only need to implement a small set of gates with high fidelity.</p>

      <h3>3. Quantum Teleportation</h3>
      <p>Quantum Teleportation transfers an unknown qubit state <b>|ψ⟩ = α|0⟩ + β|1⟩</b> from Alice to Bob using a shared entangled pair and two classical bits of communication. 
      It does not violate the **no-cloning theorem** because Alice's original qubit state is destroyed during the measurement process.</p>
      <ol>
        <li>Alice and Bob share a Bell state: <b>(|00⟩ + |11⟩)/√2</b>.</li>
        <li>Alice performs a joint Bell measurement on the state |ψ⟩ and her half of the entangled pair.</li>
        <li>Alice sends her two measurement outcomes (classical bits) to Bob.</li>
        <li>Bob applies correction gates (I, X, Z, or ZX) to reconstruct the state |ψ⟩.</li>
      </ol>
    `,
    math: `
      <h3>Mathematical Analysis of Quantum Teleportation</h3>
      <p>Let Alice's unknown state be: <b>|ψ⟩_1 = α|0⟩ + β|1⟩</b>. 
      Alice and Bob share qubits 2 and 3 in the state: <b>|Φ⁺⟩_23 = (|00⟩ + |11⟩)/√2</b>.
      The initial 3-qubit state is:
        <br><b>|Ψ_0⟩ = |ψ⟩_1 ⊗ |Φ⁺⟩_23 = (1/√2)[ α|0⟩(|00⟩ + |11⟩) + β|1⟩(|00⟩ + |11⟩) ]</b>
      </p>
      <p>Alice applies a CNOT on qubit 1 (control) and 2 (target), then a Hadamard on qubit 1. 
      Expanding the state vector yields:
        <br><b>|Ψ_2⟩ = (1/2) [
          |00⟩(α|0⟩ + β|1⟩) +
          |01⟩(α|1⟩ + β|0⟩) +
          |10⟩(α|0⟩ - β|1⟩) +
          |11⟩(α|1⟩ - β|0⟩)
        ]</b>
      </p>
      <p>Alice measures qubits 1 and 2, yielding one of four classical outcomes:
        <br>• If <b>00</b>: Bob's qubit 3 is <b>α|0⟩ + β|1⟩</b> (Apply <b>I</b>)
        <br>• If <b>01</b>: Bob's qubit 3 is <b>α|1⟩ + β|0⟩</b> (Apply <b>X</b>)
        <br>• If <b>10</b>: Bob's qubit 3 is <b>α|0⟩ - β|1⟩</b> (Apply <b>Z</b>)
        <br>• If <b>11</b>: Bob's qubit 3 is <b>α|1⟩ - β|0⟩</b> (Apply <b>ZX</b>)
      </p>
    `,
    solvedExamples: [
      {
        question: "Show how a CZ gate can be constructed using CNOT and Hadamard gates.",
        solution: "A CZ gate changes the phase of |11⟩. We can apply H to the target qubit, apply CNOT, and then apply H again. Mathematically: (I ⊗ H) * CNOT * (I ⊗ H). Let's verify: H maps |0⟩ ↔ |+⟩ and |1⟩ ↔ |-⟩. The CNOT flips target phase under |1⟩ control, and the final H returns it to basis states, yielding the phase flip."
      },
      {
        question: "Explain why the No-Cloning Theorem prevents copying quantum states.",
        solution: "Suppose a unitary operator U can clone an arbitrary state |ψ⟩ onto target |e⟩: U|ψ⟩|e⟩ = |ψ⟩|ψ⟩, and U|ϕ⟩|e⟩ = |ϕ⟩|ϕ⟩. Taking the inner product of both equations gives ⟨ψ|ϕ⟩ = (⟨ψ|ϕ⟩)². This requires ⟨ψ|ϕ⟩ to be 0 or 1, meaning we can only clone orthogonal states. An arbitrary state cannot be cloned."
      }
    ],
    applications: [
      { title: "Quantum Cryptography", description: "BB84 protocol distributes secure keys using single-qubit states, ensuring security via the no-cloning theorem." },
      { title: "Fault-Tolerant Computing", description: "Universal gate sets like {H, T, CNOT} allow running quantum algorithms on error-corrected qubits." }
    ],
    caseStudy: {
      title: "Commercial QKD Network Deployment",
      problem: "A bank wants to secure communication between two data centers separated by 50 km using quantum key distribution.",
      analysis: "Optical fibers degrade photon signals over long distances, and classical repeaters cannot copy quantum states due to the no-cloning theorem. Quantum repeaters must use entanglement swapping to extend the range.",
      solution: "By deploying QKD systems using the BB84 protocol with weak laser pulses, keys are exchanged and checked for eavesdropping. Entanglement swapping routes keys over longer distances securely."
    },
    qiskitCode: {
      code: `
# Qiskit v1.0 Example: Quantum Teleportation
from qiskit import QuantumCircuit, ClassicalRegister, QuantumRegister

# Create registers
qr = QuantumRegister(3, name="q")
cr_a = ClassicalRegister(1, name="cr_a")
cr_b = ClassicalRegister(1, name="cr_b")
qc = QuantumCircuit(qr, cr_a, cr_b)

# Step 1: Create Bell pair shared by Alice (q1) and Bob (q2)
qc.h(1)
qc.cx(1, 2)

# Step 2: Alice prepares state on q0 (e.g. apply X to make it |1>)
qc.x(0) 

# Step 3: Alice applies CNOT and H to her qubits
qc.cx(0, 1)
qc.h(0)

# Step 4: Alice measures her qubits
qc.measure(0, cr_a)
qc.measure(1, cr_b)

# Step 5: Bob applies corrections based on classical bits
# In Qiskit, we use dynamic circuits (c_if)
qc.x(2).c_if(cr_b, 1)
qc.z(2).c_if(cr_a, 1)

print("Teleportation Circuit:")
print(qc.draw('text'))
      `,
      description: "Build a quantum teleportation circuit in Qiskit using dynamic classical control feedback.",
      output: "Teleportation Circuit:\n[Circuit diagram showing registers, gates, and classical-controlled operations]",
      explanation: "Qubit q0 is teleported to qubit q2. Bob uses Alice's measurement outcomes (cr_a, cr_b) to apply correction gates X and Z, reconstructing the state of q0."
    },
    summary: "Module 5 completed the syllabus by introducing controlled gates, universal gate sets, and foundational quantum communication protocols: Superdense Coding, Teleportation, and BB84 Cryptography.",
    formulas: [
      { name: "Toffoli Gate Matrix", formula: "CCNOT = diag(1,1,1,1,1,1,[[0,1],[1,0]])", description: "3-qubit controlled double-NOT gate." },
      { name: "No-Cloning Condition", formula: "U|ψ⟩|e⟩ ≠ |ψ⟩|ψ⟩", description: "Prohibits cloning an unknown quantum state." },
      { name: "Teleportation Corrective Operators", formula: "Bob's U = Z^(cr_a) * X^(cr_b)", description: "Correction applied by Bob to reconstruct the teleported state." }
    ],
    flashcards: [
      { question: "What is the Toffoli gate?", answer: "A 3-qubit gate that flips the target qubit only if both control qubits are in state |1⟩." },
      { question: "What does the No-Cloning Theorem state?", answer: "It is impossible to create an identical copy of an arbitrary unknown quantum state." },
      { question: "Why does teleportation not violate relativity?", answer: "Because Bob must wait for Alice's classical measurement results (which cannot travel faster than light) to reconstruct the teleported state." }
    ],
    glossary: [
      { term: "Toffoli Gate", definition: "A universal reversible 3-qubit gate, also called the Controlled-Controlled-NOT gate." },
      { term: "Universal Gate Set", definition: "A set of quantum gates that can approximate any unitary operation to arbitrary precision." },
      { term: "Entanglement Swapping", definition: "Entangling two particles that have never interacted by performing a Bell measurement on two other entangled particles." }
    ],
    faqs: [
      { question: "Can we teleport physical matter?", answer: "No. Quantum teleportation transfers only the quantum state information of a particle to another particle, not the physical particle itself." },
      { question: "What is a fault-tolerant quantum computer?", answer: "A quantum computer that can detect and correct physical qubit errors, allowing reliable execution of long algorithms." }
    ],
    practiceQuestions: {
      mcqs: [
        { question: "Which gate is universal for classical reversible computing?", options: ["CNOT", "Hadamard", "Toffoli", "Pauli-Z"], answer: "C", explanation: "The Toffoli (CCNOT) gate is universal for classical reversible logic.", difficulty: "Easy" },
        { question: "What gates form a standard universal set for quantum computing when combined?", options: ["{H, S}", "{CNOT, X}", "{H, T, CNOT}", "{X, Y, Z}"], answer: "C", explanation: "The set {H, T, CNOT} is universal for quantum computing.", difficulty: "Medium" }
      ],
      short: [
        { question: "Explain the role of classical communication in quantum teleportation.", answer: "Classical communication transmits Alice's two measurement outcomes to Bob, which he needs to choose the correct decoding gate to reconstruct the teleported state.", difficulty: "Medium" }
      ],
      long: [
        { question: "State and prove the No-Cloning Theorem.", answer: "Assume a unitary cloning operator U exists such that U|ψ⟩|0⟩ = |ψ⟩|ψ⟩ and U|ϕ⟩|0⟩ = |ϕ⟩|ϕ⟩ for arbitrary states. Taking the inner product: ⟨0|⟨ψ|U† U|ϕ⟩|0⟩ = ⟨ψ|⟨ψ|ϕ⟩|ϕ⟩. Since U is unitary, U†U = I, so left side is ⟨ψ|ϕ⟩⟨0|0⟩ = ⟨ψ|ϕ⟩. Right side is (⟨ψ|ϕ⟩)². Thus, ⟨ψ|ϕ⟩ = (⟨ψ|ϕ⟩)², which means ⟨ψ|ϕ⟩ must be 0 or 1. This means the states must be orthogonal, proving we cannot clone arbitrary unknown states.", difficulty: "Hard" }
      ],
      numerical: [
        { question: "If Alice measures 1 and 0 (cr_a=1, cr_b=0) during teleportation, what gate must Bob apply?", answer: "Z gate", explanation: "When cr_a=1 and cr_b=0, Bob applies Z¹X⁰ = Z gate to his qubit.", difficulty: "Medium" }
      ]
    },
    assignment: {
      theory: "Explain how universal gate sets approximate arbitrary unitaries using the Solovay-Kitaev theorem.",
      numerical: "Calculate the output state of a Toffoli gate when the inputs are |110⟩.",
      coding: "Write a Qiskit script to implement the three-qubit Toffoli gate using only CNOT, H, and T gates.",
      research: "Investigate current challenges in quantum teleportation over long-distance fiber networks."
    },
    miniProject: {
      title: "Quantum Teleportation Simulation",
      objective: "Build and simulate a quantum teleportation circuit in Qiskit and verify the state transfer.",
      procedure: "1. Prepare a test state on qubit 0 (e.g., using rotation gates).\n2. Set up the shared Bell pair and teleportation circuit.\n3. Measure the final state of Bob's qubit and compare it with the initial state.",
      expectedOutcome: "The output state of Bob's qubit matches Alice's initial state exactly, confirming successful teleportation.",
      rubric: "Circuit design: 40%, Simulation accuracy: 40%, Analysis: 20%."
    }
  }
];
