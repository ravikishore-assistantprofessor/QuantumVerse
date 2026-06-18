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
  ,
    subtopics: [
      {
        "topic_id": "u1t1",
        "title": "Wave Function & Schrödinger Equation",
        "raw_title": "Wave Function & Schrödinger Equation",
        "slides": "\n<div class=\"slide-deck\">\n  <div id=\"sdecku1t1\"><div class=\"slide-item\" id=\"slu1t1-0\" style=\"display:block\"><div class=\"slide-container\"><span class=\"slide-num\">1/5</span><h2>Wave-Particle Duality</h2><ul><li>Every particle has an associated wavelength: λ = h/p</li><li>Double-slit experiment: electrons create interference patterns</li><li>Wave nature is intrinsic — not a model limitation</li></ul></div></div><div class=\"slide-item\" id=\"slu1t1-1\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">2/5</span><h2>The Wave Function ψ</h2><p>Quantum state encoded in ψ(x,t) ∈ ℂ</p><div class=\"math-s\">P(x,t) = |ψ(x,t)|²</div><div class=\"math-s\">∫|ψ|² dx = 1 (normalisation)</div></div></div><div class=\"slide-item\" id=\"slu1t1-2\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">3/5</span><h2>Schrödinger Equation</h2><div class=\"math-s\">iℏ ∂ψ/∂t = Ĥψ</div><div class=\"math-s\">Ĥ = −(ℏ²/2m)∂²/∂x² + V(x)</div><p>Time-independent: Ĥψ = Eψ (eigenvalue equation)</p></div></div><div class=\"slide-item\" id=\"slu1t1-3\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">4/5</span><h2>1D Potential Box</h2><div class=\"math-s\">ψₙ(x) = √(2/L) sin(nπx/L)</div><div class=\"math-s\">Eₙ = n²π²ℏ²/2mL²</div><ul><li>Energy quantised</li><li>Zero-point energy (n=1) ≠ 0</li><li>Eigenfunctions orthonormal</li></ul></div></div><div class=\"slide-item\" id=\"slu1t1-4\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">5/5</span><h2>Key Takeaways</h2><ul><li>ψ encodes all quantum information</li><li>|ψ|² is probability density (Born's rule)</li><li>Energy eigenvalues are discrete (quantised)</li><li>Zero-point energy: fundamental quantum effect</li></ul></div></div></div>\n  <div class=\"slide-nav\">\n    <button id=\"sprevu1t1\" onclick=\"slidePrev('u1t1')\" disabled=\"None\">← Prev</button>\n    <span class=\"slide-counter\" id=\"scntu1t1\">1 / 5</span>\n    <button id=\"snextu1t1\" onclick=\"slideNext('u1t1')\">Next →</button>\n  </div>\n</div></div>",
        "transcript": "Welcome to Unit 1, Topic 1: Wave Function and the Schrödinger Equation. In classical physics, we can know exactly where a particle is and how fast it moves. Quantum mechanics tells us something more subtle: particles are described by a wave function, psi, which encodes all the information we can know about a system. The square of the wave function gives us the probability of finding the particle at a given location—this is Born's Rule. The wave function must be normalized, meaning total probability equals one. Now, how does this wave function evolve over time? Through the Schrödinger equation, which plays the same role in quantum mechanics as Newton's second law in classical mechanics. For energy-conserved systems, we seek stationary states—eigenfunctions of the Hamiltonian—each with a definite energy eigenvalue. The simplest example is a particle trapped in a one-dimensional box. The solutions are standing waves, with quantized energies proportional to n-squared. The ground state always has nonzero energy—the famous zero-point energy—a direct consequence of the Heisenberg uncertainty principle. Wave-particle duality, demonstrated by the double-slit experiment, shows that particles exhibit interference patterns just like waves. This wave nature is what makes quantum computing fundamentally different from classical computing.",
        "sim": "\n<div class=\"sim-wrap\"><h3>🔬 Wave Function Visualizer</h3>\n<div class=\"sim-controls\">\n  <label>Quantum Number n <input type=\"range\" id=\"simn_u1t1\" min=\"1\" max=\"5\" value=\"1\" oninput=\"updateWave('u1t1')\"><span id=\"nval_u1t1\">1</span></label>\n  <label>Box Width L <input type=\"range\" id=\"siml_u1t1\" min=\"1\" max=\"5\" value=\"3\" oninput=\"updateWave('u1t1')\"><span id=\"lval_u1t1\">3</span></label>\n</div>\n<div class=\"sim-output\"><canvas id=\"waveCanvas_u1t1\" width=\"560\" height=\"200\" style=\"background:#1e2433;border-radius:8px;width:100%\"></canvas></div>\n<div class=\"sim-info\" id=\"siminfo_u1t1\">Energy E₁ = π²ℏ²/2mL²</div></div>\n<script>\nfunction updateWave(t){\n  var n=parseInt(document.getElementById('simn_'+t).value);\n  var L=parseFloat(document.getElementById('siml_'+t).value);\n  document.getElementById('nval_'+t).textContent=n;\n  document.getElementById('lval_'+t).textContent=L.toFixed(1);\n  var c=document.getElementById('waveCanvas_'+t);\n  var ctx=c.getContext('2d');ctx.clearRect(0,0,c.width,c.height);\n  ctx.strokeStyle='#64748b';ctx.lineWidth=1;\n  ctx.beginPath();ctx.moveTo(40,100);ctx.lineTo(520,100);ctx.stroke();\n  ctx.beginPath();ctx.moveTo(40,10);ctx.lineTo(40,190);ctx.stroke();\n  var colors=['#00d4ff','#7c3aed','#10b981','#f59e0b','#ef4444'];\n  ctx.strokeStyle=colors[(n-1)%5];ctx.lineWidth=2.5;ctx.beginPath();\n  for(var i=0;i<=480;i++){var x=i/480;var y=Math.sin(n*Math.PI*x);ctx.lineTo(40+i,100-y*75);}\n  ctx.stroke();\n  ctx.fillStyle='rgba(0,212,255,0.08)';ctx.beginPath();ctx.moveTo(40,100);\n  for(var i=0;i<=480;i++){var x=i/480;var y=Math.sin(n*Math.PI*x);ctx.lineTo(40+i,100-y*75);}\n  ctx.lineTo(520,100);ctx.closePath();ctx.fill();\n  ctx.fillStyle='#94a3b8';ctx.font='12px sans-serif';\n  ctx.fillText('ψ',8,105);ctx.fillText('x',525,104);\n  ctx.fillStyle='#00d4ff';ctx.font='bold 13px sans-serif';ctx.fillText('n='+n,50,24);\n  var eRatio=n*n;\n  document.getElementById('siminfo_'+t).innerHTML='Energy E<sub>'+n+'</sub> = '+eRatio+' × E<sub>1</sub> = '+eRatio+' × π²ℏ²/2mL² &nbsp;|&nbsp; Nodes (excluding ends): '+(n-1);\n}\nupdateWave('u1t1');\n</script></div>",
        "refs": "\n<div class=\"ref-section\">\n  <h4>📚 Textbooks</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computation and Quantum Information</div>\n    <div class=\"ref-auth\">M. A. Nielsen & I. L. Chuang — Cambridge University Press</div>\n    <a class=\"ref-link\" href=\"https://www.cambridge.org/core/books/quantum-computation-and-quantum-information/01E10196D0A682A6AEFFEA52D53BE9AE\" target=\"_blank\">🔗 Publisher</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computer Science: An Introduction</div>\n    <div class=\"ref-auth\">N. David Mermin — Cambridge University Press</div>\n    <a class=\"ref-link\" href=\"https://www.cambridge.org/core/books/quantum-computer-science/66462590D10C8010017CF1D7C45708D7\" target=\"_blank\">🔗 Publisher</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">An Introduction to Quantum Computing</div>\n    <div class=\"ref-auth\">Kaye, Laflamme & Mosca — Oxford University Press</div>\n    <a class=\"ref-link\" href=\"https://global.oup.com/academic/product/an-introduction-to-quantum-computing-9780198570493\" target=\"_blank\">🔗 Publisher</a></div>\n</div>\n<div class=\"ref-section\">\n  <h4>📖 Reference Books</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing</div>\n    <div class=\"ref-auth\">V. Sahni — Tata McGraw-Hill</div></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing: A Gentle Introduction</div>\n    <div class=\"ref-auth\">E. Rieffel & W. Polak — MIT Press</div>\n    <a class=\"ref-link\" href=\"https://mitpress.mit.edu/9780262526678/\" target=\"_blank\">🔗 MIT Press</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Lecture Notes on Quantum Computation</div>\n    <div class=\"ref-auth\">John Preskill — Caltech (Free Online)</div>\n    <a class=\"ref-link\" href=\"http://www.theory.caltech.edu/~preskill/ph229/\" target=\"_blank\">🔗 Caltech</a></div>\n</div>\n<div class=\"ref-section\">\n  <h4>🌐 Online Resources</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">IBM Quantum Learning</div>\n    <a class=\"ref-link\" href=\"https://learning.quantum.ibm.com/\" target=\"_blank\">🔗 learning.quantum.ibm.com</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Qiskit Textbook</div>\n    <a class=\"ref-link\" href=\"https://qiskit.org/learn\" target=\"_blank\">🔗 qiskit.org/learn</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing Playground (Google)</div>\n    <a class=\"ref-link\" href=\"http://www.quantumplayground.net/\" target=\"_blank\">🔗 quantumplayground.net</a></div>\n</div></div>"
      },
      {
        "topic_id": "u1t2",
        "title": "Why Quantum Computing",
        "raw_title": "Why Quantum Computing",
        "slides": "\n<div class=\"slide-deck\">\n  <div id=\"sdecku1t2\"><div class=\"slide-item\" id=\"slu1t2-0\" style=\"display:block\"><div class=\"slide-container\"><span class=\"slide-num\">1/5</span><h2>Limits of Classical Computing</h2><ul><li>Moore's Law slowing — transistors near atomic scale</li><li>Simulating n qubits needs 2ⁿ classical bits</li><li>NP-hard problems: no classical polynomial-time solution</li></ul></div></div><div class=\"slide-item\" id=\"slu1t2-1\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">2/5</span><h2>Classical vs Quantum</h2><ul><li>Bit → Qubit (superposition)</li><li>Logic gates → Unitary operations</li><li>Sequential → Quantum parallelism</li><li>Deterministic → Probabilistic</li></ul></div></div><div class=\"slide-item\" id=\"slu1t2-2\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">3/5</span><h2>Decoherence</h2><ul><li>Quantum states fragile — collapse due to environment</li><li>Requires ultra-cold temperatures (~15 mK)</li><li>Coherence times: μs to ms</li><li>Overcome via quantum error correction</li></ul></div></div><div class=\"slide-item\" id=\"slu1t2-3\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">4/5</span><h2>Key Quantum Algorithms</h2><ul><li>Shor's: Factoring in O(n³) — breaks RSA</li><li>Grover's: Search in O(√N) — quadratic speedup</li><li>VQE / QAOA: Optimisation</li><li>Quantum simulation: drug discovery</li></ul></div></div><div class=\"slide-item\" id=\"slu1t2-4\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">5/5</span><h2>Quantum Cryptography</h2><ul><li>BB84: Provably secure key distribution</li><li>Eavesdropping increases QBER → detected</li><li>Post-quantum cryptography: lattice-based algorithms</li></ul></div></div></div>\n  <div class=\"slide-nav\">\n    <button id=\"sprevu1t2\" onclick=\"slidePrev('u1t2')\" disabled=\"None\">← Prev</button>\n    <span class=\"slide-counter\" id=\"scntu1t2\">1 / 5</span>\n    <button id=\"snextu1t2\" onclick=\"slideNext('u1t2')\">Next →</button>\n  </div>\n</div></div>",
        "transcript": "Welcome to Unit 1, Topic 2: Why Quantum Computing? Classical computers have served us extraordinarily well, but they face fundamental limits. Moore's Law—the doubling of transistor density every two years—is slowing down as transistors approach atomic scale. Simulating quantum systems on classical computers requires exponentially more resources: n quantum particles need 2-to-the-n classical bits to simulate. This is simply impossible for large n. Quantum computers overcome this by using qubits, which can exist in superposition, and by exploiting quantum interference to find answers efficiently. Three key application areas make quantum computing transformative. First, cryptography: Shor's algorithm can factor large integers in polynomial time—breaking the RSA encryption that secures the internet. Quantum Key Distribution offers provably secure communication using the laws of physics. Second, optimization: Grover's algorithm searches unsorted databases quadratically faster than any classical algorithm. Third, simulation: quantum computers can model molecular and chemical interactions exactly, accelerating drug discovery and materials science. The main challenge is decoherence—quantum states are fragile and easily disturbed by the environment. But quantum error correction techniques are rapidly maturing, bringing fault-tolerant quantum computers closer to reality.",
        "sim": "<div class=\"sim-wrap\"><h3>🔬 Interactive Simulation</h3>\n<div class=\"sim-output\" style=\"padding:30px;text-align:center\">\n<div style=\"font-size:3rem;margin-bottom:12px\">⚛️</div>\n<p style=\"color:#94a3b8;margin-bottom:14px\">Simulation for this topic</p>\n<p style=\"color:#94a3b8;font-size:.82rem\">Try the IBM Quantum Experience to run real quantum circuits:</p>\n<a href=\"https://quantum.ibm.com/\" target=\"_blank\" style=\"display:inline-block;margin-top:8px;background:#1d5fa4;color:#fff;padding:8px 18px;border-radius:7px;font-size:.82rem;text-decoration:none\">🔗 IBM Quantum</a>\n<a href=\"http://www.quantumplayground.net/\" target=\"_blank\" style=\"display:inline-block;margin-top:8px;margin-left:8px;background:#6d28d9;color:#fff;padding:8px 18px;border-radius:7px;font-size:.82rem;text-decoration:none\">🔗 Quantum Playground</a>\n</div></div></div>",
        "refs": "\n<div class=\"ref-section\">\n  <h4>📚 Textbooks</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computation and Quantum Information</div>\n    <div class=\"ref-auth\">M. A. Nielsen & I. L. Chuang — Cambridge University Press</div>\n    <a class=\"ref-link\" href=\"https://www.cambridge.org/core/books/quantum-computation-and-quantum-information/01E10196D0A682A6AEFFEA52D53BE9AE\" target=\"_blank\">🔗 Publisher</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computer Science: An Introduction</div>\n    <div class=\"ref-auth\">N. David Mermin — Cambridge University Press</div>\n    <a class=\"ref-link\" href=\"https://www.cambridge.org/core/books/quantum-computer-science/66462590D10C8010017CF1D7C45708D7\" target=\"_blank\">🔗 Publisher</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">An Introduction to Quantum Computing</div>\n    <div class=\"ref-auth\">Kaye, Laflamme & Mosca — Oxford University Press</div>\n    <a class=\"ref-link\" href=\"https://global.oup.com/academic/product/an-introduction-to-quantum-computing-9780198570493\" target=\"_blank\">🔗 Publisher</a></div>\n</div>\n<div class=\"ref-section\">\n  <h4>📖 Reference Books</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing</div>\n    <div class=\"ref-auth\">V. Sahni — Tata McGraw-Hill</div></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing: A Gentle Introduction</div>\n    <div class=\"ref-auth\">E. Rieffel & W. Polak — MIT Press</div>\n    <a class=\"ref-link\" href=\"https://mitpress.mit.edu/9780262526678/\" target=\"_blank\">🔗 MIT Press</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Lecture Notes on Quantum Computation</div>\n    <div class=\"ref-auth\">John Preskill — Caltech (Free Online)</div>\n    <a class=\"ref-link\" href=\"http://www.theory.caltech.edu/~preskill/ph229/\" target=\"_blank\">🔗 Caltech</a></div>\n</div>\n<div class=\"ref-section\">\n  <h4>🌐 Online Resources</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">IBM Quantum Learning</div>\n    <a class=\"ref-link\" href=\"https://learning.quantum.ibm.com/\" target=\"_blank\">🔗 learning.quantum.ibm.com</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Qiskit Textbook</div>\n    <a class=\"ref-link\" href=\"https://qiskit.org/learn\" target=\"_blank\">🔗 qiskit.org/learn</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing Playground (Google)</div>\n    <a class=\"ref-link\" href=\"http://www.quantumplayground.net/\" target=\"_blank\">🔗 quantumplayground.net</a></div>\n</div></div>"
      },
      {
        "topic_id": "u1t3",
        "title": "Qubits vs. Classical Bits",
        "raw_title": "Qubits vs. Classical Bits",
        "slides": "\n<div class=\"slide-deck\">\n  <div id=\"sdecku1t3\"><div class=\"slide-item\" id=\"slu1t3-0\" style=\"display:block\"><div class=\"slide-container\"><span class=\"slide-num\">1/5</span><h2>Classical Bit</h2><div class=\"math-s\">bit ∈ {0, 1}</div><ul><li>Implemented as voltage levels, magnetic domains</li><li>Deterministic — state always definite</li><li>Freely copyable</li></ul></div></div><div class=\"slide-item\" id=\"slu1t3-1\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">2/5</span><h2>The Qubit</h2><div class=\"math-s\">|ψ⟩ = α|0⟩ + β|1⟩</div><div class=\"math-s\">|α|² + |β|² = 1</div><ul><li>Superposition of basis states</li><li>Collapses on measurement</li></ul></div></div><div class=\"slide-item\" id=\"slu1t3-2\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">3/5</span><h2>Comparison</h2><ul><li>n bits → n values; n qubits → 2ⁿ amplitudes</li><li>No-cloning theorem: qubits cannot be copied</li><li>Measurement destroys superposition</li><li>Entanglement: non-classical correlations</li></ul></div></div><div class=\"slide-item\" id=\"slu1t3-3\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">4/5</span><h2>Physical Realisations</h2><ul><li>Superconducting circuits (IBM, Google)</li><li>Trapped ions (IonQ, Honeywell)</li><li>Photonic qubits</li><li>Nitrogen-vacancy centres in diamond</li></ul></div></div><div class=\"slide-item\" id=\"slu1t3-4\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">5/5</span><h2>No-Cloning Theorem</h2><ul><li>Impossible to perfectly copy unknown quantum state</li><li>Consequence of linearity of QM</li><li>Enables quantum cryptography security</li><li>Distinguishes quantum from classical information</li></ul></div></div></div>\n  <div class=\"slide-nav\">\n    <button id=\"sprevu1t3\" onclick=\"slidePrev('u1t3')\" disabled=\"None\">← Prev</button>\n    <span class=\"slide-counter\" id=\"scntu1t3\">1 / 5</span>\n    <button id=\"snextu1t3\" onclick=\"slideNext('u1t3')\">Next →</button>\n  </div>\n</div></div>",
        "transcript": "Welcome to Unit 1, Topic 3: Qubits versus Classical Bits. A classical bit is either 0 or 1—like a light switch, up or down. A qubit is richer: it can be in a quantum superposition, alpha times zero-ket plus beta times one-ket, where alpha and beta are complex numbers whose squares sum to one. This superposition is not the qubit being both 0 and 1 simultaneously in a naive sense—it is a quantum state that gives probabilistic outcomes upon measurement. Measuring a qubit collapses the superposition: you get 0 with probability alpha-squared, or 1 with probability beta-squared. The measurement is irreversible and probabilistic. A crucial difference from classical bits: the No-Cloning Theorem proves that an unknown quantum state cannot be perfectly copied. This has profound implications for quantum cryptography and error correction. Physically, qubits are realized using ion traps, superconducting circuits at millikelvin temperatures, photons, or nitrogen-vacancy centres in diamond. n qubits together can represent 2-to-the-n amplitudes simultaneously—this is the source of quantum parallelism. A 50-qubit system has more possible states than a classical computer could enumerate in the lifetime of the universe.",
        "sim": "<div class=\"sim-wrap\"><h3>🔬 Interactive Simulation</h3>\n<div class=\"sim-output\" style=\"padding:30px;text-align:center\">\n<div style=\"font-size:3rem;margin-bottom:12px\">⚛️</div>\n<p style=\"color:#94a3b8;margin-bottom:14px\">Simulation for this topic</p>\n<p style=\"color:#94a3b8;font-size:.82rem\">Try the IBM Quantum Experience to run real quantum circuits:</p>\n<a href=\"https://quantum.ibm.com/\" target=\"_blank\" style=\"display:inline-block;margin-top:8px;background:#1d5fa4;color:#fff;padding:8px 18px;border-radius:7px;font-size:.82rem;text-decoration:none\">🔗 IBM Quantum</a>\n<a href=\"http://www.quantumplayground.net/\" target=\"_blank\" style=\"display:inline-block;margin-top:8px;margin-left:8px;background:#6d28d9;color:#fff;padding:8px 18px;border-radius:7px;font-size:.82rem;text-decoration:none\">🔗 Quantum Playground</a>\n</div></div></div>",
        "refs": "\n<div class=\"ref-section\">\n  <h4>📚 Textbooks</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computation and Quantum Information</div>\n    <div class=\"ref-auth\">M. A. Nielsen & I. L. Chuang — Cambridge University Press</div>\n    <a class=\"ref-link\" href=\"https://www.cambridge.org/core/books/quantum-computation-and-quantum-information/01E10196D0A682A6AEFFEA52D53BE9AE\" target=\"_blank\">🔗 Publisher</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computer Science: An Introduction</div>\n    <div class=\"ref-auth\">N. David Mermin — Cambridge University Press</div>\n    <a class=\"ref-link\" href=\"https://www.cambridge.org/core/books/quantum-computer-science/66462590D10C8010017CF1D7C45708D7\" target=\"_blank\">🔗 Publisher</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">An Introduction to Quantum Computing</div>\n    <div class=\"ref-auth\">Kaye, Laflamme & Mosca — Oxford University Press</div>\n    <a class=\"ref-link\" href=\"https://global.oup.com/academic/product/an-introduction-to-quantum-computing-9780198570493\" target=\"_blank\">🔗 Publisher</a></div>\n</div>\n<div class=\"ref-section\">\n  <h4>📖 Reference Books</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing</div>\n    <div class=\"ref-auth\">V. Sahni — Tata McGraw-Hill</div></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing: A Gentle Introduction</div>\n    <div class=\"ref-auth\">E. Rieffel & W. Polak — MIT Press</div>\n    <a class=\"ref-link\" href=\"https://mitpress.mit.edu/9780262526678/\" target=\"_blank\">🔗 MIT Press</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Lecture Notes on Quantum Computation</div>\n    <div class=\"ref-auth\">John Preskill — Caltech (Free Online)</div>\n    <a class=\"ref-link\" href=\"http://www.theory.caltech.edu/~preskill/ph229/\" target=\"_blank\">🔗 Caltech</a></div>\n</div>\n<div class=\"ref-section\">\n  <h4>🌐 Online Resources</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">IBM Quantum Learning</div>\n    <a class=\"ref-link\" href=\"https://learning.quantum.ibm.com/\" target=\"_blank\">🔗 learning.quantum.ibm.com</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Qiskit Textbook</div>\n    <a class=\"ref-link\" href=\"https://qiskit.org/learn\" target=\"_blank\">🔗 qiskit.org/learn</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing Playground (Google)</div>\n    <a class=\"ref-link\" href=\"http://www.quantumplayground.net/\" target=\"_blank\">🔗 quantumplayground.net</a></div>\n</div></div>"
      },
      {
        "topic_id": "u1t4",
        "title": "Mathematical Preliminaries",
        "raw_title": "Mathematical Preliminaries",
        "slides": "\n<div class=\"slide-deck\">\n  <div id=\"sdecku1t4\"><div class=\"slide-item\" id=\"slu1t4-0\" style=\"display:block\"><div class=\"slide-container\"><span class=\"slide-num\">1/5</span><h2>Bra-Ket Notation</h2><div class=\"math-s\">|0⟩ = (1,0)ᵀ  |1⟩ = (0,1)ᵀ</div><div class=\"math-s\">⟨ψ| = (|ψ⟩)† = conjugate transpose</div></div></div><div class=\"slide-item\" id=\"slu1t4-1\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">2/5</span><h2>Inner & Outer Products</h2><div class=\"math-s\">Inner: ⟨φ|ψ⟩ ∈ ℂ (scalar)</div><div class=\"math-s\">Outer: |ψ⟩⟨φ| (matrix/operator)</div><p>|⟨φ|ψ⟩|² = transition probability</p></div></div><div class=\"slide-item\" id=\"slu1t4-2\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">3/5</span><h2>Quantum Gates as Matrices</h2><div class=\"math-s\">X=(0,1;1,0)  Z=(1,0;0,-1)</div><div class=\"math-s\">H = (1/√2)(1,1;1,-1)</div><p>All gates: unitary — U†U = I</p></div></div><div class=\"slide-item\" id=\"slu1t4-3\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">4/5</span><h2>Tensor Products</h2><div class=\"math-s\">|00⟩ = |0⟩⊗|0⟩ = (1,0,0,0)ᵀ</div><div class=\"math-s\">dim(ℋ₁⊗ℋ₂) = 4, n qubits → 2ⁿ</div></div></div><div class=\"slide-item\" id=\"slu1t4-4\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">5/5</span><h2>Summary</h2><ul><li>Kets = column vectors (states)</li><li>Bras = row vectors (dual states)</li><li>Inner product = probability amplitude</li><li>Tensor product = multi-qubit composition</li></ul></div></div></div>\n  <div class=\"slide-nav\">\n    <button id=\"sprevu1t4\" onclick=\"slidePrev('u1t4')\" disabled=\"None\">← Prev</button>\n    <span class=\"slide-counter\" id=\"scntu1t4\">1 / 5</span>\n    <button id=\"snextu1t4\" onclick=\"slideNext('u1t4')\">Next →</button>\n  </div>\n</div></div>",
        "transcript": "Welcome to Unit 1, Topic 4: Mathematical Preliminaries. To work with quantum systems, we need a powerful mathematical language. Paul Dirac introduced bra-ket notation: a ket, denoted vertical bar psi right-angle-bracket, is a column vector representing a quantum state. A bra, left-angle-bracket psi vertical bar, is its conjugate transpose—a row vector. The computational basis kets, zero-ket and one-ket, are column vectors with entries 1,0 and 0,1 respectively. The inner product of two states gives a complex scalar—the probability amplitude for transitioning between them. The modulus squared gives the probability. The outer product creates a matrix operator—projection operators are built this way. Quantum gates are unitary matrices, satisfying U-dagger times U equals the identity. This guarantees reversibility and preserves normalization. The Hadamard gate creates superposition; Pauli matrices X, Y, Z implement quantum NOT and phase operations. For multi-qubit systems, we use the tensor product. Two single-qubit Hilbert spaces combine to a 4-dimensional space. n qubits live in a 2-to-the-n dimensional Hilbert space. This exponential scaling of the state space is what makes quantum computers potentially so powerful for certain problems.",
        "sim": "<div class=\"sim-wrap\"><h3>🔬 Interactive Simulation</h3>\n<div class=\"sim-output\" style=\"padding:30px;text-align:center\">\n<div style=\"font-size:3rem;margin-bottom:12px\">⚛️</div>\n<p style=\"color:#94a3b8;margin-bottom:14px\">Simulation for this topic</p>\n<p style=\"color:#94a3b8;font-size:.82rem\">Try the IBM Quantum Experience to run real quantum circuits:</p>\n<a href=\"https://quantum.ibm.com/\" target=\"_blank\" style=\"display:inline-block;margin-top:8px;background:#1d5fa4;color:#fff;padding:8px 18px;border-radius:7px;font-size:.82rem;text-decoration:none\">🔗 IBM Quantum</a>\n<a href=\"http://www.quantumplayground.net/\" target=\"_blank\" style=\"display:inline-block;margin-top:8px;margin-left:8px;background:#6d28d9;color:#fff;padding:8px 18px;border-radius:7px;font-size:.82rem;text-decoration:none\">🔗 Quantum Playground</a>\n</div></div></div>",
        "refs": "\n<div class=\"ref-section\">\n  <h4>📚 Textbooks</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computation and Quantum Information</div>\n    <div class=\"ref-auth\">M. A. Nielsen & I. L. Chuang — Cambridge University Press</div>\n    <a class=\"ref-link\" href=\"https://www.cambridge.org/core/books/quantum-computation-and-quantum-information/01E10196D0A682A6AEFFEA52D53BE9AE\" target=\"_blank\">🔗 Publisher</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computer Science: An Introduction</div>\n    <div class=\"ref-auth\">N. David Mermin — Cambridge University Press</div>\n    <a class=\"ref-link\" href=\"https://www.cambridge.org/core/books/quantum-computer-science/66462590D10C8010017CF1D7C45708D7\" target=\"_blank\">🔗 Publisher</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">An Introduction to Quantum Computing</div>\n    <div class=\"ref-auth\">Kaye, Laflamme & Mosca — Oxford University Press</div>\n    <a class=\"ref-link\" href=\"https://global.oup.com/academic/product/an-introduction-to-quantum-computing-9780198570493\" target=\"_blank\">🔗 Publisher</a></div>\n</div>\n<div class=\"ref-section\">\n  <h4>📖 Reference Books</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing</div>\n    <div class=\"ref-auth\">V. Sahni — Tata McGraw-Hill</div></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing: A Gentle Introduction</div>\n    <div class=\"ref-auth\">E. Rieffel & W. Polak — MIT Press</div>\n    <a class=\"ref-link\" href=\"https://mitpress.mit.edu/9780262526678/\" target=\"_blank\">🔗 MIT Press</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Lecture Notes on Quantum Computation</div>\n    <div class=\"ref-auth\">John Preskill — Caltech (Free Online)</div>\n    <a class=\"ref-link\" href=\"http://www.theory.caltech.edu/~preskill/ph229/\" target=\"_blank\">🔗 Caltech</a></div>\n</div>\n<div class=\"ref-section\">\n  <h4>🌐 Online Resources</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">IBM Quantum Learning</div>\n    <a class=\"ref-link\" href=\"https://learning.quantum.ibm.com/\" target=\"_blank\">🔗 learning.quantum.ibm.com</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Qiskit Textbook</div>\n    <a class=\"ref-link\" href=\"https://qiskit.org/learn\" target=\"_blank\">🔗 qiskit.org/learn</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing Playground (Google)</div>\n    <a class=\"ref-link\" href=\"http://www.quantumplayground.net/\" target=\"_blank\">🔗 quantumplayground.net</a></div>\n</div></div>"
      }
    ]
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
  ,
    subtopics: [
      {
        "topic_id": "u2t1",
        "title": "Qubit States and Representation",
        "raw_title": "Qubit States and Representation",
        "slides": "\n<div class=\"slide-deck\">\n  <div id=\"sdecku2t1\"><div class=\"slide-item\" id=\"slu2t1-0\" style=\"display:block\"><div class=\"slide-container\"><span class=\"slide-num\">1/5</span><h2>Hilbert Space & ℂ²</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Hilbert Space & ℂ²</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu2t1-1\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">2/5</span><h2>Bloch Sphere</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Bloch Sphere</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu2t1-2\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">3/5</span><h2>Parameterisation</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Parameterisation</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu2t1-3\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">4/5</span><h2>Pure vs Mixed States</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Pure vs Mixed States</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu2t1-4\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">5/5</span><h2>Summary</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Summary</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div></div>\n  <div class=\"slide-nav\">\n    <button id=\"sprevu2t1\" onclick=\"slidePrev('u2t1')\" disabled=\"None\">← Prev</button>\n    <span class=\"slide-counter\" id=\"scntu2t1\">1 / 5</span>\n    <button id=\"snextu2t1\" onclick=\"slideNext('u2t1')\">Next →</button>\n  </div>\n</div></div>",
        "transcript": "Welcome to Unit 2, Topic 1: Qubit States and Representation. A single qubit lives in the two-dimensional complex Hilbert space, C-squared. Any normalized vector in this space is a valid qubit state. Using the global phase freedom—since multiplying the whole state by e-to-the-i-phi gives the same physics—we can parameterize any pure qubit state with just two real numbers: theta, the polar angle, and phi, the azimuthal angle. This gives us the Bloch sphere representation: every pure qubit state maps uniquely to a point on the unit sphere. The north pole is zero-ket; the south pole is one-ket; equatorial points are equal superpositions. The real advantage of this representation is that single-qubit gates correspond to rotations of the Bloch sphere. The Hadamard gate rotates the state such that zero-ket maps to the plus-ket on the equator. Understanding the geometry of the Bloch sphere gives intuition for how quantum gates manipulate qubit states, and why some sequences of gates cancel each other out.",
        "sim": "\n<div class=\"sim-wrap\"><h3>🔮 Bloch Sphere Explorer</h3>\n<div class=\"sim-controls\">\n  <label>θ (polar) <input type=\"range\" id=\"sth_u2t1\" min=\"0\" max=\"180\" value=\"45\" oninput=\"updateBloch()\"><span id=\"thv\">45°</span></label>\n  <label>φ (azimuthal) <input type=\"range\" id=\"sph_u2t1\" min=\"0\" max=\"360\" value=\"0\" oninput=\"updateBloch()\"><span id=\"phv\">0°</span></label>\n</div>\n<div class=\"sim-output\">\n<svg id=\"blochSvg\" viewbox=\"0 0 300 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"260\" height=\"260\">\n<rect width=\"300\" height=\"300\" fill=\"#1e2433\" rx=\"8\"></rect>\n<ellipse cx=\"150\" cy=\"150\" rx=\"100\" ry=\"100\" fill=\"none\" stroke=\"#2d3748\" stroke-width=\"1.5\"></ellipse>\n<ellipse cx=\"150\" cy=\"150\" rx=\"100\" ry=\"30\" fill=\"none\" stroke=\"#2d3748\" stroke-width=\"1\" stroke-dasharray=\"4,3\"></ellipse>\n<line x1=\"150\" y1=\"50\" x2=\"150\" y2=\"250\" stroke=\"#374151\" stroke-width=\"1\"></line>\n<line x1=\"50\" y1=\"150\" x2=\"250\" y2=\"150\" stroke=\"#374151\" stroke-width=\"1\"></line>\n<text x=\"150\" y=\"38\" text-anchor=\"middle\" fill=\"#10b981\" font-size=\"13\" font-weight=\"bold\">|0⟩</text>\n<text x=\"150\" y=\"268\" text-anchor=\"middle\" fill=\"#ef4444\" font-size=\"13\" font-weight=\"bold\">|1⟩</text>\n<text x=\"256\" y=\"154\" fill=\"#f59e0b\" font-size=\"11\">|+⟩</text>\n<text x=\"28\" y=\"154\" fill=\"#7c3aed\" font-size=\"11\">|−⟩</text>\n<line id=\"bvec\" x1=\"150\" y1=\"150\" x2=\"220\" y2=\"80\" stroke=\"#00d4ff\" stroke-width=\"2.5\"></line>\n<circle id=\"bpt\" cx=\"220\" cy=\"80\" r=\"6\" fill=\"#00d4ff\"></circle>\n<text id=\"blbl\" x=\"228\" y=\"76\" fill=\"#00d4ff\" font-size=\"11\">|ψ⟩</text>\n</svg></div>\n<div class=\"sim-info\" id=\"binfo\">State: cos(22.5°)|0⟩ + sin(22.5°)|1⟩</div></div>\n<script>\nfunction updateBloch(){\n  var th=parseFloat(document.getElementById('sth_u2t1').value)*Math.PI/180;\n  var ph=parseFloat(document.getElementById('sph_u2t1').value)*Math.PI/180;\n  document.getElementById('thv').textContent=Math.round(th*180/Math.PI)+'°';\n  document.getElementById('phv').textContent=Math.round(ph*180/Math.PI)+'°';\n  var r=95;var cx=150,cy=150;\n  var x3=Math.sin(th)*Math.cos(ph);var y3=Math.sin(th)*Math.sin(ph);var z3=Math.cos(th);\n  var sx=cx+r*(x3*0.7-y3*0.4);var sy=cy-r*(z3*0.85-y3*0.25);\n  document.getElementById('bvec').setAttribute('x2',sx);document.getElementById('bvec').setAttribute('y2',sy);\n  document.getElementById('bpt').setAttribute('cx',sx);document.getElementById('bpt').setAttribute('cy',sy);\n  document.getElementById('blbl').setAttribute('x',sx+8);document.getElementById('blbl').setAttribute('y',sy+4);\n  var a=Math.round(th*180/Math.PI/2);\n  document.getElementById('binfo').innerHTML='|ψ⟩ = cos('+a+'°)|0⟩ + e<sup>i'+Math.round(ph*180/Math.PI)+'°</sup>sin('+a+'°)|1⟩ &nbsp;|&nbsp; P(0)='+Math.round(Math.cos(th/2)**2*100)+'% P(1)='+Math.round(Math.sin(th/2)**2*100)+'%';\n}\nupdateBloch();\n</script></div>",
        "refs": "\n<div class=\"ref-section\">\n  <h4>📚 Textbooks</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computation and Quantum Information</div>\n    <div class=\"ref-auth\">M. A. Nielsen & I. L. Chuang — Cambridge University Press</div>\n    <a class=\"ref-link\" href=\"https://www.cambridge.org/core/books/quantum-computation-and-quantum-information/01E10196D0A682A6AEFFEA52D53BE9AE\" target=\"_blank\">🔗 Publisher</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computer Science: An Introduction</div>\n    <div class=\"ref-auth\">N. David Mermin — Cambridge University Press</div>\n    <a class=\"ref-link\" href=\"https://www.cambridge.org/core/books/quantum-computer-science/66462590D10C8010017CF1D7C45708D7\" target=\"_blank\">🔗 Publisher</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">An Introduction to Quantum Computing</div>\n    <div class=\"ref-auth\">Kaye, Laflamme & Mosca — Oxford University Press</div>\n    <a class=\"ref-link\" href=\"https://global.oup.com/academic/product/an-introduction-to-quantum-computing-9780198570493\" target=\"_blank\">🔗 Publisher</a></div>\n</div>\n<div class=\"ref-section\">\n  <h4>📖 Reference Books</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing</div>\n    <div class=\"ref-auth\">V. Sahni — Tata McGraw-Hill</div></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing: A Gentle Introduction</div>\n    <div class=\"ref-auth\">E. Rieffel & W. Polak — MIT Press</div>\n    <a class=\"ref-link\" href=\"https://mitpress.mit.edu/9780262526678/\" target=\"_blank\">🔗 MIT Press</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Lecture Notes on Quantum Computation</div>\n    <div class=\"ref-auth\">John Preskill — Caltech (Free Online)</div>\n    <a class=\"ref-link\" href=\"http://www.theory.caltech.edu/~preskill/ph229/\" target=\"_blank\">🔗 Caltech</a></div>\n</div>\n<div class=\"ref-section\">\n  <h4>🌐 Online Resources</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">IBM Quantum Learning</div>\n    <a class=\"ref-link\" href=\"https://learning.quantum.ibm.com/\" target=\"_blank\">🔗 learning.quantum.ibm.com</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Qiskit Textbook</div>\n    <a class=\"ref-link\" href=\"https://qiskit.org/learn\" target=\"_blank\">🔗 qiskit.org/learn</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing Playground (Google)</div>\n    <a class=\"ref-link\" href=\"http://www.quantumplayground.net/\" target=\"_blank\">🔗 quantumplayground.net</a></div>\n</div></div>"
      },
      {
        "topic_id": "u2t2",
        "title": "Single-Qubit Measurement & Operations",
        "raw_title": "Single-Qubit Measurement & Operations",
        "slides": "\n<div class=\"slide-deck\">\n  <div id=\"sdecku2t2\"><div class=\"slide-item\" id=\"slu2t2-0\" style=\"display:block\"><div class=\"slide-container\"><span class=\"slide-num\">1/5</span><h2>Quantum Measurement</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Quantum Measurement</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu2t2-1\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">2/5</span><h2>Pauli Gates X,Y,Z</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Pauli Gates X,Y,Z</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu2t2-2\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">3/5</span><h2>Hadamard Gate H</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Hadamard Gate H</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu2t2-3\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">4/5</span><h2>Phase & Rotation Gates</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Phase & Rotation Gates</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu2t2-4\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">5/5</span><h2>Universal Operations</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Universal Operations</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div></div>\n  <div class=\"slide-nav\">\n    <button id=\"sprevu2t2\" onclick=\"slidePrev('u2t2')\" disabled=\"None\">← Prev</button>\n    <span class=\"slide-counter\" id=\"scntu2t2\">1 / 5</span>\n    <button id=\"snextu2t2\" onclick=\"slideNext('u2t2')\">Next →</button>\n  </div>\n</div></div>",
        "transcript": "Welcome to Unit 2, Topic 2: Single-Qubit Measurement and Operations. When we measure a qubit in the computational basis, we get a classical bit—0 or 1—with probabilities given by the squared amplitudes. The measurement is irreversible: superposition is destroyed. Quantum gates, in contrast, are reversible unitary operations. The three Pauli gates are fundamental: X is the quantum NOT, flipping zero to one and vice versa. Z is the phase flip, leaving zero unchanged but negating one. Y combines both effects. The Hadamard gate H maps the computational basis to the superposition basis and vice versa—it is its own inverse. Phase gates S and T introduce phase shifts of pi-over-2 and pi-over-4 to the one-component, important for achieving universality. Rotation gates Rx, Ry, Rz rotate the Bloch sphere about their respective axes by a specified angle. Together with CNOT, these single-qubit rotations form a universal gate set capable of implementing any quantum computation. The mathematical representation as unitary matrices allows us to compose gates by matrix multiplication, making circuit analysis tractable.",
        "sim": "<div class=\"sim-wrap\"><h3>🔬 Interactive Simulation</h3>\n<div class=\"sim-output\" style=\"padding:30px;text-align:center\">\n<div style=\"font-size:3rem;margin-bottom:12px\">⚛️</div>\n<p style=\"color:#94a3b8;margin-bottom:14px\">Simulation for this topic</p>\n<p style=\"color:#94a3b8;font-size:.82rem\">Try the IBM Quantum Experience to run real quantum circuits:</p>\n<a href=\"https://quantum.ibm.com/\" target=\"_blank\" style=\"display:inline-block;margin-top:8px;background:#1d5fa4;color:#fff;padding:8px 18px;border-radius:7px;font-size:.82rem;text-decoration:none\">🔗 IBM Quantum</a>\n<a href=\"http://www.quantumplayground.net/\" target=\"_blank\" style=\"display:inline-block;margin-top:8px;margin-left:8px;background:#6d28d9;color:#fff;padding:8px 18px;border-radius:7px;font-size:.82rem;text-decoration:none\">🔗 Quantum Playground</a>\n</div></div></div>",
        "refs": "\n<div class=\"ref-section\">\n  <h4>📚 Textbooks</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computation and Quantum Information</div>\n    <div class=\"ref-auth\">M. A. Nielsen & I. L. Chuang — Cambridge University Press</div>\n    <a class=\"ref-link\" href=\"https://www.cambridge.org/core/books/quantum-computation-and-quantum-information/01E10196D0A682A6AEFFEA52D53BE9AE\" target=\"_blank\">🔗 Publisher</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computer Science: An Introduction</div>\n    <div class=\"ref-auth\">N. David Mermin — Cambridge University Press</div>\n    <a class=\"ref-link\" href=\"https://www.cambridge.org/core/books/quantum-computer-science/66462590D10C8010017CF1D7C45708D7\" target=\"_blank\">🔗 Publisher</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">An Introduction to Quantum Computing</div>\n    <div class=\"ref-auth\">Kaye, Laflamme & Mosca — Oxford University Press</div>\n    <a class=\"ref-link\" href=\"https://global.oup.com/academic/product/an-introduction-to-quantum-computing-9780198570493\" target=\"_blank\">🔗 Publisher</a></div>\n</div>\n<div class=\"ref-section\">\n  <h4>📖 Reference Books</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing</div>\n    <div class=\"ref-auth\">V. Sahni — Tata McGraw-Hill</div></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing: A Gentle Introduction</div>\n    <div class=\"ref-auth\">E. Rieffel & W. Polak — MIT Press</div>\n    <a class=\"ref-link\" href=\"https://mitpress.mit.edu/9780262526678/\" target=\"_blank\">🔗 MIT Press</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Lecture Notes on Quantum Computation</div>\n    <div class=\"ref-auth\">John Preskill — Caltech (Free Online)</div>\n    <a class=\"ref-link\" href=\"http://www.theory.caltech.edu/~preskill/ph229/\" target=\"_blank\">🔗 Caltech</a></div>\n</div>\n<div class=\"ref-section\">\n  <h4>🌐 Online Resources</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">IBM Quantum Learning</div>\n    <a class=\"ref-link\" href=\"https://learning.quantum.ibm.com/\" target=\"_blank\">🔗 learning.quantum.ibm.com</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Qiskit Textbook</div>\n    <a class=\"ref-link\" href=\"https://qiskit.org/learn\" target=\"_blank\">🔗 qiskit.org/learn</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing Playground (Google)</div>\n    <a class=\"ref-link\" href=\"http://www.quantumplayground.net/\" target=\"_blank\">🔗 quantumplayground.net</a></div>\n</div></div>"
      }
    ]
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
  ,
    subtopics: [
      {
        "topic_id": "u3t1",
        "title": "Two-Qubit Systems",
        "raw_title": "Two-Qubit Systems",
        "slides": "\n<div class=\"slide-deck\">\n  <div id=\"sdecku3t1\"><div class=\"slide-item\" id=\"slu3t1-0\" style=\"display:block\"><div class=\"slide-container\"><span class=\"slide-num\">1/5</span><h2>Two-Qubit Space ℂ⁴</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Two-Qubit Space ℂ⁴</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu3t1-1\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">2/5</span><h2>Two-Qubit States</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Two-Qubit States</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu3t1-2\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">3/5</span><h2>Tensor Products</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Tensor Products</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu3t1-3\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">4/5</span><h2>CNOT Gate</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>CNOT Gate</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu3t1-4\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">5/5</span><h2>Quantum Circuits</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Quantum Circuits</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div></div>\n  <div class=\"slide-nav\">\n    <button id=\"sprevu3t1\" onclick=\"slidePrev('u3t1')\" disabled=\"None\">← Prev</button>\n    <span class=\"slide-counter\" id=\"scntu3t1\">1 / 5</span>\n    <button id=\"snextu3t1\" onclick=\"slideNext('u3t1')\">Next →</button>\n  </div>\n</div></div>",
        "transcript": "Welcome to Unit 3, Topic 1: Two-Qubit Systems. When we have two qubits, they live in a 4-dimensional Hilbert space—the tensor product of two C-squared spaces. The computational basis consists of the four states: zero-zero, zero-one, one-zero, and one-one. A general two-qubit state is a superposition of all four basis states, with complex amplitudes that must normalize to one. Operations on two-qubit systems are 4-by-4 unitary matrices. The most important two-qubit gate is the CNOT—Controlled-NOT. It has one control qubit and one target qubit. If the control is zero, the target is unchanged. If the control is one, the target is flipped. The CNOT truth table is: zero-zero stays zero-zero; zero-one stays zero-one; one-zero becomes one-one; one-one becomes one-zero. To apply a single-qubit gate U to only one qubit in a two-qubit system, we use the tensor product: U tensor I applies U to the first qubit and leaves the second alone. The CNOT gate, combined with the Hadamard gate, is sufficient to create entanglement—one of the most powerful resources in quantum computing.",
        "sim": "<div class=\"sim-wrap\"><h3>🔬 Interactive Simulation</h3>\n<div class=\"sim-output\" style=\"padding:30px;text-align:center\">\n<div style=\"font-size:3rem;margin-bottom:12px\">⚛️</div>\n<p style=\"color:#94a3b8;margin-bottom:14px\">Simulation for this topic</p>\n<p style=\"color:#94a3b8;font-size:.82rem\">Try the IBM Quantum Experience to run real quantum circuits:</p>\n<a href=\"https://quantum.ibm.com/\" target=\"_blank\" style=\"display:inline-block;margin-top:8px;background:#1d5fa4;color:#fff;padding:8px 18px;border-radius:7px;font-size:.82rem;text-decoration:none\">🔗 IBM Quantum</a>\n<a href=\"http://www.quantumplayground.net/\" target=\"_blank\" style=\"display:inline-block;margin-top:8px;margin-left:8px;background:#6d28d9;color:#fff;padding:8px 18px;border-radius:7px;font-size:.82rem;text-decoration:none\">🔗 Quantum Playground</a>\n</div></div></div>",
        "refs": "\n<div class=\"ref-section\">\n  <h4>📚 Textbooks</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computation and Quantum Information</div>\n    <div class=\"ref-auth\">M. A. Nielsen & I. L. Chuang — Cambridge University Press</div>\n    <a class=\"ref-link\" href=\"https://www.cambridge.org/core/books/quantum-computation-and-quantum-information/01E10196D0A682A6AEFFEA52D53BE9AE\" target=\"_blank\">🔗 Publisher</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computer Science: An Introduction</div>\n    <div class=\"ref-auth\">N. David Mermin — Cambridge University Press</div>\n    <a class=\"ref-link\" href=\"https://www.cambridge.org/core/books/quantum-computer-science/66462590D10C8010017CF1D7C45708D7\" target=\"_blank\">🔗 Publisher</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">An Introduction to Quantum Computing</div>\n    <div class=\"ref-auth\">Kaye, Laflamme & Mosca — Oxford University Press</div>\n    <a class=\"ref-link\" href=\"https://global.oup.com/academic/product/an-introduction-to-quantum-computing-9780198570493\" target=\"_blank\">🔗 Publisher</a></div>\n</div>\n<div class=\"ref-section\">\n  <h4>📖 Reference Books</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing</div>\n    <div class=\"ref-auth\">V. Sahni — Tata McGraw-Hill</div></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing: A Gentle Introduction</div>\n    <div class=\"ref-auth\">E. Rieffel & W. Polak — MIT Press</div>\n    <a class=\"ref-link\" href=\"https://mitpress.mit.edu/9780262526678/\" target=\"_blank\">🔗 MIT Press</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Lecture Notes on Quantum Computation</div>\n    <div class=\"ref-auth\">John Preskill — Caltech (Free Online)</div>\n    <a class=\"ref-link\" href=\"http://www.theory.caltech.edu/~preskill/ph229/\" target=\"_blank\">🔗 Caltech</a></div>\n</div>\n<div class=\"ref-section\">\n  <h4>🌐 Online Resources</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">IBM Quantum Learning</div>\n    <a class=\"ref-link\" href=\"https://learning.quantum.ibm.com/\" target=\"_blank\">🔗 learning.quantum.ibm.com</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Qiskit Textbook</div>\n    <a class=\"ref-link\" href=\"https://qiskit.org/learn\" target=\"_blank\">🔗 qiskit.org/learn</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing Playground (Google)</div>\n    <a class=\"ref-link\" href=\"http://www.quantumplayground.net/\" target=\"_blank\">🔗 quantumplayground.net</a></div>\n</div></div>"
      },
      {
        "topic_id": "u3t2",
        "title": "Entangled States",
        "raw_title": "Entangled States",
        "slides": "\n<div class=\"slide-deck\">\n  <div id=\"sdecku3t2\"><div class=\"slide-item\" id=\"slu3t2-0\" style=\"display:block\"><div class=\"slide-container\"><span class=\"slide-num\">1/5</span><h2>What is Entanglement?</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>What is Entanglement?</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu3t2-1\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">2/5</span><h2>Bell States</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Bell States</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu3t2-2\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">3/5</span><h2>Preparing |Φ⁺⟩</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Preparing |Φ⁺⟩</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu3t2-3\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">4/5</span><h2>Non-locality</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Non-locality</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu3t2-4\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">5/5</span><h2>Applications of Entanglement</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Applications of Entanglement</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div></div>\n  <div class=\"slide-nav\">\n    <button id=\"sprevu3t2\" onclick=\"slidePrev('u3t2')\" disabled=\"None\">← Prev</button>\n    <span class=\"slide-counter\" id=\"scntu3t2\">1 / 5</span>\n    <button id=\"snextu3t2\" onclick=\"slideNext('u3t2')\">Next →</button>\n  </div>\n</div></div>",
        "transcript": "Welcome to Unit 3, Topic 2: Entangled States. Entanglement is arguably the most counterintuitive and most powerful feature of quantum mechanics. A two-qubit state is entangled if it cannot be written as a product of two individual qubit states. The four Bell states are the maximally entangled two-qubit states. Phi-plus is one-over-root-two times (zero-zero plus one-one), and Phi-minus is one-over-root-two times (zero-zero minus one-one). Similarly for Psi-plus and Psi-minus. These four states form a complete orthonormal basis for the two-qubit Hilbert space. To prepare Phi-plus from the zero-zero state: apply Hadamard to the first qubit, then CNOT. After Hadamard, the first qubit is in equal superposition. The CNOT then creates the correlation: if qubit one is zero, qubit two stays zero; if qubit one is one, qubit two flips to one. The result is Phi-plus. When we measure one qubit of an entangled Bell pair, we instantly know what the other will measure—even across arbitrary distances. This non-local correlation is what Bell's theorem exploits, and it forms the foundation of quantum teleportation and superdense coding.",
        "sim": "\n<div class=\"sim-wrap\"><h3>🔗 Bell State Visualizer</h3>\n<div class=\"sim-controls\">\n  <label>Bell State: <select id=\"bsel_u3t2\" onchange=\"updateBell()\" style=\"padding:5px 8px;border-radius:6px;border:1px solid var(--border);font-size:.82rem\">\n    <option value=\"0\">|Φ⁺⟩ = (|00⟩+|11⟩)/√2</option>\n    <option value=\"1\">|Φ⁻⟩ = (|00⟩−|11⟩)/√2</option>\n    <option value=\"2\">|Ψ⁺⟩ = (|01⟩+|10⟩)/√2</option>\n    <option value=\"3\">|Ψ⁻⟩ = (|01⟩−|10⟩)/√2</option>\n  </select></label>\n  <button class=\"sim-btn\" onclick=\"measureBell()\">⚡ Measure!</button>\n</div>\n<div class=\"sim-output\">\n<svg id=\"bellSvg\" viewbox=\"0 0 420 160\" xmlns=\"http://www.w3.org/2000/svg\" width=\"400\" height=\"160\">\n<rect width=\"420\" height=\"160\" fill=\"#1e2433\" rx=\"8\"></rect>\n<rect x=\"20\" y=\"40\" width=\"90\" height=\"80\" rx=\"8\" fill=\"#1d3557\" stroke=\"#00d4ff\" stroke-width=\"1.5\"></rect>\n<text x=\"65\" y=\"75\" text-anchor=\"middle\" fill=\"#00d4ff\" font-size=\"13\" font-weight=\"bold\">Alice</text>\n<text x=\"65\" y=\"95\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"11\" id=\"aliceState\">?</text>\n<rect x=\"310\" y=\"40\" width=\"90\" height=\"80\" rx=\"8\" fill=\"#1d3557\" stroke=\"#7c3aed\" stroke-width=\"1.5\"></rect>\n<text x=\"355\" y=\"75\" text-anchor=\"middle\" fill=\"#7c3aed\" font-size=\"13\" font-weight=\"bold\">Bob</text>\n<text x=\"355\" y=\"95\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"11\" id=\"bobState\">?</text>\n<line x1=\"110\" y1=\"80\" x2=\"310\" y2=\"80\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"5,3\"></line>\n<text x=\"210\" y=\"76\" text-anchor=\"middle\" fill=\"#f59e0b\" font-size=\"11\">entangled</text>\n<text x=\"210\" y=\"150\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"10\" id=\"bellResult\">Click Measure to collapse the Bell state</text>\n</svg></div>\n<div class=\"sim-info\" id=\"bsinfo\">Current: |Φ⁺⟩ — perfectly correlated in computational basis</div></div>\n<script>\nvar bellStates=[['|Φ⁺⟩','00','11','Measuring |Φ⁺⟩: Both qubits always give the SAME outcome.'],\n['|Φ⁻⟩','00','11','Measuring |Φ⁻⟩: Both qubits give the SAME outcome (phase difference invisible in comp. basis).'],\n['|Ψ⁺⟩','01','10','Measuring |Ψ⁺⟩: Qubits always give OPPOSITE outcomes.'],\n['|Ψ⁻⟩','01','10','Measuring |Ψ⁻⟩: Qubits always give OPPOSITE outcomes.']];\nfunction updateBell(){var s=parseInt(document.getElementById('bsel_u3t2').value);document.getElementById('aliceState').textContent='?';document.getElementById('bobState').textContent='?';document.getElementById('bellResult').textContent='Click Measure to collapse the Bell state';document.getElementById('bsinfo').textContent='Current: '+bellStates[s][0];}\nfunction measureBell(){var s=parseInt(document.getElementById('bsel_u3t2').value);var bs=bellStates[s];var choice=Math.random()<0.5?0:1;var a=bs[1+choice][0];var b=bs[1+choice][1];document.getElementById('aliceState').textContent='|'+a+'⟩';document.getElementById('bobState').textContent='|'+b+'⟩';document.getElementById('bellResult').textContent=bs[3];}\nupdateBell();\n</script></div>",
        "refs": "\n<div class=\"ref-section\">\n  <h4>📚 Textbooks</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computation and Quantum Information</div>\n    <div class=\"ref-auth\">M. A. Nielsen & I. L. Chuang — Cambridge University Press</div>\n    <a class=\"ref-link\" href=\"https://www.cambridge.org/core/books/quantum-computation-and-quantum-information/01E10196D0A682A6AEFFEA52D53BE9AE\" target=\"_blank\">🔗 Publisher</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computer Science: An Introduction</div>\n    <div class=\"ref-auth\">N. David Mermin — Cambridge University Press</div>\n    <a class=\"ref-link\" href=\"https://www.cambridge.org/core/books/quantum-computer-science/66462590D10C8010017CF1D7C45708D7\" target=\"_blank\">🔗 Publisher</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">An Introduction to Quantum Computing</div>\n    <div class=\"ref-auth\">Kaye, Laflamme & Mosca — Oxford University Press</div>\n    <a class=\"ref-link\" href=\"https://global.oup.com/academic/product/an-introduction-to-quantum-computing-9780198570493\" target=\"_blank\">🔗 Publisher</a></div>\n</div>\n<div class=\"ref-section\">\n  <h4>📖 Reference Books</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing</div>\n    <div class=\"ref-auth\">V. Sahni — Tata McGraw-Hill</div></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing: A Gentle Introduction</div>\n    <div class=\"ref-auth\">E. Rieffel & W. Polak — MIT Press</div>\n    <a class=\"ref-link\" href=\"https://mitpress.mit.edu/9780262526678/\" target=\"_blank\">🔗 MIT Press</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Lecture Notes on Quantum Computation</div>\n    <div class=\"ref-auth\">John Preskill — Caltech (Free Online)</div>\n    <a class=\"ref-link\" href=\"http://www.theory.caltech.edu/~preskill/ph229/\" target=\"_blank\">🔗 Caltech</a></div>\n</div>\n<div class=\"ref-section\">\n  <h4>🌐 Online Resources</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">IBM Quantum Learning</div>\n    <a class=\"ref-link\" href=\"https://learning.quantum.ibm.com/\" target=\"_blank\">🔗 learning.quantum.ibm.com</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Qiskit Textbook</div>\n    <a class=\"ref-link\" href=\"https://qiskit.org/learn\" target=\"_blank\">🔗 qiskit.org/learn</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing Playground (Google)</div>\n    <a class=\"ref-link\" href=\"http://www.quantumplayground.net/\" target=\"_blank\">🔗 quantumplayground.net</a></div>\n</div></div>"
      }
    ]
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
  ,
    subtopics: [
      {
        "topic_id": "u4t1",
        "title": "Quantum Measurement Formalism",
        "raw_title": "Quantum Measurement Formalism",
        "slides": "\n<div class=\"slide-deck\">\n  <div id=\"sdecku4t1\"><div class=\"slide-item\" id=\"slu4t1-0\" style=\"display:block\"><div class=\"slide-container\"><span class=\"slide-num\">1/5</span><h2>Projection Operators</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Projection Operators</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu4t1-1\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">2/5</span><h2>Born Rule Revisited</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Born Rule Revisited</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu4t1-2\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">3/5</span><h2>Hermitian Operators</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Hermitian Operators</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu4t1-3\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">4/5</span><h2>Expectation Values</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Expectation Values</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu4t1-4\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">5/5</span><h2>POVMs</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>POVMs</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div></div>\n  <div class=\"slide-nav\">\n    <button id=\"sprevu4t1\" onclick=\"slidePrev('u4t1')\" disabled=\"None\">← Prev</button>\n    <span class=\"slide-counter\" id=\"scntu4t1\">1 / 5</span>\n    <button id=\"snextu4t1\" onclick=\"slideNext('u4t1')\">Next →</button>\n  </div>\n</div></div>",
        "transcript": "Welcome to Unit 4, Topic 1: Quantum Measurement Formalism. We have seen measurement as a probabilistic collapse. Now let us understand the mathematical framework. A projective measurement is described by a set of projection operators—each corresponding to one possible outcome. A projection operator P-k equals the outer product of the k-th basis ket with itself. Projection operators are Hermitian and idempotent: P-k squared equals P-k. They are complete: their sum equals the identity. The probability of outcome k when measuring state psi is: P(k) equals psi-bra times P-k times psi-ket. The post-measurement state is P-k applied to psi, divided by the square root of P(k) to renormalize. Every physical observable is represented by a Hermitian operator—one equal to its own conjugate transpose. The eigenvalues of a Hermitian operator are always real, so they can be measured values. Eigenvectors of distinct eigenvalues are orthogonal, providing a natural measurement basis. The expectation value—the average measurement outcome over many trials—equals psi-bra times O-hat times psi-ket. Quantum measurement is the only non-unitary step in quantum computation, converting quantum superpositions into classical bits of information.",
        "sim": "<div class=\"sim-wrap\"><h3>🔬 Interactive Simulation</h3>\n<div class=\"sim-output\" style=\"padding:30px;text-align:center\">\n<div style=\"font-size:3rem;margin-bottom:12px\">⚛️</div>\n<p style=\"color:#94a3b8;margin-bottom:14px\">Simulation for this topic</p>\n<p style=\"color:#94a3b8;font-size:.82rem\">Try the IBM Quantum Experience to run real quantum circuits:</p>\n<a href=\"https://quantum.ibm.com/\" target=\"_blank\" style=\"display:inline-block;margin-top:8px;background:#1d5fa4;color:#fff;padding:8px 18px;border-radius:7px;font-size:.82rem;text-decoration:none\">🔗 IBM Quantum</a>\n<a href=\"http://www.quantumplayground.net/\" target=\"_blank\" style=\"display:inline-block;margin-top:8px;margin-left:8px;background:#6d28d9;color:#fff;padding:8px 18px;border-radius:7px;font-size:.82rem;text-decoration:none\">🔗 Quantum Playground</a>\n</div></div></div>",
        "refs": "\n<div class=\"ref-section\">\n  <h4>📚 Textbooks</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computation and Quantum Information</div>\n    <div class=\"ref-auth\">M. A. Nielsen & I. L. Chuang — Cambridge University Press</div>\n    <a class=\"ref-link\" href=\"https://www.cambridge.org/core/books/quantum-computation-and-quantum-information/01E10196D0A682A6AEFFEA52D53BE9AE\" target=\"_blank\">🔗 Publisher</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computer Science: An Introduction</div>\n    <div class=\"ref-auth\">N. David Mermin — Cambridge University Press</div>\n    <a class=\"ref-link\" href=\"https://www.cambridge.org/core/books/quantum-computer-science/66462590D10C8010017CF1D7C45708D7\" target=\"_blank\">🔗 Publisher</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">An Introduction to Quantum Computing</div>\n    <div class=\"ref-auth\">Kaye, Laflamme & Mosca — Oxford University Press</div>\n    <a class=\"ref-link\" href=\"https://global.oup.com/academic/product/an-introduction-to-quantum-computing-9780198570493\" target=\"_blank\">🔗 Publisher</a></div>\n</div>\n<div class=\"ref-section\">\n  <h4>📖 Reference Books</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing</div>\n    <div class=\"ref-auth\">V. Sahni — Tata McGraw-Hill</div></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing: A Gentle Introduction</div>\n    <div class=\"ref-auth\">E. Rieffel & W. Polak — MIT Press</div>\n    <a class=\"ref-link\" href=\"https://mitpress.mit.edu/9780262526678/\" target=\"_blank\">🔗 MIT Press</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Lecture Notes on Quantum Computation</div>\n    <div class=\"ref-auth\">John Preskill — Caltech (Free Online)</div>\n    <a class=\"ref-link\" href=\"http://www.theory.caltech.edu/~preskill/ph229/\" target=\"_blank\">🔗 Caltech</a></div>\n</div>\n<div class=\"ref-section\">\n  <h4>🌐 Online Resources</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">IBM Quantum Learning</div>\n    <a class=\"ref-link\" href=\"https://learning.quantum.ibm.com/\" target=\"_blank\">🔗 learning.quantum.ibm.com</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Qiskit Textbook</div>\n    <a class=\"ref-link\" href=\"https://qiskit.org/learn\" target=\"_blank\">🔗 qiskit.org/learn</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing Playground (Google)</div>\n    <a class=\"ref-link\" href=\"http://www.quantumplayground.net/\" target=\"_blank\">🔗 quantumplayground.net</a></div>\n</div></div>"
      },
      {
        "topic_id": "u4t2",
        "title": "Quantum Non-locality and Bell's Theorem",
        "raw_title": "Quantum Non-locality and Bell's Theorem",
        "slides": "\n<div class=\"slide-deck\">\n  <div id=\"sdecku4t2\"><div class=\"slide-item\" id=\"slu4t2-0\" style=\"display:block\"><div class=\"slide-container\"><span class=\"slide-num\">1/5</span><h2>EPR Paradox</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>EPR Paradox</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu4t2-1\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">2/5</span><h2>Hidden Variable Theory</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Hidden Variable Theory</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu4t2-2\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">3/5</span><h2>Bell's Inequality</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Bell's Inequality</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu4t2-3\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">4/5</span><h2>CHSH Test</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>CHSH Test</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu4t2-4\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">5/5</span><h2>Nobel Prize 2022</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Nobel Prize 2022</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div></div>\n  <div class=\"slide-nav\">\n    <button id=\"sprevu4t2\" onclick=\"slidePrev('u4t2')\" disabled=\"None\">← Prev</button>\n    <span class=\"slide-counter\" id=\"scntu4t2\">1 / 5</span>\n    <button id=\"snextu4t2\" onclick=\"slideNext('u4t2')\">Next →</button>\n  </div>\n</div></div>",
        "transcript": "Welcome to Unit 4, Topic 2: Quantum Non-locality and Bell's Theorem. In 1935, Einstein, Podolsky, and Rosen published their famous paradox. They argued that if quantum mechanics is correct, measuring particle A instantly affects particle B, no matter how far apart they are. This seemed to violate locality—the principle that nothing can influence something else faster than light. EPR concluded that quantum mechanics must be incomplete: particles must have hidden definite values all along, not revealed until measurement. In 1964, John Bell proved this wrong mathematically. He derived an inequality—Bell's inequality—that any local hidden variable theory must satisfy. Quantum mechanics predicts that entangled particles violate this inequality. The CHSH version states: the quantity S, involving four correlation measurements at different angles, must satisfy S less than or equal to 2 for any local realistic theory. Quantum mechanics predicts S up to 2 root 2, approximately 2.83. Experiments by Alain Aspect in 1982, and loophole-free tests in 2015, consistently measured S greater than 2—ruling out all local hidden variable theories. The 2022 Nobel Prize in Physics honored these experiments. The conclusion: quantum correlations are genuinely non-local—they cannot be explained by any pre-existing hidden information.",
        "sim": "\n<div class=\"sim-wrap\"><h3>🔔 Bell/CHSH Inequality Simulator</h3>\n<div class=\"sim-controls\">\n  <label>Alice angle a (°)<input type=\"range\" id=\"ang_a\" min=\"0\" max=\"180\" value=\"0\" oninput=\"updateBellSim()\"><span id=\"av\">0°</span></label>\n  <label>Bob angle b (°)<input type=\"range\" id=\"ang_b\" min=\"0\" max=\"180\" value=\"45\" oninput=\"updateBellSim()\"><span id=\"bv\">45°</span></label>\n</div>\n<div class=\"sim-output\">\n<canvas id=\"bellCanvas\" width=\"560\" height=\"180\" style=\"background:#1e2433;border-radius:8px;width:100%\"></canvas>\n</div>\n<div class=\"sim-info\" id=\"bellInfo\">Quantum correlation E(0°,45°) = −cos(90°) = 0</div></div>\n<script>\nfunction updateBellSim(){\n  var a=parseFloat(document.getElementById('ang_a').value)*Math.PI/180;\n  var b=parseFloat(document.getElementById('ang_b').value)*Math.PI/180;\n  document.getElementById('av').textContent=Math.round(a*180/Math.PI)+'°';\n  document.getElementById('bv').textContent=Math.round(b*180/Math.PI)+'°';\n  var E=-Math.cos(2*(a-b));\n  var c=document.getElementById('bellCanvas');var ctx=c.getContext('2d');\n  ctx.clearRect(0,0,c.width,c.height);\n  ctx.strokeStyle='#374151';ctx.lineWidth=1;\n  ctx.beginPath();ctx.moveTo(40,90);ctx.lineTo(520,90);ctx.stroke();\n  ctx.beginPath();ctx.moveTo(40,10);ctx.lineTo(40,170);ctx.stroke();\n  ctx.fillStyle='#94a3b8';ctx.font='11px sans-serif';\n  ctx.fillText('E(a,b)',6,14);ctx.fillText('Δθ',525,93);\n  ctx.fillText('+1',12,94);ctx.fillText('−1',8,170);\n  ctx.strokeStyle='#00d4ff';ctx.lineWidth=2;ctx.beginPath();\n  for(var i=0;i<=480;i++){var t=i/480*2*Math.PI;var y=-Math.cos(t);ctx.lineTo(40+i,90-y*75);}ctx.stroke();\n  ctx.fillStyle='#f59e0b';ctx.font='bold 11px sans-serif';ctx.fillText('Classical bound: |E|≤1',50,25);\n  ctx.strokeStyle='#f59e0b';ctx.lineWidth=1;ctx.setLineDash([4,3]);\n  ctx.beginPath();ctx.moveTo(40,15);ctx.lineTo(520,15);ctx.stroke();\n  ctx.beginPath();ctx.moveTo(40,165);ctx.lineTo(520,165);ctx.stroke();ctx.setLineDash([]);\n  var xp=40+(a-b+Math.PI)%Math.PI/Math.PI*480*2;if(xp>520)xp=40;\n  ctx.fillStyle='#ef4444';ctx.beginPath();ctx.arc(xp>520?520:xp,90-E*75,6,0,2*Math.PI);ctx.fill();\n  document.getElementById('bellInfo').innerHTML='Quantum correlation E('+Math.round(a*180/Math.PI)+'°,'+Math.round(b*180/Math.PI)+'°) = −cos(2Δθ) = '+E.toFixed(3)+' &nbsp;|&nbsp; Violates |E|≤1 when |E|>1? '+(Math.abs(E)>1?'<strong style=\"color:red\">Yes</strong>':'<strong style=\"color:green\">No</strong>');\n}\nupdateBellSim();\n</script></div>",
        "refs": "\n<div class=\"ref-section\">\n  <h4>📚 Textbooks</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computation and Quantum Information</div>\n    <div class=\"ref-auth\">M. A. Nielsen & I. L. Chuang — Cambridge University Press</div>\n    <a class=\"ref-link\" href=\"https://www.cambridge.org/core/books/quantum-computation-and-quantum-information/01E10196D0A682A6AEFFEA52D53BE9AE\" target=\"_blank\">🔗 Publisher</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computer Science: An Introduction</div>\n    <div class=\"ref-auth\">N. David Mermin — Cambridge University Press</div>\n    <a class=\"ref-link\" href=\"https://www.cambridge.org/core/books/quantum-computer-science/66462590D10C8010017CF1D7C45708D7\" target=\"_blank\">🔗 Publisher</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">An Introduction to Quantum Computing</div>\n    <div class=\"ref-auth\">Kaye, Laflamme & Mosca — Oxford University Press</div>\n    <a class=\"ref-link\" href=\"https://global.oup.com/academic/product/an-introduction-to-quantum-computing-9780198570493\" target=\"_blank\">🔗 Publisher</a></div>\n</div>\n<div class=\"ref-section\">\n  <h4>📖 Reference Books</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing</div>\n    <div class=\"ref-auth\">V. Sahni — Tata McGraw-Hill</div></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing: A Gentle Introduction</div>\n    <div class=\"ref-auth\">E. Rieffel & W. Polak — MIT Press</div>\n    <a class=\"ref-link\" href=\"https://mitpress.mit.edu/9780262526678/\" target=\"_blank\">🔗 MIT Press</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Lecture Notes on Quantum Computation</div>\n    <div class=\"ref-auth\">John Preskill — Caltech (Free Online)</div>\n    <a class=\"ref-link\" href=\"http://www.theory.caltech.edu/~preskill/ph229/\" target=\"_blank\">🔗 Caltech</a></div>\n</div>\n<div class=\"ref-section\">\n  <h4>🌐 Online Resources</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">IBM Quantum Learning</div>\n    <a class=\"ref-link\" href=\"https://learning.quantum.ibm.com/\" target=\"_blank\">🔗 learning.quantum.ibm.com</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Qiskit Textbook</div>\n    <a class=\"ref-link\" href=\"https://qiskit.org/learn\" target=\"_blank\">🔗 qiskit.org/learn</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing Playground (Google)</div>\n    <a class=\"ref-link\" href=\"http://www.quantumplayground.net/\" target=\"_blank\">🔗 quantumplayground.net</a></div>\n</div></div>"
      }
    ]
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
  ,
    subtopics: [
      {
        "topic_id": "u5t1",
        "title": "Introduction to Quantum Circuits",
        "raw_title": "Introduction to Quantum Circuits",
        "slides": "\n<div class=\"slide-deck\">\n  <div id=\"sdecku5t1\"><div class=\"slide-item\" id=\"slu5t1-0\" style=\"display:block\"><div class=\"slide-container\"><span class=\"slide-num\">1/5</span><h2>Circuit Notation</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Circuit Notation</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu5t1-1\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">2/5</span><h2>Circuit Elements</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Circuit Elements</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu5t1-2\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">3/5</span><h2>Classical vs Quantum</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Classical vs Quantum</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu5t1-3\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">4/5</span><h2>Circuit Analysis</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Circuit Analysis</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu5t1-4\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">5/5</span><h2>Example: Entanglement Circuit</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Example: Entanglement Circuit</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div></div>\n  <div class=\"slide-nav\">\n    <button id=\"sprevu5t1\" onclick=\"slidePrev('u5t1')\" disabled=\"None\">← Prev</button>\n    <span class=\"slide-counter\" id=\"scntu5t1\">1 / 5</span>\n    <button id=\"snextu5t1\" onclick=\"slideNext('u5t1')\">Next →</button>\n  </div>\n</div></div>",
        "transcript": "Welcome to Unit 5, Topic 1: Introduction to Quantum Circuits. Just as classical computers are built from logic gates arranged in circuits, quantum computers use quantum circuits—sequences of quantum gate operations on qubits. In a circuit diagram, each horizontal wire represents one qubit. Time flows from left to right. Gates appear as boxes or standard symbols on the wires. Measurement at the end extracts classical bits. The key difference from classical circuits: all quantum gates except measurement must be reversible—represented by unitary matrices. Classical gates like NAND are irreversible; quantum gates must be. Another difference: you cannot copy a qubit wire—the No-Cloning theorem forbids fan-out. To reset a qubit, you must perform a coherent erasure, called uncomputation. Quantum circuits can be analyzed by multiplying the gate matrices in sequence—the overall circuit is just a large unitary matrix applied to the initial state. The power of quantum circuits comes from the ability to create superpositions with Hadamard gates, entangle qubits with CNOT, and use quantum interference to amplify correct answers while suppressing wrong ones.",
        "sim": "<div class=\"sim-wrap\"><h3>🔬 Interactive Simulation</h3>\n<div class=\"sim-output\" style=\"padding:30px;text-align:center\">\n<div style=\"font-size:3rem;margin-bottom:12px\">⚛️</div>\n<p style=\"color:#94a3b8;margin-bottom:14px\">Simulation for this topic</p>\n<p style=\"color:#94a3b8;font-size:.82rem\">Try the IBM Quantum Experience to run real quantum circuits:</p>\n<a href=\"https://quantum.ibm.com/\" target=\"_blank\" style=\"display:inline-block;margin-top:8px;background:#1d5fa4;color:#fff;padding:8px 18px;border-radius:7px;font-size:.82rem;text-decoration:none\">🔗 IBM Quantum</a>\n<a href=\"http://www.quantumplayground.net/\" target=\"_blank\" style=\"display:inline-block;margin-top:8px;margin-left:8px;background:#6d28d9;color:#fff;padding:8px 18px;border-radius:7px;font-size:.82rem;text-decoration:none\">🔗 Quantum Playground</a>\n</div></div></div>",
        "refs": "\n<div class=\"ref-section\">\n  <h4>📚 Textbooks</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computation and Quantum Information</div>\n    <div class=\"ref-auth\">M. A. Nielsen & I. L. Chuang — Cambridge University Press</div>\n    <a class=\"ref-link\" href=\"https://www.cambridge.org/core/books/quantum-computation-and-quantum-information/01E10196D0A682A6AEFFEA52D53BE9AE\" target=\"_blank\">🔗 Publisher</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computer Science: An Introduction</div>\n    <div class=\"ref-auth\">N. David Mermin — Cambridge University Press</div>\n    <a class=\"ref-link\" href=\"https://www.cambridge.org/core/books/quantum-computer-science/66462590D10C8010017CF1D7C45708D7\" target=\"_blank\">🔗 Publisher</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">An Introduction to Quantum Computing</div>\n    <div class=\"ref-auth\">Kaye, Laflamme & Mosca — Oxford University Press</div>\n    <a class=\"ref-link\" href=\"https://global.oup.com/academic/product/an-introduction-to-quantum-computing-9780198570493\" target=\"_blank\">🔗 Publisher</a></div>\n</div>\n<div class=\"ref-section\">\n  <h4>📖 Reference Books</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing</div>\n    <div class=\"ref-auth\">V. Sahni — Tata McGraw-Hill</div></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing: A Gentle Introduction</div>\n    <div class=\"ref-auth\">E. Rieffel & W. Polak — MIT Press</div>\n    <a class=\"ref-link\" href=\"https://mitpress.mit.edu/9780262526678/\" target=\"_blank\">🔗 MIT Press</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Lecture Notes on Quantum Computation</div>\n    <div class=\"ref-auth\">John Preskill — Caltech (Free Online)</div>\n    <a class=\"ref-link\" href=\"http://www.theory.caltech.edu/~preskill/ph229/\" target=\"_blank\">🔗 Caltech</a></div>\n</div>\n<div class=\"ref-section\">\n  <h4>🌐 Online Resources</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">IBM Quantum Learning</div>\n    <a class=\"ref-link\" href=\"https://learning.quantum.ibm.com/\" target=\"_blank\">🔗 learning.quantum.ibm.com</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Qiskit Textbook</div>\n    <a class=\"ref-link\" href=\"https://qiskit.org/learn\" target=\"_blank\">🔗 qiskit.org/learn</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing Playground (Google)</div>\n    <a class=\"ref-link\" href=\"http://www.quantumplayground.net/\" target=\"_blank\">🔗 quantumplayground.net</a></div>\n</div></div>"
      },
      {
        "topic_id": "u5t2",
        "title": "Multi-Qubit Gate Operations",
        "raw_title": "Multi-Qubit Gate Operations",
        "slides": "\n<div class=\"slide-deck\">\n  <div id=\"sdecku5t2\"><div class=\"slide-item\" id=\"slu5t2-0\" style=\"display:block\"><div class=\"slide-container\"><span class=\"slide-num\">1/5</span><h2>Controlled Gates</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Controlled Gates</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu5t2-1\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">2/5</span><h2>CNOT & CZ</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>CNOT & CZ</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu5t2-2\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">3/5</span><h2>Toffoli Gate</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Toffoli Gate</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu5t2-3\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">4/5</span><h2>Universal Gate Sets</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Universal Gate Sets</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu5t2-4\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">5/5</span><h2>Solovay-Kitaev Theorem</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Solovay-Kitaev Theorem</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div></div>\n  <div class=\"slide-nav\">\n    <button id=\"sprevu5t2\" onclick=\"slidePrev('u5t2')\" disabled=\"None\">← Prev</button>\n    <span class=\"slide-counter\" id=\"scntu5t2\">1 / 5</span>\n    <button id=\"snextu5t2\" onclick=\"slideNext('u5t2')\">Next →</button>\n  </div>\n</div></div>",
        "transcript": "Welcome to Unit 5, Topic 2: Multi-Qubit Gate Operations. Single-qubit gates let us manipulate individual qubits, but quantum computing's power comes from controlled operations between qubits. A controlled gate applies a unitary U to the target qubit only when the control qubit is in state one. The CNOT is the basic controlled gate with U equals X. The CZ gate uses U equals Z—it phases the target. The Toffoli gate, also called CCNOT, has two control qubits: it flips the target only when both controls are one. This makes it classically universal for reversible computation. A universal quantum gate set is one that can approximate any n-qubit unitary to arbitrary accuracy. The set consisting of Hadamard, T gate, and CNOT is the standard choice for fault-tolerant quantum computing. The Solovay-Kitaev theorem guarantees that any single-qubit gate can be approximated using only order log-cubed of one-over-epsilon gates from a universal set—making efficient approximation always possible. Together, multi-qubit gates enable the implementation of quantum algorithms like Shor's and Grover's, and quantum error correction codes that protect against decoherence.",
        "sim": "<div class=\"sim-wrap\"><h3>🔬 Interactive Simulation</h3>\n<div class=\"sim-output\" style=\"padding:30px;text-align:center\">\n<div style=\"font-size:3rem;margin-bottom:12px\">⚛️</div>\n<p style=\"color:#94a3b8;margin-bottom:14px\">Simulation for this topic</p>\n<p style=\"color:#94a3b8;font-size:.82rem\">Try the IBM Quantum Experience to run real quantum circuits:</p>\n<a href=\"https://quantum.ibm.com/\" target=\"_blank\" style=\"display:inline-block;margin-top:8px;background:#1d5fa4;color:#fff;padding:8px 18px;border-radius:7px;font-size:.82rem;text-decoration:none\">🔗 IBM Quantum</a>\n<a href=\"http://www.quantumplayground.net/\" target=\"_blank\" style=\"display:inline-block;margin-top:8px;margin-left:8px;background:#6d28d9;color:#fff;padding:8px 18px;border-radius:7px;font-size:.82rem;text-decoration:none\">🔗 Quantum Playground</a>\n</div></div></div>",
        "refs": "\n<div class=\"ref-section\">\n  <h4>📚 Textbooks</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computation and Quantum Information</div>\n    <div class=\"ref-auth\">M. A. Nielsen & I. L. Chuang — Cambridge University Press</div>\n    <a class=\"ref-link\" href=\"https://www.cambridge.org/core/books/quantum-computation-and-quantum-information/01E10196D0A682A6AEFFEA52D53BE9AE\" target=\"_blank\">🔗 Publisher</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computer Science: An Introduction</div>\n    <div class=\"ref-auth\">N. David Mermin — Cambridge University Press</div>\n    <a class=\"ref-link\" href=\"https://www.cambridge.org/core/books/quantum-computer-science/66462590D10C8010017CF1D7C45708D7\" target=\"_blank\">🔗 Publisher</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">An Introduction to Quantum Computing</div>\n    <div class=\"ref-auth\">Kaye, Laflamme & Mosca — Oxford University Press</div>\n    <a class=\"ref-link\" href=\"https://global.oup.com/academic/product/an-introduction-to-quantum-computing-9780198570493\" target=\"_blank\">🔗 Publisher</a></div>\n</div>\n<div class=\"ref-section\">\n  <h4>📖 Reference Books</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing</div>\n    <div class=\"ref-auth\">V. Sahni — Tata McGraw-Hill</div></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing: A Gentle Introduction</div>\n    <div class=\"ref-auth\">E. Rieffel & W. Polak — MIT Press</div>\n    <a class=\"ref-link\" href=\"https://mitpress.mit.edu/9780262526678/\" target=\"_blank\">🔗 MIT Press</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Lecture Notes on Quantum Computation</div>\n    <div class=\"ref-auth\">John Preskill — Caltech (Free Online)</div>\n    <a class=\"ref-link\" href=\"http://www.theory.caltech.edu/~preskill/ph229/\" target=\"_blank\">🔗 Caltech</a></div>\n</div>\n<div class=\"ref-section\">\n  <h4>🌐 Online Resources</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">IBM Quantum Learning</div>\n    <a class=\"ref-link\" href=\"https://learning.quantum.ibm.com/\" target=\"_blank\">🔗 learning.quantum.ibm.com</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Qiskit Textbook</div>\n    <a class=\"ref-link\" href=\"https://qiskit.org/learn\" target=\"_blank\">🔗 qiskit.org/learn</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing Playground (Google)</div>\n    <a class=\"ref-link\" href=\"http://www.quantumplayground.net/\" target=\"_blank\">🔗 quantumplayground.net</a></div>\n</div></div>"
      },
      {
        "topic_id": "u5t3",
        "title": "Applications",
        "raw_title": "Applications",
        "slides": "\n<div class=\"slide-deck\">\n  <div id=\"sdecku5t3\"><div class=\"slide-item\" id=\"slu5t3-0\" style=\"display:block\"><div class=\"slide-container\"><span class=\"slide-num\">1/5</span><h2>Superdense Coding</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Superdense Coding</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu5t3-1\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">2/5</span><h2>Quantum Teleportation</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Quantum Teleportation</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu5t3-2\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">3/5</span><h2>BB84 Protocol</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>BB84 Protocol</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu5t3-3\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">4/5</span><h2>Security Analysis</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Security Analysis</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div><div class=\"slide-item\" id=\"slu5t3-4\" style=\"display:none\"><div class=\"slide-container\"><span class=\"slide-num\">5/5</span><h2>Future Applications</h2><p style=\"color:#94a3b8;font-size:.9rem\">Slide content for: <strong>Future Applications</strong></p><ul style=\"color:#e2e8f0\"><li>See Notes tab for detailed content</li><li>Interactive diagrams available in Simulation tab</li><li>Test your understanding in the Quiz tab</li></ul></div></div></div>\n  <div class=\"slide-nav\">\n    <button id=\"sprevu5t3\" onclick=\"slidePrev('u5t3')\" disabled=\"None\">← Prev</button>\n    <span class=\"slide-counter\" id=\"scntu5t3\">1 / 5</span>\n    <button id=\"snextu5t3\" onclick=\"slideNext('u5t3')\">Next →</button>\n  </div>\n</div></div>",
        "transcript": "Welcome to Unit 5, Topic 3: Quantum Applications. We now explore three remarkable applications that demonstrate quantum mechanics' power. First, superdense coding. Alice wants to send Bob two classical bits. She uses just one qubit—but with a catch: Alice and Bob pre-shared an entangled Bell pair. Alice applies one of four operations to her qubit—I, X, Z, or iY—encoding 2 bits of information. She sends this single qubit to Bob. Bob performs CNOT then Hadamard on both qubits and measures—recovering 2 classical bits. One qubit plus one entangled pair equals two bits of classical information. Second, quantum teleportation. Alice has an unknown qubit state psi she wants to send to Bob. They share a Bell pair. Alice entangles her target qubit with her half of the Bell pair using CNOT and H, then measures both—getting 2 classical bits. She tells Bob these bits over a classical channel. Bob applies the appropriate correction gate to his qubit—and now has the exact state psi. The state was teleported! No faster-than-light communication occurred, because the 2 classical bits were still needed. Third, quantum cryptography via BB84. Alice and Bob can establish a secret key using quantum mechanics, with security guaranteed by the laws of physics—specifically, that any eavesdropping by Eve disturbs the qubits and is detectable via the quantum bit error rate.",
        "sim": "<div class=\"sim-wrap\"><h3>🔬 Interactive Simulation</h3>\n<div class=\"sim-output\" style=\"padding:30px;text-align:center\">\n<div style=\"font-size:3rem;margin-bottom:12px\">⚛️</div>\n<p style=\"color:#94a3b8;margin-bottom:14px\">Simulation for this topic</p>\n<p style=\"color:#94a3b8;font-size:.82rem\">Try the IBM Quantum Experience to run real quantum circuits:</p>\n<a href=\"https://quantum.ibm.com/\" target=\"_blank\" style=\"display:inline-block;margin-top:8px;background:#1d5fa4;color:#fff;padding:8px 18px;border-radius:7px;font-size:.82rem;text-decoration:none\">🔗 IBM Quantum</a>\n<a href=\"http://www.quantumplayground.net/\" target=\"_blank\" style=\"display:inline-block;margin-top:8px;margin-left:8px;background:#6d28d9;color:#fff;padding:8px 18px;border-radius:7px;font-size:.82rem;text-decoration:none\">🔗 Quantum Playground</a>\n</div></div></div>",
        "refs": "\n<div class=\"ref-section\">\n  <h4>📚 Textbooks</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computation and Quantum Information</div>\n    <div class=\"ref-auth\">M. A. Nielsen & I. L. Chuang — Cambridge University Press</div>\n    <a class=\"ref-link\" href=\"https://www.cambridge.org/core/books/quantum-computation-and-quantum-information/01E10196D0A682A6AEFFEA52D53BE9AE\" target=\"_blank\">🔗 Publisher</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computer Science: An Introduction</div>\n    <div class=\"ref-auth\">N. David Mermin — Cambridge University Press</div>\n    <a class=\"ref-link\" href=\"https://www.cambridge.org/core/books/quantum-computer-science/66462590D10C8010017CF1D7C45708D7\" target=\"_blank\">🔗 Publisher</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">An Introduction to Quantum Computing</div>\n    <div class=\"ref-auth\">Kaye, Laflamme & Mosca — Oxford University Press</div>\n    <a class=\"ref-link\" href=\"https://global.oup.com/academic/product/an-introduction-to-quantum-computing-9780198570493\" target=\"_blank\">🔗 Publisher</a></div>\n</div>\n<div class=\"ref-section\">\n  <h4>📖 Reference Books</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing</div>\n    <div class=\"ref-auth\">V. Sahni — Tata McGraw-Hill</div></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing: A Gentle Introduction</div>\n    <div class=\"ref-auth\">E. Rieffel & W. Polak — MIT Press</div>\n    <a class=\"ref-link\" href=\"https://mitpress.mit.edu/9780262526678/\" target=\"_blank\">🔗 MIT Press</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Lecture Notes on Quantum Computation</div>\n    <div class=\"ref-auth\">John Preskill — Caltech (Free Online)</div>\n    <a class=\"ref-link\" href=\"http://www.theory.caltech.edu/~preskill/ph229/\" target=\"_blank\">🔗 Caltech</a></div>\n</div>\n<div class=\"ref-section\">\n  <h4>🌐 Online Resources</h4>\n  <div class=\"ref-item\"><div class=\"ref-title\">IBM Quantum Learning</div>\n    <a class=\"ref-link\" href=\"https://learning.quantum.ibm.com/\" target=\"_blank\">🔗 learning.quantum.ibm.com</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Qiskit Textbook</div>\n    <a class=\"ref-link\" href=\"https://qiskit.org/learn\" target=\"_blank\">🔗 qiskit.org/learn</a></div>\n  <div class=\"ref-item\"><div class=\"ref-title\">Quantum Computing Playground (Google)</div>\n    <a class=\"ref-link\" href=\"http://www.quantumplayground.net/\" target=\"_blank\">🔗 quantumplayground.net</a></div>\n</div></div>"
      }
    ]
  }
];
