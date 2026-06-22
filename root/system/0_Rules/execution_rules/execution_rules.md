# Execution Rules

Execution rules define what execution is, what it is allowed to do, and what it is forbidden to do.  
Execution is the first domain that performs concrete operations, but it remains strictly mechanical, non‑semantic, and non‑interpretive.

Execution is downstream of pipelines, workflows, routing, engine, and all upstream physics.

Execution is not semantic.  
Execution is not content.  
Execution is not policy.  
Execution is not interpretation.

Execution is mechanical movement applied to concrete operations.

---

# 1. Execution Definition Rules

## 1.1 Execution is mechanical operation
Execution may perform:
- concrete operations  
- mechanical actions  
- deterministic transformations  
- ephemeral execution‑time state  
- pipeline‑driven stage operations  

Execution does not interpret meaning.

## 1.2 Execution cannot contain semantic information
Forbidden execution contents:
- meaning  
- identity  
- categories  
- content semantics  
- policy  
- interpretation  

Execution cannot encode semantics.

---

# 2. Execution Position Rules

## 2.1 Execution is downstream of pipelines
Execution must:
- consume pipeline stages  
- obey pipeline transitions  
- respect pipeline boundaries  

Execution cannot mutate pipelines.

## 2.2 Execution is downstream of workflows and routing
Execution must:
- obey workflow order (via pipelines)  
- obey routing transitions (via pipelines)  
- respect routing boundaries  

Execution cannot mutate workflows or routing.

## 2.3 Execution is downstream of invariants and geometry
Execution cannot:
- redefine geometry  
- redefine adjacency  
- redefine placement  
- redefine invariants  

Upstream physics is immutable.

---

# 3. Execution Visibility Rules

## 3.1 Execution may only see structural surfaces
Execution may access:
- pipeline stage order  
- pipeline transitions  
- workflow step references  
- routing transition references  
- adjacency/placement consequences  

Execution cannot see upstream definitions.

## 3.2 Execution may not see upstream domains
Forbidden visibility:
- geometry definitions  
- naming rules  
- invariants  
- registry internals  
- semantic metadata  

Execution cannot reveal upstream physics.

---

# 4. Execution Interpretation Rules

## 4.1 Execution cannot interpret meaning
Execution cannot:
- infer intent  
- assign semantics  
- reinterpret names  
- reinterpret content  

Execution is non‑semantic.

## 4.2 Execution cannot reinterpret structure
Execution cannot:
- reinterpret pipeline transitions  
- reinterpret workflow transitions  
- reinterpret routing transitions  
- reinterpret adjacency  
- reinterpret placement  
- reinterpret geometry  

Structure is taken as‑is.

---

# 5. Execution Mutation Rules

## 5.1 Execution cannot mutate upstream domains
Execution cannot change:
- pipelines  
- workflows  
- routing tables  
- routing transitions  
- geometry  
- adjacency  
- placement  
- naming  
- categories  
- invariants  

Execution is downstream.

## 5.2 Execution cannot create new domains
Execution cannot create:
- new pipeline types  
- new workflow types  
- new routing types  
- new adjacency types  
- new semantics  

Execution is not generative.

---

# 6. Execution Boundary Rules

## 6.1 Execution cannot cross domain boundaries
Execution cannot enter:
- semantic domains  
- registry internals  
- naming rules  
- geometry definitions  
- invariant definitions  

Execution remains inside the execution domain.

## 6.2 Execution cannot fuse with other domains
Execution cannot become:
- pipeline logic  
- workflow logic  
- routing logic  
- engine logic  
- semantic logic  
- geometry logic  

Fusion is contamination.

---

# 7. Execution Operation Rules

## 7.1 Execution performs operations, not interpretation
Execution may:
- apply mechanical operations  
- perform deterministic transformations  
- maintain ephemeral execution state  
- enforce execution boundaries  

Execution may not:
- define semantic branching  
- define policy logic  
- define interpretive behavior  

## 7.2 Execution cannot override upstream constraints
Execution cannot:
- bypass pipeline order  
- bypass routing transitions  
- bypass adjacency  
- bypass placement  
- bypass engine membranes  

Upstream physics is immutable.

---

# 8. Execution Stability Rules

## 8.1 Execution must be deterministic
Given the same:
- pipeline structure  
- workflow structure  
- routing tables  
- adjacency/placement  
- execution structure  

Execution must produce the same behavior.

## 8.2 Execution cannot drift
Execution cannot:
- reinterpret itself  
- accumulate meaning  
- change behavior over time  

Execution is stable.

