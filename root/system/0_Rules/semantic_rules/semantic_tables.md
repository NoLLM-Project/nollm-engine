# Semantic Tables

Semantic tables define the structural maps used by the semantic domain to organize semantic types, semantic relationships, and semantic interpretations.  
Semantic tables are interpretive, not structural.  
Semantic tables do not encode physics, operations, or mechanics.

Semantic tables are downstream of content and upstream of user-facing layers.

---

# 1. Semantic Table Definition Rules

## 1.1 A semantic table is a map of meaning-bearing entities
A semantic table may contain:
- semantic type → semantic attributes  
- semantic type → semantic relationships  
- semantic type → semantic contexts  
- semantic type → semantic annotations  
- content → semantic interpretation mappings  

These are interpretive mappings.

## 1.2 A semantic table cannot contain structural information
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
- content state transitions  

Semantic tables cannot encode physics or mechanics.

---

# 2. Semantic Table Position Rules

## 2.1 Semantic tables are downstream of content
Semantic tables must:
- consume content interpretations  
- map content to semantic types  
- map content to semantic relationships  

Semantic tables cannot mutate content.

## 2.2 Semantic tables are downstream of all structural domains
Semantic tables cannot:
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

Semantic tables cannot reinterpret structure.

## 2.3 Semantic tables are upstream of user-facing layers
Semantic tables provide meaning to:
- UI  
- narrative  
- human-facing systems  

Semantic tables do not perform operations.

---

# 3. Semantic Table Visibility Rules

## 3.1 Semantic tables may only expose semantic surfaces
Allowed visibility:
- semantic types  
- semantic attributes  
- semantic relationships  
- semantic contexts  
- semantic annotations  
- content → semantic interpretation mappings  

## 3.2 Semantic tables may not expose upstream structural domains
Forbidden visibility:
- pipeline structure  
- workflow structure  
- routing tables  
- geometry definitions  
- naming rules  
- invariants  
- registry internals  

Semantic tables cannot reveal upstream physics.

---

# 4. Semantic Table Interpretation Rules

## 4.1 Semantic tables may interpret meaning
Semantic tables may:
- group semantic types  
- define semantic hierarchies (interpretive only)  
- map semantic relationships  
- map semantic contexts  
- map semantic annotations  
- map content to semantic meaning  

## 4.2 Semantic tables may not reinterpret structure
Semantic tables may not:
- reinterpret transitions  
- reinterpret boundaries  
- reinterpret adjacency  
- reinterpret placement  
- reinterpret geometry  

Semantic tables interpret content, not structure.

---

# 5. Semantic Table Mutation Rules

## 5.1 Semantic tables cannot mutate upstream domains
Semantic tables cannot change:
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

Semantic tables are downstream.

## 5.2 Semantic tables cannot generate structural domains
Semantic tables cannot create:
- new content types  
- new execution types  
- new pipeline types  
- new workflow types  
- new routing types  
- new adjacency types  
- new invariants  

Semantic tables are not structural.

---

# 6. Semantic Table Boundary Rules

## 6.1 Semantic tables cannot cross into structural domains
Semantic tables cannot enter:
- engine logic  
- routing logic  
- workflow logic  
- pipeline logic  
- execution logic  
- content logic  

Semantic tables remain interpretive.

## 6.2 Semantic tables cannot fuse with structural domains
Semantic tables cannot become:
- content  
- execution  
- pipeline  
- workflow  
- routing  
- engine  
- geometry  

Fusion is contamination.

---

# 7. Semantic Table Error Rules

## 7.1 Semantic tables may only express semantic errors
Allowed:
- missing semantic type  
- invalid semantic relationship  
- invalid semantic annotation  
- malformed semantic table structure  

## 7.2 Semantic tables may not express structural errors
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

Structural errors are upstream.

---

# 8. Semantic Table Stability Rules

## 8.1 Semantic tables must be deterministic
Given the same:
- content  
- semantic types  
- semantic relationships  
- semantic interpretation rules  

Semantic tables must produce the same mappings.

## 8.2 Semantic tables cannot drift
Semantic tables cannot:
- reinterpret themselves  
- accumulate meaning  
- change behavior over time  

Semantic tables are stable.

