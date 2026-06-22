# User-Facing Tables

User-facing tables define the structural maps used by the user-facing domain to organize expressive types, interactions, and rendering surfaces.  
User-facing tables are expressive, not interpretive or structural.  
User-facing tables cannot mutate semantics, content, or any upstream domain.

User-facing tables are downstream of semantics and upstream of application logic.

---

# 1. User-Facing Table Definition Rules

## 1.1 A user-facing table is a map of expressive surfaces
A user-facing table may contain:
- user-facing type → rendering configuration  
- user-facing type → interaction configuration  
- user-facing type → layout configuration  
- semantic type → user-facing representation  
- semantic annotation → user-facing badge or marker  
- semantic context → user-facing contextual surface  

These are expressive mappings.

## 1.2 A user-facing table cannot contain structural information
Forbidden table contents:
- geometry  
- adjacency  
- placement  
- invariants  
- engine logic  
- routing transitions  
- workflow steps  
- pipeline stages  
- execution operations  
- content transitions  
- semantic interpretation logic  

User-facing tables cannot encode physics or interpretation.

---

# 2. User-Facing Table Position Rules

## 2.1 User-facing tables are downstream of semantics
User-facing tables must:
- consume semantic meaning  
- map semantic types to expressive surfaces  
- map semantic annotations to expressive markers  
- map semantic contexts to expressive banners  

User-facing tables cannot mutate semantics.

## 2.2 User-facing tables are downstream of all structural domains
User-facing tables cannot:
- reinterpret geometry  
- reinterpret adjacency  
- reinterpret placement  
- reinterpret naming rules  
- reinterpret categories  
- reinterpret engine behavior  
- reinterpret routing transitions  
- reinterpret workflow steps  
- reinterpret pipeline stages  
- reinterpret execution operations  
- reinterpret content states  

User-facing tables cannot reinterpret structure.

## 2.3 User-facing tables are upstream of application logic
User-facing tables provide:
- expressive configuration  
- rendering configuration  
- interaction configuration  

User-facing tables do not perform operations.

---

# 3. User-Facing Table Visibility Rules

## 3.1 User-facing tables may expose expressive surfaces only
Allowed visibility:
- user-facing types  
- user-facing components  
- user-facing layouts  
- semantic meaning rendered into surfaces  

## 3.2 User-facing tables may not expose upstream domains
Forbidden visibility:
- semantic tables  
- semantic relationships  
- semantic types  
- content states  
- execution operations  
- pipeline/workflow/routing structures  
- geometry definitions  
- naming rules  
- invariants  

User-facing tables cannot reveal upstream physics or meaning internals.

---

# 4. User-Facing Table Behavior Rules

## 4.1 User-facing tables may express meaning visually
Allowed:
- mapping semantic types to views  
- mapping semantic annotations to badges  
- mapping semantic contexts to banners  
- mapping semantic relationships to layout groupings  
- mapping semantic meaning to expressive components  

## 4.2 User-facing tables may not express structure
Forbidden:
- adjacency  
- placement  
- geometry  
- operational transitions  
- workflow order  
- pipeline order  
- execution order  
- content transitions  

User-facing tables express meaning, not mechanics.

---

# 5. User-Facing Table Mutation Rules

## 5.1 User-facing tables cannot mutate upstream domains
User-facing tables cannot change:
- semantics  
- content  
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

User-facing tables are downstream.

## 5.2 User-facing tables cannot generate structural domains
User-facing tables cannot create:
- new semantic types  
- new semantic relationships  
- new content types  
- new execution types  
- new pipeline types  
- new workflow types  
- new routing types  
- new adjacency types  
- new invariants  

User-facing tables are not structural.

---

# 6. User-Facing Table Boundary Rules

## 6.1 User-facing tables cannot cross into structural domains
User-facing tables cannot enter:
- engine logic  
- routing logic  
- workflow logic  
- pipeline logic  
- execution logic  
- content logic  
- semantic logic  

User-facing tables remain expressive.

## 6.2 User-facing tables cannot fuse with upstream domains
User-facing tables cannot become:
- semantics  
- content  
- execution  
- pipeline  
- workflow  
- routing  
- engine  
- geometry  

Fusion is contamination.

---

# 7. User-Facing Table Error Rules

## 7.1 User-facing tables may only express user-facing errors
Allowed:
- missing rendering configuration  
- invalid user-facing type  
- invalid interaction configuration  
- malformed layout mapping  

## 7.2 User-facing tables may not express structural or semantic errors
Forbidden:
- geometry errors  
- adjacency errors  
- placement errors  
- engine errors  
- routing errors  
- workflow errors  
- pipeline errors  
- execution errors  
- content errors  
- semantic errors  

Structural and semantic errors are upstream.

---

# 8. User-Facing Table Stability Rules

## 8.1 User-facing tables must be deterministic
Given the same:
- semantic meaning  
- user-facing types  
- expressive configuration  

The same user-facing mapping must be produced.

## 8.2 User-facing tables cannot drift
User-facing tables cannot:
- reinterpret semantics  
- accumulate meaning  
- adapt based on usage  
- evolve without explicit definition  

User-facing tables are stable.

