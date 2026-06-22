# Workflow Rules

Workflow rules define what a workflow is, what it is allowed to do, and what it is forbidden to do.  
Workflows are upstream of routing but downstream of invariants, geometry, naming, and categories.

A workflow is a **structural sequence**.  
A workflow is **not** semantic, interpretive, or generative.

---

# 1. Workflow Definition Rules

## 1.1 A workflow is a structural sequence
A workflow may contain:
- ordered steps  
- structural transitions between steps  
- references to routing transitions  
- references to structural conditions  

These are mechanical and non‑semantic.

## 1.2 A workflow cannot contain semantic information
Forbidden workflow contents:
- meaning  
- identity  
- categories  
- content  
- policy  
- interpretation  

Workflows cannot encode semantics.

---

# 2. Workflow Position Rules

## 2.1 Workflows are upstream of routing
Routing must:
- consume workflow structure  
- obey workflow order  
- respect workflow boundaries  

Routing cannot mutate workflows.

## 2.2 Workflows are downstream of invariants and geometry
Workflows may not:
- redefine geometry  
- redefine adjacency  
- redefine placement  
- redefine invariants  

Workflows operate within upstream physics.

---

# 3. Workflow Visibility Rules

## 3.1 Workflows may only see structural surfaces
Allowed visibility:
- adjacency  
- placement  
- coordinate relationships  
- routing transition references  

## 3.2 Workflows may not see upstream domains
Forbidden visibility:
- geometry definitions  
- naming rules  
- invariants  
- registry internals  
- semantic metadata  

Workflows cannot see upstream physics.

---

# 4. Workflow Interpretation Rules

## 4.1 Workflows cannot interpret meaning
Workflows cannot:
- infer intent  
- assign semantics  
- reinterpret names  
- reinterpret content  

Workflows are non‑semantic.

## 4.2 Workflows cannot reinterpret structure
Workflows cannot:
- reinterpret adjacency  
- reinterpret placement  
- reinterpret geometry  
- reinterpret routing transitions  

Structure is taken as‑is.

---

# 5. Workflow Mutation Rules

## 5.1 Workflows cannot mutate upstream domains
Workflows cannot change:
- geometry  
- adjacency  
- placement  
- naming  
- categories  
- invariants  

Workflows are downstream.

## 5.2 Workflows cannot create new domains
Workflows cannot create:
- new adjacency types  
- new placement types  
- new routing types  
- new semantics  

Workflows are not generative.

---

# 6. Workflow Boundary Rules

## 6.1 Workflows cannot cross domain boundaries
Workflows cannot enter:
- semantic domains  
- registry internals  
- naming rules  
- geometry definitions  
- invariant definitions  

Workflows remain inside the workflow domain.

## 6.2 Workflows cannot fuse with other domains
Workflows cannot become:
- routing logic  
- engine logic  
- semantic logic  
- geometry logic  

Fusion is contamination.

---

# 7. Workflow Execution Rules

## 7.1 Workflows define order, not meaning
Workflows may:
- define step order  
- define structural transitions  
- reference routing transitions  

Workflows may not:
- define semantic branching  
- define policy logic  
- define interpretive behavior  

## 7.2 Workflows cannot override routing or engine constraints
Workflows cannot:
- bypass adjacency  
- bypass placement  
- bypass geometry  
- bypass engine membranes  

Upstream physics is immutable.

---

# 8. Workflow Error Rules

## 8.1 Workflows may only express structural errors
Allowed:
- missing steps  
- invalid transitions  
- malformed routing references  

## 8.2 Workflows may not express semantic errors
Forbidden:
- meaning errors  
- identity errors  
- category errors  
- content errors  

Semantic errors are upstream.

---

# 9. Workflow Collapse Rules

## 9.1 Workflow collapse is structural
Workflow collapse occurs when:
- step order cannot be executed structurally  
- transitions reference invalid routing entries  
- workflow structure is malformed  

## 9.2 Workflow collapse cannot propagate upstream
Workflow collapse cannot:
- mutate workflow identity  
- reinterpret workflow meaning  
- alter workflow structure  

Collapse is contained.

---

# 10. Workflow Stability Rules

## 10.1 Workflows must be deterministic
Given the same:
- adjacency  
- placement  
- routing tables  
- workflow structure  

Workflows must produce the same sequence.

## 10.2 Workflows cannot drift
Workflows cannot:
- reinterpret themselves  
- accumulate meaning  
- change behavior over time  

Workflows are stable.

