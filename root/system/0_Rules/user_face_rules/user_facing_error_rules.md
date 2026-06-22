# User-Facing Error Rules

User-facing error rules define what constitutes an error in the user-facing domain, how such errors may be surfaced, and what the user-facing layer is forbidden to do in response.  
User-facing errors are expressive, not interpretive or structural.  
User-facing errors cannot mutate semantics, content, or any upstream domain.

User-facing errors are downstream of semantics and upstream of application logic.

---

# 1. User-Facing Error Scope Rules

## 1.1 The user-facing layer may only detect user-facing errors
Allowed user-facing error types:
- missing rendering configuration  
- invalid user-facing type  
- invalid interaction target  
- disabled interaction  
- malformed layout  
- unsupported expressive component  
- unavailable surface  

These errors arise from expression, not meaning or mechanics.

## 1.2 The user-facing layer may not detect semantic or structural errors
Forbidden user-facing error types:
- semantic type errors  
- semantic relationship errors  
- semantic interpretation errors  
- content errors  
- execution errors  
- pipeline errors  
- workflow errors  
- routing errors  
- engine errors  
- geometry errors  
- adjacency errors  
- placement errors  
- invariant violations  

Semantic and structural errors are upstream and invisible to the user-facing layer.

---

# 2. User-Facing Error Interpretation Rules

## 2.1 User-facing errors cannot interpret meaning
User-facing errors cannot:
- infer semantic intent  
- reinterpret semantic relationships  
- reinterpret semantic contexts  
- reinterpret semantic annotations  

Interpretation belongs to semantics.

## 2.2 User-facing errors cannot interpret structure
User-facing errors cannot:
- infer structural transitions  
- reinterpret adjacency or placement  
- reinterpret geometry  
- reinterpret naming rules  
- reinterpret categories  

Structure is upstream.

---

# 3. User-Facing Error Mutation Rules

## 3.1 User-facing errors cannot mutate upstream domains
User-facing errors cannot change:
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

User-facing errors do not grant mutation privileges.

## 3.2 User-facing errors cannot generate structural domains
User-facing errors cannot create:
- new semantic types  
- new semantic relationships  
- new content types  
- new execution types  
- new pipeline types  
- new workflow types  
- new routing types  
- new adjacency types  
- new invariants  

User-facing errors are not structural.

---

# 4. User-Facing Error Boundary Rules

## 4.1 User-facing errors cannot cross into structural domains
User-facing errors cannot propagate into:
- engine logic  
- routing logic  
- workflow logic  
- pipeline logic  
- execution logic  
- content logic  
- semantic logic  

User-facing errors remain expressive.

## 4.2 User-facing errors cannot fuse domains
User-facing errors cannot cause:
- user-facing ↔ semantics fusion  
- user-facing ↔ content fusion  
- user-facing ↔ execution fusion  
- user-facing ↔ pipeline fusion  
- user-facing ↔ workflow fusion  
- user-facing ↔ routing fusion  
- user-facing ↔ engine fusion  
- user-facing ↔ geometry fusion  

Fusion is contamination.

---

# 5. User-Facing Error Handling Rules

## 5.1 User-facing error handling must be expressive
Allowed responses:
- display an error surface  
- show a placeholder  
- disable an interaction  
- hide an unavailable component  
- render a fallback layout  

Forbidden responses:
- reinterpret semantics  
- mutate content  
- mutate execution  
- mutate pipelines or workflows  
- override structural boundaries  

## 5.2 User-facing error handling cannot alter semantic identity
User-facing errors cannot:
- reorder semantic types  
- mutate semantic relationships  
- reinterpret semantic tables  

Semantic identity is fixed.

---

# 6. User-Facing Error State Rules

## 6.1 User-facing error state must be ephemeral
User-facing error state must:
- exist only during rendering or interaction  
- be cleared after the expressive operation  
- leave no residue  

## 6.2 User-facing error state cannot persist across renders
User-facing error state cannot:
- accumulate  
- evolve  
- adapt  
- drift  

Persistence is forbidden.

---

# 7. User-Facing Error Visibility Rules

## 7.1 User-facing errors are not visible to upstream domains
User-facing errors cannot be:
- interpreted by semantics  
- interpreted by content  
- interpreted by execution  
- interpreted by pipelines  
- interpreted by workflows  
- interpreted by routing  
- interpreted by engine  

User-facing errors are downstream.

## 7.2 User-facing errors cannot expose upstream physics or meaning internals
User-facing errors cannot reveal:
- semantic tables  
- semantic relationships  
- semantic types  
- content states  
- execution operations  
- pipeline/workflow/routing structures  
- geometry definitions  
- naming rules  
- invariants  

User-facing errors are sealed.

---

# 8. User-Facing Error Stability Rules

## 8.1 User-facing error detection must be deterministic
Given the same:
- user-facing types  
- semantic meaning  
- expressive configuration  

The same user-facing error must be detected.

## 8.2 User-facing error behavior cannot drift
User-facing error handling cannot:
- reinterpret semantics  
- accumulate meaning  
- change behavior over time  

User-facing error handling is stable.

