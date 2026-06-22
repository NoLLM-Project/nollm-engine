# Routing Tables

Routing tables define the structural mappings that routing may use to determine valid movement.  
Routing tables are downstream of geometry, adjacency, placement, and engine membranes.  
Routing tables are non‑semantic, non‑interpretive, and non‑generative.

Routing tables cannot encode meaning, identity, policy, or intent.

---

# 1. Routing Table Definition Rules

## 1.1 A routing table is a structural map
A routing table may contain:
- coordinate → coordinate transitions  
- workflow step → routing transition references  
- adjacency‑derived transitions  
- placement‑derived transitions  

These are mechanical mappings.

## 1.2 A routing table cannot contain semantic information
Forbidden table contents:
- meaning  
- identity  
- categories  
- content  
- policy  
- interpretation  

Routing tables cannot encode semantics.

---

# 2. Routing Table Visibility Rules

## 2.1 Routing tables must expose only structural surfaces
Allowed visibility:
- adjacency references  
- placement references  
- coordinate relationships  
- workflow step indices  

## 2.2 Routing tables may not expose upstream domains
Forbidden visibility:
- geometry definitions  
- naming rules  
- invariants  
- registry internals  
- semantic metadata  

Routing tables cannot reveal upstream physics.

---

# 3. Routing Table Interpretation Rules

## 3.1 Routing cannot interpret routing tables semantically
Routing cannot:
- infer intent  
- assign meaning  
- reinterpret names  
- reinterpret content  

Routing tables are mechanical.

## 3.2 Routing cannot reinterpret table structure
Routing cannot:
- reinterpret adjacency  
- reinterpret placement  
- reinterpret coordinate relationships  
- reinterpret workflow semantics  

Structure is taken as‑is.

---

# 4. Routing Table Mutation Rules

## 4.1 Routing tables cannot mutate upstream domains
Routing tables cannot change:
- geometry  
- adjacency definitions  
- placement rules  
- naming  
- categories  
- invariants  

Routing tables are downstream.

## 4.2 Routing tables cannot generate new domains
Routing tables cannot create:
- new adjacency types  
- new placement types  
- new movement types  
- new semantics  

Routing tables are not generative.

---

# 5. Routing Table Boundary Rules

## 5.1 Routing tables cannot cross domain boundaries
Routing tables cannot include:
- semantic metadata  
- registry metadata  
- naming metadata  
- geometry definitions  

Routing tables remain inside routing.

## 5.2 Routing tables cannot fuse with other domains
Routing tables cannot become:
- workflow logic  
- engine logic  
- semantic logic  
- geometry logic  

Fusion is contamination.

---

# 6. Routing Table Loading Rules

## 6.1 Routing tables must be fully resolved before routing execution
Routing tables must be:
- pre‑validated  
- structurally complete  
- non‑semantic  
- non‑interpretive  

## 6.2 Routing tables cannot load upstream domains
Routing tables cannot load:
- invariants  
- naming rules  
- geometry definitions  
- registry internals  

Loading is structural only.

---

# 7. Routing Table Error Rules

## 7.1 Routing tables may only express structural errors
Allowed:
- missing transitions  
- invalid adjacency references  
- invalid placement references  
- malformed coordinate relationships  

## 7.2 Routing tables may not express semantic errors
Forbidden:
- meaning errors  
- identity errors  
- category errors  
- content errors  

Semantic errors are upstream.

---

# 8. Routing Table Stability Rules

## 8.1 Routing tables must be deterministic
Given the same:
- adjacency  
- placement  
- workflow  
- coordinates  

Routing tables must produce the same transitions.

## 8.2 Routing tables cannot drift
Routing tables cannot:
- reinterpret themselves  
- accumulate meaning  
- change behavior over time  

Routing tables are stable.

