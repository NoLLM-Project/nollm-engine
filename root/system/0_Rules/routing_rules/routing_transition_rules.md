# Routing Transition Rules

Routing transition rules define what a routing transition is, how transitions may be used, and what transitions are forbidden to do.  
Transitions are structural, non‑semantic, non‑interpretive, and strictly downstream of geometry, adjacency, placement, and engine membranes.

A transition is a mechanical movement from one valid structural position to another.

---

# 1. Transition Definition Rules

## 1.1 A routing transition is a structural movement
A transition may represent:
- adjacency‑based movement  
- placement‑based movement  
- coordinate‑valid movement  
- workflow‑referenced movement  

These are mechanical expressions of upstream structure.

## 1.2 A routing transition cannot contain semantic information
Forbidden transition contents:
- meaning  
- identity  
- categories  
- content  
- policy  
- interpretation  

Transitions cannot encode semantics.

---

# 2. Transition Visibility Rules

## 2.1 Transitions may only expose structural surfaces
Allowed visibility:
- source coordinate  
- destination coordinate  
- adjacency reference  
- placement reference  
- workflow step reference  

## 2.2 Transitions may not expose upstream domains
Forbidden visibility:
- geometry definitions  
- naming rules  
- invariants  
- registry internals  
- semantic metadata  

Transitions cannot reveal upstream physics.

---

# 3. Transition Interpretation Rules

## 3.1 Routing cannot interpret transitions semantically
Routing cannot:
- infer intent  
- assign meaning  
- reinterpret names  
- reinterpret content  

Transitions are mechanical.

## 3.2 Routing cannot reinterpret transition structure
Routing cannot:
- reinterpret adjacency  
- reinterpret placement  
- reinterpret coordinate relationships  
- reinterpret workflow semantics  

Structure is taken as‑is.

---

# 4. Transition Mutation Rules

## 4.1 Transitions cannot mutate upstream domains
Transitions cannot change:
- geometry  
- adjacency definitions  
- placement rules  
- naming  
- categories  
- invariants  

Transitions are downstream.

## 4.2 Transitions cannot generate new domains
Transitions cannot create:
- new adjacency types  
- new placement types  
- new movement types  
- new semantics  

Transitions are not generative.

---

# 5. Transition Boundary Rules

## 5.1 Transitions cannot cross domain boundaries
Transitions cannot include:
- semantic metadata  
- registry metadata  
- naming metadata  
- geometry definitions  

Transitions remain inside routing.

## 5.2 Transitions cannot fuse with other domains
Transitions cannot become:
- workflow logic  
- engine logic  
- semantic logic  
- geometry logic  

Fusion is contamination.

---

# 6. Transition Validity Rules

## 6.1 A transition is valid only if upstream structure permits it
A transition must satisfy:
- adjacency validity  
- placement validity  
- coordinate validity  
- workflow reference validity  

## 6.2 A transition cannot override upstream constraints
Transitions cannot:
- bypass boundaries  
- violate geometry  
- violate placement  
- create new adjacency  

Upstream physics is immutable.

---

# 7. Transition Error Rules

## 7.1 Transitions may only express structural errors
Allowed:
- invalid adjacency  
- invalid placement  
- invalid coordinate relationship  
- missing transition entries  

## 7.2 Transitions may not express semantic errors
Forbidden:
- meaning errors  
- identity errors  
- category errors  
- content errors  

Semantic errors are upstream.

---

# 8. Transition Stability Rules

## 8.1 Transitions must be deterministic
Given the same:
- adjacency  
- placement  
- workflow  
- routing tables  

Transitions must resolve identically.

## 8.2 Transitions cannot drift
Transitions cannot:
- reinterpret themselves  
- accumulate meaning  
- change behavior over time  

Transitions are stable.

