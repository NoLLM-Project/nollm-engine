# Engine Visibility Rules

Engine visibility rules define what the engine is allowed to see and what it is forbidden to see.  
Visibility is structural, non‑semantic, and strictly constrained by the engine membrane.

The engine may only access information required for mechanical execution.  
The engine may not access semantics, meaning, identity, or upstream physics.

---

# 1. Visibility Scope Rules

## 1.1 The engine may only see structural domains
The engine may access:
- shapes  
- coordinates  
- adjacency  
- placement  
- routing tables  
- workflow step sequences  

These are mechanical, non‑semantic structures.

## 1.2 The engine may not see semantic domains
The engine may not access:
- meaning  
- identity  
- categories  
- content  
- interpretation layers  

Semantics are upstream and forbidden.

---

# 2. Physics Visibility Rules

## 2.1 The engine cannot see invariants
The engine cannot access:
- system invariants  
- domain invariants  
- contamination invariants  
- drift invariants  
- separation invariants  

Physics is upstream and invisible to the engine.

## 2.2 The engine cannot see geometry definitions
The engine may use geometry indirectly through adjacency and placement,  
but it may not access:
- geometric definitions  
- shape construction rules  
- boundary definitions  

Geometry is upstream.

---

# 3. Registry Visibility Rules

## 3.1 The engine cannot see registry internals
The engine may not access:
- registry entries  
- registry metadata  
- registry categories  
- registry identity surfaces  

The registry is a separate domain.

## 3.2 The engine may only receive pre‑resolved structural references
Any structural reference passed to the engine must be:
- pre‑validated  
- pre‑resolved  
- non‑semantic  
- non‑interpretive  

The engine does not perform lookup or interpretation.

---

# 4. Naming Visibility Rules

## 4.1 The engine cannot see naming rules
The engine may not access:
- naming schemas  
- naming categories  
- naming invariants  

## 4.2 The engine cannot interpret names
Names cannot:
- influence execution  
- influence routing  
- influence movement  

Names are structural labels, not signals.

---

# 5. Workflow Visibility Rules

## 5.1 The engine may see workflow sequences
The engine may access:
- ordered workflow steps  
- structural transitions  
- routing instructions  

These are mechanical.

## 5.2 The engine may not see workflow semantics
The engine may not access:
- workflow meaning  
- workflow intent  
- workflow interpretation  

Workflows are executed mechanically.

---

# 6. Error Visibility Rules

## 6.1 The engine may only see structural errors
Allowed:
- invalid adjacency  
- invalid placement  
- invalid routing transitions  
- boundary violations  

## 6.2 The engine may not see semantic errors
Forbidden:
- meaning errors  
- identity errors  
- category errors  
- content errors  

Semantic errors are upstream.

---

# 7. Visibility Boundary Rules

## 7.1 The engine cannot cross visibility membranes
The engine cannot see into:
- semantics  
- registry  
- geometry definitions  
- naming rules  
- invariants  

## 7.2 The engine cannot expand its visibility
The engine cannot:
- request new domains  
- infer new visibility  
- reinterpret visibility boundaries  

Visibility is fixed and non‑negotiable.

---

# 8. Visibility Stability Rules

## 8.1 Engine visibility cannot drift
Visibility cannot:
- expand  
- contract  
- reinterpret itself  
- accumulate meaning  

## 8.2 Execution cannot alter visibility
Execution cannot:
- grant new visibility  
- remove visibility  
- reinterpret visibility  

Visibility is stable across time.

