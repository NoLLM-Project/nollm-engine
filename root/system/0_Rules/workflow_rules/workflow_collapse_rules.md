# Workflow Collapse Rules

Workflow collapse rules define how workflows detect collapse, how collapse is contained, and what workflows are forbidden to do in response.  
Workflow collapse is strictly downstream of system collapse rules and engine collapse behavior, and upstream of routing collapse.

Workflow collapse is structural, non‑semantic, non‑interpretive, and never a mechanism.

---

# 1. Collapse Definition Rules

## 1.1 Workflow collapse is a structural failure state
Workflow collapse occurs only when:
- workflow step order is invalid  
- workflow transitions are malformed  
- workflow references invalid routing transitions  
- workflow structure cannot be executed mechanically  
- workflow boundaries are violated  
- workflow tables (if present) are malformed  

These are mechanical failures.

## 1.2 Workflow collapse is not semantic
Workflow collapse cannot be triggered by:
- meaning  
- identity  
- categories  
- content  
- interpretation  

Semantic collapse is upstream and forbidden.

---

# 2. Collapse Detection Rules

## 2.1 Workflows may only detect structural collapse
Allowed collapse triggers:
- invalid workflow step order  
- invalid workflow transitions  
- missing workflow steps  
- invalid routing transition references  
- structural boundary violations  

## 2.2 Workflows may not detect semantic collapse
Forbidden collapse triggers:
- meaning errors  
- identity errors  
- category errors  
- content errors  

Workflows cannot interpret semantics.

---

# 3. Collapse Interpretation Rules

## 3.1 Workflows cannot interpret the cause of collapse
Workflows cannot:
- infer intent  
- assign meaning  
- reinterpret names  
- reinterpret content  

Collapse is a structural fact, not a semantic signal.

## 3.2 Workflows cannot reinterpret structural context
Workflows cannot reinterpret:
- adjacency  
- placement  
- geometry  
- routing transitions  

Workflows accept structural context as‑is.

---

# 4. Collapse Mutation Rules

## 4.1 Workflows cannot mutate upstream domains in response to collapse
Workflows cannot change:
- geometry  
- adjacency  
- placement  
- naming  
- categories  
- invariants  

Collapse does not grant mutation privileges.

## 4.2 Workflows cannot create new domains in response to collapse
Workflows cannot create:
- new workflow types  
- new routing types  
- new adjacency types  
- new semantics  

Collapse is not generative.

---

# 5. Collapse Boundary Rules

## 5.1 Workflow collapse cannot cross domain boundaries
Workflow collapse cannot propagate into:
- semantics  
- registry internals  
- naming rules  
- geometry definitions  
- invariant definitions  

Collapse remains inside the workflow domain.

## 5.2 Workflow collapse cannot fuse domains
Workflow collapse cannot cause:
- workflow ↔ routing fusion  
- workflow ↔ engine fusion  
- workflow ↔ semantics fusion  

Fusion is contamination.

---

# 6. Collapse Handling Rules

## 6.1 Collapse handling must be mechanical
Allowed responses:
- halt workflow execution  
- return structural workflow collapse codes  
- abort workflow step (structural only)  
- signal routing‑level structural collapse  

Forbidden responses:
- reinterpret meaning  
- reinterpret identity  
- reinterpret categories  
- reinterpret content  

## 6.2 Collapse handling cannot alter workflow identity
Collapse cannot:
- reorder workflow steps  
- mutate workflow structure  
- reinterpret workflow transitions  

Workflow identity is fixed.

---

# 7. Collapse State Rules

## 7.1 Collapse state must be ephemeral
Collapse state must:
- exist only during workflow evaluation  
- be cleared after the workflow step  
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
- workflow structure  
- routing tables  
- adjacency/placement  

The same workflow collapse must be detected.

## 8.2 Collapse behavior cannot drift
Collapse handling cannot:
- reinterpret itself  
- accumulate meaning  
- change behavior over time  

Workflow collapse handling is stable.

