# User-Facing Interaction Rules

User-facing interaction rules define how humans may interact with expressive surfaces.  
Interactions are expressive, not interpretive or structural.  
Interactions cannot mutate semantics, content, or any upstream domain.

The user-facing interaction layer is downstream of semantics and upstream of application logic.

---

# 1. Interaction Definition Rules

## 1.1 A user-facing interaction is a human action applied to an expressive surface
Allowed interactions:
- clicking  
- tapping  
- hovering  
- focusing  
- selecting  
- expanding/collapsing  
- scrolling  
- navigating  
- acknowledging  
- dismissing  

These interactions are expressive, not operational.

## 1.2 Interactions cannot perform interpretation or structural operations
Forbidden interactions:
- assigning semantic types  
- deriving meaning  
- interpreting content  
- forming semantic relationships  
- triggering structural transitions  
- mutating content  
- mutating execution  
- mutating pipelines or workflows  

Interactions do not create meaning or perform operations.

---

# 2. Interaction Position Rules

## 2.1 Interactions are downstream of semantics
Interactions may:
- consume semantic meaning  
- act on user-facing surfaces that express meaning  

Interactions may not mutate semantics.

## 2.2 Interactions are downstream of all structural domains
Interactions may not:
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

Interactions cannot reinterpret structure.

## 2.3 Interactions are upstream of application logic
Interactions provide:
- human intent  
- human gestures  
- human selection signals  

Interactions do not perform operations.

---

# 3. Interaction Visibility Rules

## 3.1 Interactions may see expressive surfaces only
Allowed visibility:
- user-facing types  
- user-facing components  
- user-facing layouts  
- semantic meaning rendered into surfaces  

## 3.2 Interactions may not see upstream domains
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

Interactions cannot reveal upstream physics or meaning internals.

---

# 4. Interaction Behavior Rules

## 4.1 Interactions may express human intent
Allowed:
- selecting a semantic object  
- requesting more detail  
- navigating to a different view  
- expanding a context  
- dismissing a surface  
- acknowledging a state  

## 4.2 Interactions may not express structural behavior
Forbidden:
- triggering structural transitions  
- altering operational order  
- changing workflow/pipeline/execution state  
- modifying content  
- modifying semantics  

Interactions express intent, not mechanics.

---

# 5. Interaction Mutation Rules

## 5.1 Interactions cannot mutate upstream domains
Interactions cannot change:
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

Interactions are downstream.

## 5.2 Interactions cannot generate structural domains
Interactions cannot create:
- new semantic types  
- new semantic relationships  
- new content types  
- new execution types  
- new pipeline types  
- new workflow types  
- new routing types  
- new adjacency types  
- new invariants  

Interactions are not structural.

---

# 6. Interaction Boundary Rules

## 6.1 Interactions cannot cross into structural domains
Interactions cannot enter:
- engine logic  
- routing logic  
- workflow logic  
- pipeline logic  
- execution logic  
- content logic  
- semantic logic  

Interactions remain expressive.

## 6.2 Interactions cannot fuse with upstream domains
Interactions cannot become:
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

# 7. Interaction Error Rules

## 7.1 Interactions may only express user-facing errors
Allowed:
- invalid interaction target  
- disabled interaction  
- malformed interaction configuration  
- unavailable surface  

## 7.2 Interactions may not express structural or semantic errors
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

# 8. Interaction Stability Rules

## 8.1 Interaction behavior must be deterministic
Given the same:
- user-facing surfaces  
- semantic meaning  
- expressive configuration  

The same interaction outcome must occur.

## 8.2 Interaction behavior cannot drift
Interactions cannot:
- reinterpret semantics  
- accumulate meaning  
- adapt based on usage  
- evolve without explicit definition  

Interaction behavior is stable.

