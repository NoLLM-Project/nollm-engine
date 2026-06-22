# User-Facing Rendering Rules

User-facing rendering rules define how expressive surfaces are produced from user-facing types.  
Rendering is expressive, not interpretive or structural.  
Rendering cannot mutate semantics, content, or any upstream domain.

Rendering is downstream of semantics and upstream of application logic.

---

# 1. Rendering Definition Rules

## 1.1 Rendering converts user-facing types into expressive surfaces
Rendering may:
- draw text  
- draw icons  
- draw colors  
- draw layout  
- draw grouping  
- draw context banners  
- draw annotation surfaces  
- draw visual emphasis  

Rendering expresses meaning; it does not create meaning.

## 1.2 Rendering cannot interpret content or semantics
Forbidden rendering behaviors:
- assigning semantic types  
- deriving meaning  
- interpreting content  
- forming semantic relationships  
- applying semantic contexts  

Rendering is not interpretive.

---

# 2. Rendering Position Rules

## 2.1 Rendering is downstream of semantics
Rendering may:
- consume semantic meaning  
- consume semantic annotations  
- consume semantic contexts  
- consume semantic relationships  

Rendering may not mutate semantics.

## 2.2 Rendering is downstream of all structural domains
Rendering may not:
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

Rendering cannot reinterpret structure.

## 2.3 Rendering is upstream of application logic
Rendering provides:
- expressive surfaces  
- visual output  
- human-facing presentation  

Rendering does not perform operations.

---

# 3. Rendering Visibility Rules

## 3.1 Rendering may see expressive surfaces only
Allowed visibility:
- user-facing types  
- user-facing components  
- user-facing layouts  
- semantic meaning rendered into surfaces  

## 3.2 Rendering may not see upstream domains
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

Rendering cannot reveal upstream physics or meaning internals.

---

# 4. Rendering Behavior Rules

## 4.1 Rendering may express meaning visually
Allowed:
- typography  
- color  
- spacing  
- layout  
- grouping  
- iconography  
- emphasis  
- contextual banners  
- annotation badges  

## 4.2 Rendering may not express structure
Forbidden:
- adjacency  
- placement  
- geometry  
- operational transitions  
- workflow order  
- pipeline order  
- execution order  
- content transitions  

Rendering expresses meaning, not mechanics.

---

# 5. Rendering Mutation Rules

## 5.1 Rendering cannot mutate upstream domains
Rendering cannot change:
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

Rendering is downstream.

## 5.2 Rendering cannot generate structural domains
Rendering cannot create:
- new semantic types  
- new semantic relationships  
- new content types  
- new execution types  
- new pipeline types  
- new workflow types  
- new routing types  
- new adjacency types  
- new invariants  

Rendering is not structural.

---

# 6. Rendering Boundary Rules

## 6.1 Rendering cannot cross into structural domains
Rendering cannot enter:
- engine logic  
- routing logic  
- workflow logic  
- pipeline logic  
- execution logic  
- content logic  
- semantic logic  

Rendering remains expressive.

## 6.2 Rendering cannot fuse with upstream domains
Rendering cannot become:
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

# 7. Rendering Error Rules

## 7.1 Rendering may only express user-facing rendering errors
Allowed:
- invalid rendering configuration  
- missing rendering template  
- unsupported user-facing type  
- malformed layout  

## 7.2 Rendering may not express structural or semantic errors
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

# 8. Rendering Stability Rules

## 8.1 Rendering must be deterministic
Given the same:
- user-facing types  
- semantic meaning  
- expressive configuration  

The same rendered output must be produced.

## 8.2 Rendering cannot drift
Rendering cannot:
- reinterpret semantics  
- accumulate meaning  
- adapt based on usage  
- evolve without explicit definition  

Rendering behavior is stable.

