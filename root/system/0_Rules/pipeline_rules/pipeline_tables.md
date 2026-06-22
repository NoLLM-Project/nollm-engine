# Pipeline Tables

Pipeline tables define the structural mappings that pipelines may use to determine valid execution stages, transitions, and structural references to workflows and routing.  
Pipeline tables are downstream of workflow tables and routing tables, and upstream of concrete execution.

Pipeline tables are structural, non‑semantic, non‑interpretive, and non‑generative.

---

# 1. Pipeline Table Definition Rules

## 1.1 A pipeline table is a structural execution map
A pipeline table may contain:
- pipeline stage → pipeline stage transitions  
- pipeline stage → workflow step references  
- pipeline stage → routing transition references  
- pipeline stage → structural execution conditions (non‑semantic)  

These are mechanical mappings.

## 1.2 A pipeline table cannot contain semantic information
Forbidden table contents:
- meaning  
- identity  
- categories  
- content  
- policy  
- interpretation  

Pipeline tables cannot encode semantics.

---

# 2. Pipeline Table Position Rules

## 2.1 Pipeline tables are downstream of workflow tables
Pipeline tables must:
- consume workflow structure  
- respect workflow order  
- reference workflow transitions structurally  

Pipeline tables cannot mutate workflows.

## 2.2 Pipeline tables are downstream of routing tables
Pipeline tables must:
- consume routing transitions  
- respect routing boundaries  
- reference routing structure mechanically  

Pipeline tables cannot mutate routing.

## 2.3 Pipeline tables are downstream of invariants and geometry
Pipeline tables cannot:
- redefine geometry  
- redefine adjacency  
- redefine placement  
- redefine invariants  

Upstream physics is immutable.

---

# 3. Pipeline Table Visibility Rules

## 3.1 Pipeline tables may only expose structural surfaces
Allowed visibility:
- pipeline stage order  
- pipeline transitions  
- workflow step references  
- routing transition references  
- structural execution boundaries  

## 3.2 Pipeline tables may not expose upstream domains
Forbidden visibility:
- geometry definitions  
- naming rules  
- invariants  
- registry internals  
- semantic metadata  

Pipeline tables cannot reveal upstream physics.

---

# 4. Pipeline Table Interpretation Rules

## 4.1 Pipelines cannot interpret pipeline tables semantically
Pipelines cannot:
- infer intent  
- assign semantics  
- reinterpret names  
- reinterpret content  

Pipeline tables are mechanical.

## 4.2 Pipelines cannot reinterpret table structure
Pipelines cannot:
- reinterpret workflow transitions  
- reinterpret routing transitions  
- reinterpret adjacency  
- reinterpret placement  
- reinterpret geometry  

Structure is taken as‑is.

---

# 5. Pipeline Table Mutation Rules

## 5.1 Pipeline tables cannot mutate upstream domains
Pipeline tables cannot change:
- workflows  
- routing tables  
- routing transitions  
- geometry  
- adjacency  
- placement  
- naming  
- categories  
- invariants  

Pipeline tables are downstream.

## 5.2 Pipeline tables cannot generate new domains
Pipeline tables cannot create:
- new pipeline types  
- new workflow types  
- new routing types  
- new adjacency types  
- new semantics  

Pipeline tables are not generative.

---

# 6. Pipeline Table Boundary Rules

## 6.1 Pipeline tables cannot cross domain boundaries
Pipeline tables cannot include:
- semantic metadata  
- registry metadata  
- naming metadata  
- geometry definitions  

Pipeline tables remain inside the pipeline domain.

## 6.2 Pipeline tables cannot fuse with other domains
Pipeline tables cannot become:
- workflow logic  
- routing logic  
- engine logic  
- semantic logic  
- geometry logic  

Fusion is contamination.

---

# 7. Pipeline Table Error Rules

## 7.1 Pipeline tables may only express structural errors
Allowed:
- missing pipeline stages  
- invalid pipeline transitions  
- invalid workflow step references  
- invalid routing transition references  
- malformed pipeline table structure  

## 7.2 Pipeline tables may not express semantic errors
Forbidden:
- meaning errors  
- identity errors  
- category errors  
- content errors  

Semantic errors are upstream.

---

# 8. Pipeline Table Stability Rules

## 8.1 Pipeline tables must be deterministic
Given the same:
- workflow structure  
- routing tables  
- adjacency/placement  
- pipeline structure  

Pipeline tables must produce the same transitions.

## 8.2 Pipeline tables cannot drift
Pipeline tables cannot:
- reinterpret themselves  
- accumulate meaning  
- change behavior over time  

Pipeline tables are stable.

