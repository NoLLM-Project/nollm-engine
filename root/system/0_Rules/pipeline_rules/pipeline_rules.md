# Pipeline Rules

Pipeline rules define what a pipeline is, what it is allowed to do, and what it is forbidden to do.  
Pipelines are downstream of workflows and routing, and upstream of concrete execution and content.

A pipeline is a **mechanical execution surface** that consumes workflow structure and routing transitions to produce ordered execution behavior.

Pipelines are structural, non‑semantic, non‑interpretive, and non‑generative.

---

# 1. Pipeline Definition Rules

## 1.1 A pipeline is an execution surface
A pipeline may contain:
- ordered execution stages  
- structural references to workflow steps  
- structural references to routing transitions  
- mechanical execution boundaries  
- execution‑time state (ephemeral)  

These are mechanical and non‑semantic.

## 1.2 A pipeline cannot contain semantic information
Forbidden pipeline contents:
- meaning  
- identity  
- categories  
- content  
- policy  
- interpretation  

Pipelines cannot encode semantics.

---

# 2. Pipeline Position Rules

## 2.1 Pipelines are downstream of workflows
Pipelines must:
- consume workflow structure  
- obey workflow order  
- respect workflow boundaries  

Pipelines cannot mutate workflows.

## 2.2 Pipelines are downstream of routing
Pipelines must:
- consume routing transitions  
- obey routing constraints  
- respect routing boundaries  

Pipelines cannot mutate routing.

## 2.3 Pipelines are downstream of invariants and geometry
Pipelines cannot:
- redefine geometry  
- redefine adjacency  
- redefine placement  
- redefine invariants  

Upstream physics is immutable.

---

# 3. Pipeline Visibility Rules

## 3.1 Pipelines may only see structural surfaces
Allowed visibility:
- workflow step order  
- workflow transitions  
- routing transitions  
- adjacency/placement consequences (via routing)  
- execution‑time structural state  

## 3.2 Pipelines may not see upstream domains
Forbidden visibility:
- geometry definitions  
- naming rules  
- invariants  
- registry internals  
- semantic metadata  

Pipelines cannot see upstream physics.

---

# 4. Pipeline Interpretation Rules

## 4.1 Pipelines cannot interpret meaning
Pipelines cannot:
- infer intent  
- assign semantics  
- reinterpret names  
- reinterpret content  

Pipelines are non‑semantic.

## 4.2 Pipelines cannot reinterpret structure
Pipelines cannot:
- reinterpret workflow order  
- reinterpret routing transitions  
- reinterpret adjacency  
- reinterpret placement  
- reinterpret geometry  

Structure is taken as‑is.

---

# 5. Pipeline Mutation Rules

## 5.1 Pipelines cannot mutate upstream domains
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

Pipelines are downstream.

## 5.2 Pipelines cannot create new domains
Pipelines cannot create:
- new workflow types  
- new routing types  
- new adjacency types  
- new semantics  

Pipelines are not generative.

---

# 6. Pipeline Boundary Rules

## 6.1 Pipelines cannot cross domain boundaries
Pipelines cannot enter:
- semantic domains  
- registry internals  
- naming rules  
- geometry definitions  
- invariant definitions  

Pipelines remain inside the pipeline domain.

## 6.2 Pipelines cannot fuse with other domains
Pipelines cannot become:
- workflow logic  
- routing logic  
- engine logic  
- semantic logic  
- geometry logic  

Fusion is contamination.

---

# 7. Pipeline Execution Rules

## 7.1 Pipelines define execution, not meaning
Pipelines may:
- execute workflow steps  
- execute routing transitions  
- maintain ephemeral execution state  
- enforce execution boundaries  

Pipelines may not:
- define semantic branching  
- define policy logic  
- define interpretive behavior  

## 7.2 Pipelines cannot override upstream constraints
Pipelines cannot:
- bypass workflow order  
- bypass routing transitions  
- bypass adjacency  
- bypass placement  
- bypass engine membranes  

Upstream physics is immutable.

---

# 8. Pipeline Stability Rules

## 8.1 Pipelines must be deterministic
Given the same:
- workflow  
- routing tables  
- adjacency/placement  
- pipeline structure  

Pipelines must produce the same execution behavior.

## 8.2 Pipelines cannot drift
Pipelines cannot:
- reinterpret themselves  
- accumulate meaning  
- change behavior over time  

Pipelines are stable.

