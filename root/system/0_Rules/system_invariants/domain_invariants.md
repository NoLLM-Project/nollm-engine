# Domain‑Specific Invariants

Domain‑specific invariants define the non‑negotiable physics each domain must obey.  
They prevent fusion, inversion, drift, and contamination across the system.

These invariants are structural, not semantic.

---

# 1. Structure Invariants

## 1.1 Structure is form, not meaning
Structure defines shapes, containers, and boundaries.  
Structure does not define semantics, identity, or interpretation.

## 1.2 Structure cannot mutate during execution
Execution cannot:
- change structure  
- create new structure  
- reinterpret structure  

## 1.3 Structure cannot fuse with other domains
Structure must remain separate from:
- engine  
- registry  
- semantics  
- content  

## 1.4 Structure is upstream of placement
Placement uses structure; structure does not use placement.

---

# 2. Engine Invariants

## 2.1 Engine executes; it does not interpret
The engine cannot:
- interpret meaning  
- infer intent  
- assign semantics  

## 2.2 Engine cannot mutate system physics
The engine cannot change:
- boundaries  
- geometry  
- categories  
- naming rules  

## 2.3 Engine cannot cross domain boundaries
The engine must not:
- access registry internals  
- modify structure  
- reinterpret geometry  

## 2.4 Engine is downstream of invariants
Invariants constrain the engine; the engine cannot constrain invariants.

---

# 3. Registry Invariants

## 3.1 Registry is structural, not semantic
The registry stores shapes and references, not meaning.

## 3.2 Registry cannot assign identity
Registry entries cannot:
- define identity  
- define semantics  
- define categories  

## 3.3 Registry cannot mutate upstream domains
Registry cannot change:
- structure  
- geometry  
- naming rules  

## 3.4 Registry cannot execute
Registry is passive; it does not run or interpret.

---

# 4. Semantics Invariants

## 4.1 Semantics is downstream of structure
Semantics may use structure; structure may not use semantics.

## 4.2 Semantics cannot alter physics
Semantics cannot:
- change geometry  
- change boundaries  
- change categories  
- change naming rules  

## 4.3 Semantics cannot drive execution
Execution is mechanical, not semantic.

## 4.4 Semantics cannot fuse with content
Semantics ≠ content.

---

# 5. Geometry Invariants

## 5.1 Geometry defines shape, not meaning
Geometry is non‑semantic and non‑interpretive.

## 5.2 Geometry cannot be mutated by execution
Execution cannot change:
- shapes  
- boundaries  
- dimensions  

## 5.3 Geometry is upstream of adjacency
Adjacency uses geometry; geometry does not use adjacency.

## 5.4 Geometry must remain isolated
Geometry cannot fuse with:
- placement  
- routing  
- semantics  
- registry  

---

# 6. Placement Invariants

## 6.1 Placement uses structure; it does not define it
Placement cannot create or mutate structure.

## 6.2 Placement cannot override geometry
Placement must respect:
- shapes  
- boundaries  
- dimensions  

## 6.3 Placement cannot create new adjacency
Placement uses existing adjacency; it cannot invent new pathways.

## 6.4 Placement is reversible
Placement leaves no residue.

---

# 7. Adjacency Invariants

## 7.1 Adjacency is structural, not semantic
Adjacency is based on shape compatibility, not meaning.

## 7.2 Adjacency cannot override geometry
Adjacency must respect:
- boundaries  
- dimensions  
- forms  

## 7.3 Adjacency cannot create new routing
Adjacency cannot invent:
- new pathways  
- new categories  
- new containers  

## 7.4 Adjacency must remain local
Adjacency cannot propagate across domains.

---

# 8. Naming Invariants

## 8.1 Naming is structural, not semantic
Naming cannot assign meaning or identity.

## 8.2 Naming cannot mutate upstream domains
Naming cannot change:
- structure  
- geometry  
- categories  

## 8.3 Naming cannot become meaning
Naming → structure, never reversed.

## 8.4 Naming must remain stable
Names cannot drift or reinterpret themselves.

---

# 9. Category Invariants

## 9.1 Categories are fixed boundaries
Categories cannot:
- drift  
- fuse  
- invert  
- reinterpret  

## 9.2 Categories cannot be created by execution
Execution cannot create new categories.

## 9.3 Categories cannot assign semantics
Categories are structural, not semantic.

## 9.4 Categories must remain isolated
No category may leak into another.

---

# 10. Governance Invariants

## 10.1 Governance protects physics, not behavior
Governance cannot interpret or enforce semantics.

## 10.2 Governance cannot mutate domains
Governance cannot change:
- structure  
- geometry  
- categories  
- naming rules  

## 10.3 Governance cannot create new surfaces
Governance only protects what exists.

## 10.4 Governance must remain upstream
Governance cannot be influenced by:
- execution  
- semantics  
- registry  
- engine  

