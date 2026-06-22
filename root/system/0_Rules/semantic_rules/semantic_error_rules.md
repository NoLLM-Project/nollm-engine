# Semantic Error Rules

Semantic error rules define what constitutes a semantic‑level error, how semantic errors may be surfaced, and what semantics is forbidden to do in response.  
Semantic errors are interpretive, not structural.  
Semantic errors cannot mutate or reinterpret upstream physics.

Semantic errors are downstream of content and upstream of user-facing layers.

---

# 1. Semantic Error Scope Rules

## 1.1 Semantics may only detect semantic errors
Allowed semantic error types:
- missing semantic type  
- invalid semantic relationship  
- invalid semantic annotation  
- invalid semantic context  
- malformed semantic interpretation  
- malformed semantic table entry  

These errors arise from meaning, not mechanics.

## 1.2 Semantics may not detect structural errors
Forbidden semantic error types:
- geometry errors  
- adjacency errors  
- placement errors  
- invariant violations  
- engine errors  
- routing errors  
- workflow errors  
- pipeline errors  
- execution errors  
- content errors  

Structural errors are upstream and invisible to semantics.

---

# 2. Semantic Error Interpretation Rules

## 2.1 Semantics cannot interpret the cause of structural errors
Semantics cannot:
- infer structural intent  
- reinterpret structural transitions  
- reinterpret structural boundaries  
- reinterpret adjacency or placement  
- reinterpret geometry  

Semantic errors are interpretive only.

## 2.2 Semantics cannot reinterpret upstream domains
Semantics cannot reinterpret:
- naming rules  
- category rules  
- engine behavior  
- routing transitions  
- workflow steps  
- pipeline stages  
- execution operations  
- content states  

Semantics cannot reinterpret structure.

---

# 3. Semantic Error Mutation Rules

## 3.1 Semantic errors cannot mutate upstream domains
Semantic errors cannot change:
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

Semantic errors do not grant mutation privileges.

## 3.2 Semantic errors cannot generate structural domains
Semantic errors cannot create:
- new content types  
- new execution types  
- new pipeline types  
- new workflow types  
- new routing types  
- new adjacency types  
- new invariants  

Semantic errors are not structural.

---

# 4. Semantic Error Boundary Rules

## 4.1 Semantic errors cannot cross into structural domains
Semantic errors cannot propagate into:
- engine logic  
- routing logic  
- workflow logic  
- pipeline logic  
- execution logic  
- content logic  

Semantic errors remain interpretive.

## 4.2 Semantic errors cannot fuse domains
Semantic errors cannot cause:
- semantics ↔ content fusion  
- semantics ↔ execution fusion  
- semantics ↔ pipeline fusion  
- semantics ↔ workflow fusion  
- semantics ↔ routing fusion  
- semantics ↔ engine fusion  
- semantics ↔ geometry fusion  

Fusion is contamination.

---

# 5. Semantic Error Handling Rules

## 5.1 Semantic error handling must be interpretive
Allowed responses:
- return semantic error codes  
- halt semantic interpretation  
- reject malformed semantic relationships  
- reject invalid semantic annotations  
- reject invalid semantic contexts  

Forbidden responses:
- reinterpret structure  
- mutate content  
- mutate execution  
- mutate pipelines or workflows  
- override structural boundaries  

## 5.2 Semantic error handling cannot alter semantic identity
Semantic errors cannot:
- reorder semantic types  
- mutate semantic relationships  
- reinterpret semantic tables  

Semantic identity is fixed.

---

# 6. Semantic Error State Rules

## 6.1 Semantic error state must be ephemeral
Semantic error state must:
- exist only during interpretation  
- be cleared after the interpretive operation  
- leave no residue  

## 6.2 Semantic error state cannot persist across interpretations
Semantic error state cannot:
- accumulate  
- evolve  
- adapt  
- drift  

Persistence is forbidden.

---

# 7. Semantic Error Visibility Rules

## 7.1 Semantic errors are not visible to structural domains
Semantic errors cannot be:
- interpreted by content  
- interpreted by execution  
- interpreted by pipelines  
- interpreted by workflows  
- interpreted by routing  
- interpreted by engine  

Semantic errors are downstream.

## 7.2 Semantic errors cannot expose upstream physics
Semantic errors cannot reveal:
- invariants  
- naming rules  
- geometry definitions  
- category boundaries  

Semantic errors are sealed.

---

# 8. Semantic Error Stability Rules

## 8.1 Semantic error detection must be deterministic
Given the same:
- content  
- semantic types  
- semantic relationships  
- semantic interpretation rules  
- semantic tables  

The same semantic error must be detected.

## 8.2 Semantic error behavior cannot drift
Semantic error handling cannot:
- reinterpret itself  
- accumulate meaning  
- change behavior over time  

Semantic error handling is stable.

