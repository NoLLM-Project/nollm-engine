# Pipeline Collapse Rules

Pipeline collapse rules define how pipelines detect collapse, how collapse is contained, and what pipelines are forbidden to do in response.  
Pipeline collapse is strictly downstream of workflow collapse and routing collapse, and downstream of all engine‑level collapse membranes.

Pipeline collapse is structural, non‑semantic, non‑interpretive, and never a mechanism.

---

# 1. Collapse Definition Rules

## 1.1 Pipeline collapse is a structural failure state
Pipeline collapse occurs only when:
- pipeline stages cannot be executed structurally  
- pipeline transitions are malformed  
- workflow references are invalid  
- routing references are invalid  
- pipeline boundaries are violated  
- pipeline tables (if present) are malformed  

These are mechanical failures.

## 1.2 Pipeline collapse is not semantic
Pipeline collapse cannot be triggered by:
- meaning  
- identity  
- categories  
- content  
- interpretation  

Semantic collapse is upstream and forbidden.

---

# 2. Collapse Detection Rules

## 2.1 Pipelines may only detect structural collapse
Allowed collapse triggers:
- invalid pipeline stage order  
- invalid pipeline transitions  
- missing pipeline stages  
- invalid workflow step references  
- invalid routing transition references  
- structural boundary violations  

## 2.2 Pipelines may not detect semantic collapse
Forbidden collapse triggers:
- meaning errors  
- identity errors  
- category errors  
- content errors  

Pipelines cannot interpret semantics.

---

# 3. Collapse Interpretation Rules

## 3.1 Pipelines cannot interpret the cause of collapse
Pipelines cannot:
- infer intent  
- assign semantics  
- reinterpret names  
- reinterpret content  

Collapse is a structural fact, not a semantic signal.

## 3.2 Pipelines cannot reinterpret structural context
Pipelines cannot reinterpret:
- workflow order  
- workflow transitions  
- routing transitions  
- adjacency  
- placement  
- geometry  

Pipelines accept structural context as‑is.

---

# 4. Collapse Mutation Rules

## 4.1 Pipelines cannot mutate upstream domains in response to collapse
Pipelines cannot change:
- workflows  
- routing tables  
- routing transitions  
- geometry  
- adjacency  
- placement  
- naming  
- categories  
- invariants  

Collapse does not grant mutation privileges.

## 4.2 Pipelines cannot create new domains in response to collapse
Pipelines cannot create:
- new pipeline types  
- new workflow types  
- new routing types  
- new adjacency types  
- new semantics  

Collapse is not generative.

---

# 5. Collapse Boundary Rules

## 5.1 Pipeline collapse cannot cross domain boundaries
Pipeline collapse cannot propagate into:
- semantics  
- registry internals  
- naming rules  
- geometry definitions  
- invariant definitions  

Collapse remains inside the pipeline domain.

## 5.2 Pipeline collapse cannot fuse domains
Pipeline collapse cannot cause:
- pipeline ↔ workflow fusion  
- pipeline ↔ routing fusion  
- pipeline ↔ engine fusion  
- pipeline ↔ semantics fusion  

Fusion is contamination.

---

# 6. Collapse Handling Rules

## 6.1 Collapse handling must be mechanical
Allowed responses:
- halt pipeline execution  
- return structural pipeline collapse codes  
- abort pipeline stage (structural only)  
- signal workflow‑level or routing‑level structural collapse  

Forbidden responses:
- reinterpret meaning  
- reinterpret identity  
- reinterpret categories  
- reinterpret content  

## 6.2 Collapse handling cannot alter pipeline identity
Collapse cannot:
- reorder pipeline stages  
- mutate pipeline structure  
- reinterpret pipeline transitions  

Pipeline identity is fixed.

---

# 7. Collapse State Rules

## 7.1 Collapse state must be ephemeral
Collapse state must:
- exist only during pipeline execution  
- be cleared after the pipeline stage  
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
- pipeline structure  

The same pipeline collapse must be detected.

## 8.2 Collapse behavior cannot drift
Collapse handling cannot:
- reinterpret itself  
- accumulate meaning  
- change behavior over time  

Pipeline collapse handling is stable.

