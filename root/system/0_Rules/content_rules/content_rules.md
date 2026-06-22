# Content Rules

Content rules define what content is, what it is allowed to contain, and what it is forbidden to do.  
Content is the downstream material produced or transformed by execution.  
Content is not semantic, not interpretive, not policy, and not identity.

Content is the lowest structural domain before any semantic or user‑facing layer.

Content is mechanical material.

---

# 1. Content Definition Rules

## 1.1 Content is material produced or transformed by execution
Content may contain:
- mechanical data  
- structural outputs  
- deterministic transformations  
- ephemeral material states  
- execution‑produced artifacts  

Content does not contain meaning.

## 1.2 Content cannot contain semantic information
Forbidden content:
- meaning  
- identity  
- categories  
- policy  
- interpretation  
- user semantics  

Content is non‑semantic.

---

# 2. Content Position Rules

## 2.1 Content is downstream of execution
Content must:
- be produced by execution  
- obey execution boundaries  
- reflect execution operations  

Content cannot mutate execution.

## 2.2 Content is downstream of pipelines, workflows, routing, and engine
Content must:
- reflect pipeline stage outputs  
- reflect workflow order (via execution)  
- reflect routing transitions (via execution)  

Content cannot mutate upstream domains.

## 2.3 Content is downstream of invariants and geometry
Content cannot:
- redefine geometry  
- redefine adjacency  
- redefine placement  
- redefine invariants  

Upstream physics is immutable.

---

# 3. Content Visibility Rules

## 3.1 Content may only see execution surfaces
Content may access:
- execution operation outputs  
- execution boundaries  
- execution transitions (as material consequences)  

Content cannot see upstream structure.

## 3.2 Content may not see upstream domains
Forbidden visibility:
- pipeline structure  
- workflow structure  
- routing tables  
- geometry definitions  
- naming rules  
- invariants  
- registry internals  
- semantic metadata  

Content cannot reveal upstream physics.

---

# 4. Content Interpretation Rules

## 4.1 Content cannot interpret meaning
Content cannot:
- infer intent  
- assign semantics  
- reinterpret names  
- reinterpret categories  
- reinterpret content  

Content is inert material.

## 4.2 Content cannot reinterpret structure
Content cannot:
- reinterpret execution transitions  
- reinterpret pipeline transitions  
- reinterpret workflow transitions  
- reinterpret routing transitions  
- reinterpret adjacency  
- reinterpret placement  
- reinterpret geometry  

Structure is taken as‑is.

---

# 5. Content Mutation Rules

## 5.1 Content cannot mutate upstream domains
Content cannot change:
- execution  
- pipelines  
- workflows  
- routing  
- geometry  
- adjacency  
- placement  
- naming  
- categories  
- invariants  

Content is downstream.

## 5.2 Content cannot create new domains
Content cannot create:
- new execution types  
- new pipeline types  
- new workflow types  
- new routing types  
- new adjacency types  
- new semantics  

Content is not generative.

---

# 6. Content Boundary Rules

## 6.1 Content cannot cross domain boundaries
Content cannot enter:
- semantic domains  
- registry internals  
- naming rules  
- geometry definitions  
- invariant definitions  

Content remains inside the content domain.

## 6.2 Content cannot fuse with other domains
Content cannot become:
- execution logic  
- pipeline logic  
- workflow logic  
- routing logic  
- engine logic  
- semantic logic  
- geometry logic  

Fusion is contamination.

---

# 7. Content Material Rules

## 7.1 Content is material, not meaning
Content may:
- store mechanical data  
- store structural outputs  
- store deterministic transformations  
- store ephemeral material states  

Content may not:
- encode meaning  
- encode identity  
- encode categories  
- encode semantics  

## 7.2 Content cannot override upstream constraints
Content cannot:
- bypass execution order  
- bypass pipeline order  
- bypass routing transitions  
- bypass adjacency  
- bypass placement  
- bypass engine membranes  

Upstream physics is immutable.

---

# 8. Content Stability Rules

## 8.1 Content must be deterministic
Given the same:
- execution structure  
- pipeline structure  
- workflow structure  
- routing tables  
- adjacency/placement  

Content must be identical.

## 8.2 Content cannot drift
Content cannot:
- reinterpret itself  
- accumulate meaning  
- change behavior over time  

Content is stable.

