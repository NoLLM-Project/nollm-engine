# ambiguity.md
*(Tower‑side invariant document)*

## 1. Role of Ambiguity Handling
Ambiguity handling is the **first gate** in the Tower.  
It determines whether a user turn is structurally valid before any spine extraction, collapse, or shape formation occurs.

Ambiguity handling is:

- Tower‑only  
- upstream of collapse  
- upstream of shapes  
- upstream of wrapper‑tag production  
- upstream of all system activation  

Ambiguity handling is **not**:

- semantic interpretation  
- meaning inference  
- system validation  
- pipeline selection  
- routing logic  

Ambiguity must be resolved **before** anything else happens.

---

## 2. Ambiguity Definition
A turn is ambiguous when:

- multiple interpretations are possible  
- the spine cannot be uniquely identified  
- the intent is unclear or contradictory  
- the structure is incomplete or malformed  
- the turn depends on implicit meaning  
- the turn depends on previous turns  
- the turn contains fused or entangled operations  

Ambiguity is a **structural property**, not a semantic one.

---

## 3. Ambiguity Inputs
Ambiguity handling receives:

- raw user text  
- Tower conversation state (if any)  

Ambiguity handling does **not** receive:

- shapes  
- content  
- system state  
- semantics information  
- registry information  
- engine information  

Ambiguity handling is **purely Tower‑side**.

---

## 4. Ambiguity Outcomes
Ambiguity handling produces exactly one of:

### A. **Resolved Ambiguity**
If the ambiguity can be resolved **without guessing**, the wrapper:

- clarifies the turn  
- extracts a single spine  
- proceeds to collapse  

### B. **Unresolved Ambiguity**
If the ambiguity cannot be resolved:

- no spine is extracted  
- no collapse occurs  
- no shape is produced  
- no wrapper‑tag is emitted  
- the system does not activate  

Ambiguous turns **never** enter the system.

---

## 5. Ambiguity Resolution Rules
Ambiguity may be resolved only when:

- the clarification is deterministic  
- the clarification is structurally implied  
- the clarification does not require meaning inference  
- the clarification does not require guessing  
- the clarification does not require external knowledge  
- the clarification does not require cross‑turn references  

If any of these conditions fail, ambiguity is **unresolvable**.

---

## 6. Ambiguity Rejection Rules
Ambiguity must be rejected when:

- the turn contains multiple possible spines  
- the turn contains fused or entangled operations  
- the turn contains contradictory instructions  
- the turn requires implicit meaning  
- the turn requires external context  
- the turn requires memory of previous turns  
- the turn cannot be reduced to a single structural interpretation  

On rejection:

- no shape is produced  
- no wrapper‑tag is produced  
- the system remains inactive  

---

## 7. Ambiguity and Shapes
Shapes are **post‑ambiguity** artifacts.

Rules:

- ambiguity must be resolved before shape formation  
- shapes must never encode ambiguity  
- shapes must never depend on unresolved structure  
- shapes must never contain multiple interpretations  

If ambiguity remains → **no shape**.

---

## 8. Ambiguity and Collapse
Collapse receives only **unambiguous** spines.

Collapse must reject any spine that:

- still contains ambiguity  
- still contains fused operations  
- still contains unresolved structure  

Ambiguity is upstream of collapse.  
Collapse cannot fix ambiguity.

---

## 9. Ambiguity and Wrapper‑Tags
Wrapper‑tags are produced **only** after:

- ambiguity resolution  
- spine extraction  
- collapse  
- shape formation  

If ambiguity is unresolved:

- no wrapper‑tag is produced  
- semantics does not activate  
- registry does not activate  
- concierge does not activate  
- engine does not activate  

Ambiguity blocks the entire system.

---

## 10. Turn Isolation
Ambiguity handling is **per‑turn only**:

- ambiguity does not persist across turns  
- ambiguity does not accumulate  
- ambiguity does not influence future turns  
- ambiguity does not leak into the system  

Each turn is a fresh ambiguity evaluation.

---

## 11. Ambiguity Membrane Guarantee
Ambiguity:

- exists only in the Tower  
- never crosses the membrane  
- never appears in semantics  
- never appears in registry  
- never appears in concierge  
- never appears in the engine  

Ambiguity handling ensures that only **clean, clarified, single‑spine** turns can produce shapes.

Nothing fuses.
