# Workflow Transition Rules

Workflow transition rules define what a workflow transition is, how transitions may be used inside workflows, and what transitions are forbidden to do.  
Workflow transitions are structural, non‑semantic, non‑interpretive, and strictly upstream of routing transitions.

A workflow transition is a **structural reference** to a movement that routing will later execute.

---

# 1. Transition Definition Rules

## 1.1 A workflow transition is a structural reference
A workflow transition may contain:
- a reference to a routing transition  
- a reference to a workflow step boundary  
- a structural condition (non‑semantic)  
- an ordered link between workflow steps  

These are mechanical and non‑semantic.

## 1.2 A workflow transition cannot contain semantic information
Forbidden transition contents:
- meaning  
- identity  
- categories  
- content  
- policy  
- interpretation  

Workflow transitions cannot encode semantics.

---

# 2. Transition Position Rules

## 2.1 Workflow transitions are upstream of routing transitions
Workflow transitions:
- define the sequence  
- define the structural order  
- reference routing transitions  

Routing transitions execute downstream.

## 2.2 Workflow transitions are downstream of invariants and geometry
Workflow transitions cannot:
- redefine geometry  
- redefine adjacency  
- redefine placement  
- redefine invariants  

Upstream physics is immutable.

---

# 3. Transition Visibility Rules

## 3.1 Workflow transitions may only see structural surfaces
Allowed visibility:
- workflow step order  
- routing transition references  
- adjacency/placement consequences (via routing references)  

## 3.2 Workflow transitions may not see upstream domains
Forbidden visibility:
- geometry definitions  
- naming rules  
- invariants  
- registry internals  
- semantic metadata  

Workflow transitions cannot see upstream physics.

---

# 4. Transition Interpretation Rules

## 4.1 Workflow transitions cannot interpret meaning
Workflow transitions cannot:
- infer intent  
- assign semantics  
- reinterpret names  
- reinterpret content  

Transitions are non‑semantic.

## 4.2 Workflow transitions cannot reinterpret structure
Workflow transitions cannot:
- reinterpret adjacency  
- reinterpret placement  
- reinterpret geometry  
- reinterpret routing transitions  

Structure is taken as‑is.

---

# 5. Transition Mutation Rules

## 5.1 Workflow transitions cannot mutate upstream domains
Workflow transitions cannot change:
- geometry  
- adjacency  
- placement  
- naming  
- categories  
- invariants  

Workflow transitions are downstream.

## 5.2 Workflow transitions cannot create new domains
Workflow transitions cannot create:
- new adjacency types  
- new placement types  
- new routing types  
- new semantics  

Workflow transitions are not generative.

---

# 6. Transition Boundary Rules

## 6.1 Workflow transitions cannot cross domain boundaries
Workflow transitions cannot enter:
- semantic domains  
- registry internals  
- naming rules  
- geometry definitions  
- invariant definitions  

Workflow transitions remain inside the workflow domain.

## 6.2 Workflow transitions cannot fuse with other domains
Workflow transitions cannot become:
- routing logic  
- engine logic  
- semantic logic  
- geometry logic  

Fusion is contamination.

---

# 7. Transition Validity Rules

## 7.1 A workflow transition is valid only if upstream structure permits it
A workflow transition must satisfy:
- valid workflow step order  
- valid routing transition reference  
- valid structural boundaries  

## 7.2 A workflow transition cannot override upstream constraints
Workflow transitions cannot:
- bypass adjacency  
- bypass placement  
- bypass geometry  
- bypass engine membranes  

Upstream physics is immutable.

---

# 8. Transition Error Rules

## 8.1 Workflow transitions may only express structural errors
Allowed:
- invalid workflow step reference  
- invalid routing transition reference  
- malformed workflow transition structure  

## 8.2 Workflow transitions may not express semantic errors
Forbidden:
- meaning errors  
- identity errors  
- category errors  
- content errors  

Semantic errors are upstream.

---

# 9. Transition Collapse Rules

## 9.1 Workflow transition collapse is structural
Collapse occurs when:
- a workflow step cannot structurally transition  
- a routing reference is invalid  
- workflow structure is malformed  

## 9.2 Workflow transition collapse cannot propagate upstream
Collapse cannot:
- mutate workflow identity  
- reinterpret workflow meaning  
- alter workflow structure  

Collapse is contained.

---

# 10. Transition Stability Rules

## 10.1 Workflow transitions must be deterministic
Given the same:
- workflow structure  
- routing tables  
- adjacency/placement  

Workflow transitions must resolve identically.

## 10.2 Workflow transitions cannot drift
Workflow transitions cannot:
- reinterpret themselves  
- accumulate meaning  
- change behavior over time  

Workflow transitions are stable.

