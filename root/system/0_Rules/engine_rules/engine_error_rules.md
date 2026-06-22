# Engine Error Rules

Engine error rules define what the engine is allowed to treat as an error, how errors are surfaced, and what the engine is forbidden to do in response to errors.  
Errors are structural, non‑semantic, non‑interpretive, and strictly downstream of all invariants and membranes.

The engine may detect structural violations.  
The engine may not interpret meaning, identity, or semantics as errors.

---

# 1. Error Scope Rules

## 1.1 The engine may only detect structural errors
Allowed error types:
- invalid adjacency  
- invalid placement  
- invalid routing transitions  
- boundary violations  
- geometry violations (as expressed through adjacency/placement)  
- workflow step violations  

These are mechanical and non‑semantic.

## 1.2 The engine may not detect semantic errors
Forbidden error types:
- meaning errors  
- identity errors  
- category errors  
- content errors  
- interpretation errors  

Semantic errors are upstream and invisible to the engine.

---

# 2. Error Interpretation Rules

## 2.1 The engine cannot interpret the cause of an error
The engine cannot:
- infer intent  
- assign meaning  
- reinterpret structure  
- reinterpret names  
- reinterpret content  

Errors are structural facts, not semantic signals.

## 2.2 The engine cannot reinterpret error context
The engine cannot:
- reinterpret boundaries  
- reinterpret adjacency  
- reinterpret placement  
- reinterpret workflow semantics  

Error context is taken as‑is.

---

# 3. Error Mutation Rules

## 3.1 The engine cannot mutate upstream domains in response to errors
The engine cannot change:
- structure  
- geometry  
- naming  
- categories  
- invariants  

Errors do not grant mutation privileges.

## 3.2 The engine cannot create new domains in response to errors
The engine cannot create:
- new containers  
- new categories  
- new routing paths  
- new semantics  

Errors do not expand capability.

---

# 4. Error Boundary Rules

## 4.1 Errors cannot cross domain boundaries
Errors cannot propagate into:
- semantics  
- registry internals  
- naming rules  
- geometry definitions  
- invariants  

Errors remain inside the engine domain.

## 4.2 Errors cannot fuse domains
Errors cannot cause:
- structure ↔ engine fusion  
- registry ↔ engine fusion  
- semantics ↔ engine fusion  

Fusion is contamination.

---

# 5. Error Handling Rules

## 5.1 Error handling must be mechanical
Allowed responses:
- halt execution  
- return structural error codes  
- abort routing step  
- abort workflow step  

Forbidden responses:
- reinterpret meaning  
- reinterpret identity  
- reinterpret categories  
- reinterpret content  

## 5.2 Error handling cannot alter execution order
Errors cannot:
- reorder workflow steps  
- reorder routing transitions  
- alter workflow identity  

Execution order is fixed.

---

# 6. Error State Rules

## 6.1 Error state must be ephemeral
Error state must:
- exist only during execution  
- be cleared after execution  
- leave no residue  

## 6.2 Error state cannot persist across executions
Error state cannot:
- accumulate  
- evolve  
- adapt  
- drift  

Persistence is forbidden.

---

# 7. Error Visibility Rules

## 7.1 Errors are not externally visible to semantic domains
Errors cannot be:
- interpreted by semantics  
- interpreted by registry  
- interpreted by naming  
- interpreted by geometry  

Errors are internal to the engine.

## 7.2 Errors cannot expose upstream domains
Errors cannot reveal:
- invariants  
- naming rules  
- geometry definitions  
- category boundaries  

Errors are sealed.

---

# 8. Error Stability Rules

## 8.1 Error detection must be deterministic
Given the same:
- adjacency  
- placement  
- routing  
- workflow  

The same structural error must be detected.

## 8.2 Error behavior cannot drift
Error handling cannot:
- reinterpret itself  
- accumulate meaning  
- change behavior over time  

Error handling is stable.

