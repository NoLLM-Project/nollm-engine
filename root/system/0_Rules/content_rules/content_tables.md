# Content Tables

Content tables define the structural mappings that content may use to determine valid material states, transitions, and structural references to execution operations.  
Content tables are downstream of execution tables and represent the lowest structural layer before any semantic or user‑facing interpretation.

Content tables are structural, mechanical, non‑semantic, non‑interpretive, and non‑generative.

---

# 1. Content Table Definition Rules

## 1.1 A content table is a structural material map
A content table may contain:
- content state → content state transitions  
- content state → execution operation references  
- content state → execution transition references  
- content state → structural material conditions (non‑semantic)  
- content state → content boundary references  

These are mechanical mappings.

## 1.2 A content table cannot contain semantic information
Forbidden table contents:
- meaning  
- identity  
- categories  
- content semantics  
- policy  
- interpretation  

Content tables cannot encode semantics.

---

# 2. Content Table Position Rules

## 2.1 Content tables are downstream of execution tables
Content tables must:
- consume execution structure  
- respect execution operation order  
- reference execution transitions structurally  

Content tables cannot mutate execution.

## 2.2 Content tables are downstream of pipelines, workflows, and routing
Content tables must:
- reflect pipeline stage outputs (via execution)  
- reflect workflow order (via execution)  
- reflect routing transitions (via execution)  

Content tables cannot mutate upstream domains.

## 2.3 Content tables are downstream of invariants and geometry
Content tables cannot:
- redefine geometry  
- redefine adjacency  
- redefine placement  
- redefine invariants  

Upstream physics is immutable.

---

# 3. Content Table Visibility Rules

## 3.1 Content tables may only expose structural surfaces
Allowed visibility:
- content state order  
- content transitions  
- execution operation references  
- execution transition references  
- structural material boundaries  

## 3.2 Content tables may not expose upstream domains
Forbidden visibility:
- pipeline structure  
- workflow structure  
- routing tables  
- geometry definitions  
- naming rules  
- invariants  
- registry internals  
- semantic metadata  

Content tables cannot reveal upstream physics.

---

# 4. Content Table Interpretation Rules

## 4.1 Content cannot interpret content tables semantically
Content cannot:
- infer intent  
- assign semantics  
- reinterpret names  
- reinterpret categories  
- reinterpret content  

Content tables are mechanical.

## 4.2 Content cannot reinterpret table structure
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

# 5. Content Table Mutation Rules

## 5.1 Content tables cannot mutate upstream domains
Content tables cannot change:
- execution  
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

Content tables are downstream.

## 5.2 Content tables cannot generate new domains
Content tables cannot create:
- new content types  
- new execution types  
- new pipeline types  
- new workflow types  
- new routing types  
- new adjacency types  
- new semantics  

Content tables are not generative.

---

# 6. Content Table Boundary Rules

## 6.1 Content tables cannot cross domain boundaries
Content tables cannot include:
- semantic metadata  
- registry metadata  
- naming metadata  
- geometry definitions  

Content tables remain inside the content domain.

## 6.2 Content tables cannot fuse with other domains
Content tables cannot become:
- execution logic  
- pipeline logic  
- workflow logic  
- routing logic  
- engine logic  
- semantic logic  
- geometry logic  

Fusion is contamination.

---

# 7. Content Table Error Rules

## 7.1 Content tables may only express structural errors
Allowed:
- missing content states  
- invalid content transitions  
- invalid execution operation references  
- invalid execution transition references  
- malformed content table structure  

## 7.2 Content tables may not express semantic errors
Forbidden:
- meaning errors  
- identity errors  
- category errors  
- content semantics errors  

Semantic errors are upstream.

---

# 8. Content Table Stability Rules

## 8.1 Content tables must be deterministic
Given the same:
- execution structure  
- pipeline structure  
- workflow structure  
- routing tables  
- adjacency/placement  
- content structure  

Content tables must produce the same transitions.

## 8.2 Content tables cannot drift
Content tables cannot:
- reinterpret themselves  
- accumulate meaning  
- change behavior over time  

Content tables are stable.

