# Engine Membrane Rules

The engine membrane defines the absolute boundaries of what the engine can and cannot do.  
It prevents the engine from interpreting, mutating, or influencing upstream physics.

The membrane is upstream of execution and downstream of all invariants.

---

# 1. Engine Visibility Membrane

## 1.1 The engine can only see structure, not semantics
The engine may access:
- shapes  
- coordinates  
- adjacency  
- placement  
- routing tables  

The engine may not access:
- meaning  
- identity  
- semantics  
- categories  
- content  

## 1.2 The engine cannot see upstream physics
The engine cannot access:
- invariants  
- geometry definitions  
- naming rules  
- category boundaries  

The engine receives structure; it does not inspect physics.

---

# 2. Engine Interpretation Membrane

## 2.1 The engine cannot interpret meaning
The engine cannot:
- infer intent  
- assign semantics  
- reinterpret names  
- reinterpret content  

## 2.2 The engine cannot reinterpret structure
The engine cannot:
- reinterpret shapes  
- reinterpret boundaries  
- reinterpret adjacency  
- reinterpret placement  

Structure is taken as‑is.

---

# 3. Engine Mutation Membrane

## 3.1 The engine cannot mutate upstream domains
The engine cannot change:
- structure  
- geometry  
- naming  
- categories  
- invariants  

## 3.2 The engine cannot create new domains
The engine cannot create:
- new containers  
- new categories  
- new routing paths  
- new semantics  

The engine only executes what exists.

---

# 4. Engine Boundary Membrane

## 4.1 The engine cannot cross domain boundaries
The engine cannot enter:
- registry internals  
- semantics  
- geometry  
- naming  
- governance  

## 4.2 The engine cannot fuse with other domains
The engine cannot become:
- structure  
- registry  
- semantics  
- content  

Fusion is contamination.

---

# 5. Engine Execution Membrane

## 5.1 Execution is mechanical, not semantic
Execution cannot:
- interpret meaning  
- infer intent  
- assign semantics  

Execution is pure movement.

## 5.2 Execution must respect all invariants
Execution must obey:
- geometry  
- adjacency  
- placement  
- boundaries  
- separation  
- drift prevention  

Execution cannot override physics.

---

# 6. Engine Routing Membrane

## 6.1 The engine cannot invent transitions
The engine cannot:
- create adjacency  
- create placement  
- create routing paths  

Routing is defined upstream.

## 6.2 The engine cannot reorder workflows
The engine cannot:
- reorder steps  
- reinterpret transitions  
- alter workflow identity  

Workflows are fixed sequences.

---

# 7. Engine State Membrane

## 7.1 The engine cannot store semantic state
The engine cannot:
- store meaning  
- store identity  
- store categories  
- store interpretation  

## 7.2 The engine cannot accumulate residue
The engine cannot:
- drift  
- evolve  
- adapt  
- reinterpret itself  

The engine is stateless with respect to semantics.

---

# 8. Engine Contamination Membrane

## 8.1 The engine cannot absorb semantics
The engine cannot:
- encode meaning  
- encode identity  
- encode categories  

## 8.2 The engine cannot absorb structure
The engine cannot:
- define shapes  
- define geometry  
- define boundaries  

The engine is not structural.

---

# 9. Engine Temporal Membrane

## 9.1 The engine cannot drift over time
The engine must remain:
- fixed  
- stable  
- non‑evolving  

## 9.2 Execution cannot cause temporal drift
Execution cannot:
- accumulate state  
- alter physics  
- reinterpret upstream domains  

---

# 10. Engine Logging Membrane

## 10.1 The engine cannot interpret logs
Logs cannot:
- influence execution  
- alter routing  
- alter workflows  

## 10.2 Logging cannot influence engine behavior
Logging is passive; the engine is unaffected.

