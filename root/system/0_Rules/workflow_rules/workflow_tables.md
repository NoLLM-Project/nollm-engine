# Workflow Tables

Workflow tables define the structural mappings that workflows may use to determine valid step sequences, transitions, and structural references to routing.  
Workflow tables are upstream of routing tables and downstream of invariants, geometry, and naming.

Workflow tables are structural, non‑semantic, non‑interpretive, and non‑generative.

---

# 1. Workflow Table Definition Rules

## 1.1 A workflow table is a structural map
A workflow table may contain:
- workflow step → workflow step transitions  
- workflow step → routing transition references  
- workflow step → structural conditions (non‑semantic)  
- workflow step → workflow boundary references  

These are mechanical mappings.

## 1.2 A workflow table cannot contain semantic information
Forbidden table contents:
- meaning  
- identity  
- categories  
- content  
- policy  
- interpretation  

Workflow tables cannot encode semantics.

---

# 2. Workflow Table Position Rules

## 2.1 Workflow tables are upstream of routing tables
Workflow tables:
- define workflow structure  
- define workflow transitions  
- reference routing transitions  

Routing tables execute downstream.

## 2.2 Workflow tables are downstream of invariants and geometry
Workflow tables cannot:
- redefine geometry  
- redefine adjacency  
- redefine placement  
- redefine invariants  

Upstream physics is immutable.

---

# 3. Workflow Table Visibility Rules

## 3.1 Workflow tables may only expose structural surfaces
Allowed visibility:
- workflow step order  
- workflow transitions  
- routing transition references  
- structural workflow boundaries  

## 3.2 Workflow tables may not expose upstream domains
Forbidden visibility:
- geometry definitions  
- naming rules  
- invariants  
- registry internals  
- semantic metadata  

Workflow tables cannot reveal upstream physics.

---

# 4. Workflow Table Interpretation Rules

## 4.1 Workflows cannot interpret workflow tables semantically
Workflows cannot:
- infer intent  
- assign meaning  
- reinterpret names  
- reinterpret content  

Workflow tables are mechanical.

## 4.2 Workflows cannot reinterpret table structure
Workflows cannot:
- reinterpret adjacency  
- reinterpret placement  
- reinterpret geometry  
- reinterpret routing transitions  

Structure is taken as‑is.

---

# 5. Workflow Table Mutation Rules

## 5.1 Workflow tables cannot mutate upstream domains
Workflow tables cannot change:
- geometry  
- adjacency  
- placement  
- naming  
- categories  
- invariants  

Workflow tables are downstream.

## 5.2 Workflow tables cannot generate new domains
Workflow tables cannot create:
- new workflow types  
- new routing types  
- new adjacency types  
- new semantics  

Workflow tables are not generative.

---

# 6. Workflow Table Boundary Rules

## 6.1 Workflow tables cannot cross domain boundaries
Workflow tables cannot include:
- semantic metadata  
- registry metadata  
- naming metadata  
- geometry definitions  

Workflow tables remain inside the workflow domain.

## 6.2 Workflow tables cannot fuse with other domains
Workflow tables cannot become:
- routing logic  
- engine logic  
- semantic logic  
- geometry logic  

Fusion is contamination.

---

# 7. Workflow Table Error Rules

## 7.1 Workflow tables may only express structural errors
Allowed:
- missing workflow steps  
- invalid workflow transitions  
- invalid routing transition references  
- malformed workflow table structure  

## 7.2 Workflow tables may not express semantic errors
Forbidden:
- meaning errors  
- identity errors  
- category errors  
- content errors  

Semantic errors are upstream.

---

# 8. Workflow Table Stability Rules

## 8.1 Workflow tables must be deterministic
Given the same:
- workflow structure  
- routing tables  
- adjacency/placement  

Workflow tables must produce the same transitions.

## 8.2 Workflow tables cannot drift
Workflow tables cannot:
- reinterpret themselves  
- accumulate meaning  
- change behavior over time  

Workflow tables are stable.

