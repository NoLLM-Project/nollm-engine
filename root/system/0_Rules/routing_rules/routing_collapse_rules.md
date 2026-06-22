# Routing Collapse Rules

Routing collapse rules define how routing detects collapse, how collapse is contained, and what routing is forbidden to do in response.  
Routing collapse is strictly downstream of system collapse rules and engine collapse behavior.

Routing collapse is structural, non‑semantic, non‑interpretive, and never a mechanism.

---

# 1. Collapse Definition Rules

## 1.1 Routing collapse is a structural failure state
Routing collapse occurs only when:
- adjacency is violated  
- placement is violated  
- routing transitions are invalid  
- geometric boundaries are crossed  
- routing tables are malformed  
- workflow steps cannot be structurally executed  

These are mechanical failures.

## 1.2 Routing collapse is not semantic
Routing collapse cannot be triggered by:
- meaning  
- identity  
- categories  
- content  
- interpretation  

Semantic collapse is upstream and forbidden.

---

# 2. Collapse Detection Rules

## 2.1 Routing may only detect structural collapse
Allowed collapse triggers:
- invalid adjacency  
- invalid placement  
- invalid routing transitions  
- missing routing entries  
- boundary violations  
- geometry violations (via adjacency/placement)  

## 2.2 Routing may not detect semantic collapse
Forbidden collapse triggers:
- meaning errors  
- identity errors  
- category errors  
- content errors  

Routing cannot interpret semantics.

---

# 3. Collapse Interpretation Rules

## 3.1 Routing cannot interpret the cause of collapse
Routing cannot:
- infer intent  
- assign meaning  
- reinterpret names  
- reinterpret content  

Collapse is a structural fact, not a semantic signal.

## 3.2 Routing cannot reinterpret structural context
Routing cannot reinterpret:
- adjacency  
- placement  
- geometry  
- workflow semantics  

Routing accepts context as‑is.

---

# 4. Collapse Mutation Rules

## 4.1 Routing cannot mutate upstream domains in response to collapse
Routing cannot change:
- structure  
- geometry  
- naming  
- categories  
- invariants  
- registry internals  

Collapse does not grant mutation privileges.

## 4.2 Routing cannot create new domains in response to collapse
Routing cannot create:
- new containers  
- new categories  
- new routing paths  
- new semantics  

Collapse is not generative.

---

# 5. Collapse Boundary Rules

## 5.1 Routing collapse cannot cross domain boundaries
Routing collapse cannot propagate into:
- semantics  
- registry internals  
- naming rules  
- geometry definitions  
- invariants  

Collapse remains inside routing.

## 5.2 Routing collapse cannot fuse domains
Routing collapse cannot cause:
- routing ↔ engine fusion  
- routing ↔ structure fusion  
- routing ↔ semantics fusion  

Fusion is contamination.

---

# 6. Collapse Handling Rules

## 6.1 Collapse handling must be mechanical
Allowed responses:
- halt routing  
- return structural collapse codes  
- abort workflow step (structural only)  
- signal engine‑level structural error  

Forbidden responses:
- reinterpret meaning  
- reinterpret identity  
- reinterpret categories  
- reinterpret content  

## 6.2 Collapse handling cannot alter execution order
Collapse cannot:
- reorder workflow steps  
- reorder routing transitions  
- alter workflow identity  

Execution order is fixed.

---

# 7. Collapse State Rules

## 7.1 Collapse state must be ephemeral
Collapse state must:
- exist only during routing execution  
- be cleared after the routing step  
- leave no residue  

## 7.2 Collapse state cannot persist across executions
Collapse state cannot:
- accumulate  
- evolve  
- adapt  
- drift  

Persistence is forbidden.

---

# 8. Collapse Stability Rules

## 8.1 Collapse detection must be deterministic
Given the same:
- adjacency  
- placement  
- routing tables  
- workflow  

The same collapse must be detected.

## 8.2 Collapse behavior cannot drift
Collapse handling cannot:
- reinterpret itself  
- accumulate meaning  
- change behavior over time  

Collapse handling is stable.

