# Routing Error Rules

Routing error rules define what counts as a routing‑level structural error, how routing may surface errors, and what routing is forbidden to do in response to errors.  
Routing errors are mechanical, non‑semantic, non‑interpretive, and strictly downstream of all engine rules.

Routing may detect structural violations.  
Routing may not interpret meaning, identity, or semantics as errors.

---

# 1. Routing Error Scope Rules

## 1.1 Routing may only detect structural routing errors
Allowed routing error types:
- invalid adjacency  
- invalid placement  
- invalid routing transitions  
- missing routing entries  
- boundary violations  
- geometry violations (as expressed through adjacency/placement)  
- workflow step violations (structural only)  

These are mechanical and non‑semantic.

## 1.2 Routing may not detect semantic errors
Forbidden routing error types:
- meaning errors  
- identity errors  
- category errors  
- content errors  
- interpretation errors  

Semantic errors are upstream and invisible to routing.

---

# 2. Routing Error Interpretation Rules

## 2.1 Routing cannot interpret the cause of an error
Routing cannot:
- infer intent  
- assign semantics  
- reinterpret names  
- reinterpret content  

Errors are structural facts, not semantic signals.

## 2.2 Routing cannot reinterpret structural context
Routing cannot:
- reinterpret adjacency  
- reinterpret placement  
- reinterpret geometry  
- reinterpret boundaries  
- reinterpret workflow semantics  

Routing accepts structural context as‑is.

---

# 3. Routing Error Mutation Rules

## 3.1 Routing cannot mutate upstream domains in response to errors
Routing cannot change:
- structure  
- geometry  
- naming  
- categories  
- invariants  
- registry internals  

Errors do not grant mutation privileges.

## 3.2 Routing cannot create new domains in response to errors
Routing cannot create:
- new containers  
- new categories  
- new routing paths  
- new semantics  

Errors do not expand routing capability.

---

# 4. Routing Error Boundary Rules

## 4.1 Routing errors cannot cross domain boundaries
Routing errors cannot propagate into:
- semantics  
- registry internals  
- naming rules  
- geometry definitions  
- invariants  

Routing errors remain inside the routing domain.

## 4.2 Routing errors cannot fuse domains
Routing errors cannot cause:
- routing ↔ engine fusion  
- routing ↔ structure fusion  
- routing ↔ semantics fusion  

Fusion is contamination.

---

# 5. Routing Error Handling Rules

## 5.1 Routing error handling must be mechanical
Allowed responses:
- halt routing step  
- return structural routing error codes  
- abort workflow step (structural only)  
- signal engine‑level structural error  

Forbidden responses:
- reinterpret meaning  
- reinterpret identity  
- reinterpret categories  
- reinterpret content  

## 5.2 Routing error handling cannot alter execution order
Errors cannot:
- reorder workflow steps  
- reorder routing transitions  
- alter workflow identity  

Execution order is fixed.

---

# 6. Routing Error State Rules

## 6.1 Routing error state must be ephemeral
Routing error state must:
- exist only during routing execution  
- be cleared after the routing step  
- leave no residue  

## 6.2 Routing error state cannot persist across executions
Routing error state cannot:
- accumulate  
- evolve  
- adapt  
- drift  

Persistence is forbidden.

---

# 7. Routing Error Visibility Rules

## 7.1 Routing errors are not visible to semantic domains
Routing errors cannot be:
- interpreted by semantics  
- interpreted by registry  
- interpreted by naming  
- interpreted by geometry  

Routing errors are internal to routing and engine.

## 7.2 Routing errors cannot expose upstream domains
Routing errors cannot reveal:
- invariants  
- naming rules  
- geometry definitions  
- category boundaries  

Routing errors are sealed.

---

# 8. Routing Error Stability Rules

## 8.1 Routing error detection must be deterministic
Given the same:
- adjacency  
- placement  
- routing tables  
- workflow  

The same structural routing error must be detected.

## 8.2 Routing error behavior cannot drift
Routing error handling cannot:
- reinterpret itself  
- accumulate meaning  
- change behavior over time  

Routing error handling is stable.

