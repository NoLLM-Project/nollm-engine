# User-Facing Rules

The user-facing layer defines how meaning (semantics) is expressed to humans.  
It is the first layer that interacts with human perception, narrative, and interface.

The user-facing layer is expressive, not interpretive.  
The user-facing layer is downstream of semantics and upstream of application logic.

The user-facing layer cannot mutate or reinterpret semantics, content, or any structural domain.

---

# 1. User-Facing Definition Rules

## 1.1 The user-facing layer expresses meaning to humans
The user-facing layer may:
- render semantic types  
- display semantic relationships  
- present semantic contexts  
- show semantic annotations  
- format interpreted content  
- provide human-readable representations  

The user-facing layer expresses meaning; it does not create meaning.

## 1.2 The user-facing layer cannot interpret content
Forbidden user-facing behaviors:
- assigning semantic types  
- deriving meaning  
- interpreting content  
- forming semantic relationships  
- applying semantic contexts  

Interpretation belongs to semantics.

---

# 2. User-Facing Position Rules

## 2.1 The user-facing layer is downstream of semantics
The user-facing layer may:
- consume semantic types  
- consume semantic relationships  
- consume semantic interpretations  
- consume semantic tables  

The user-facing layer may not mutate semantics.

## 2.2 The user-facing layer is downstream of all structural domains
The user-facing layer may not:
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

The user-facing layer cannot reinterpret structure.

## 2.3 The user-facing layer is upstream of application logic
The user-facing layer provides:
- rendered meaning  
- formatted output  
- human-facing surfaces  

The user-facing layer does not perform operations.

---

# 3. User-Facing Visibility Rules

## 3.1 The user-facing layer may see semantic surfaces only
Allowed visibility:
- semantic types  
- semantic attributes  
- semantic relationships  
- semantic contexts  
- semantic annotations  
- content → semantic interpretation mappings  

## 3.2 The user-facing layer may not see upstream structural domains
Forbidden visibility:
- pipeline structure  
- workflow structure  
- routing tables  
- geometry definitions  
- naming rules  
- invariants  
- registry internals  

The user-facing layer cannot reveal upstream physics.

---

# 4. User-Facing Expression Rules

## 4.1 The user-facing layer may express meaning
Allowed expressions:
- text  
- labels  
- icons  
- colors  
- layout  
- narrative  
- formatting  
- visual grouping  
- human-readable summaries  

## 4.2 The user-facing layer may not express structure
Forbidden expressions:
- adjacency  
- placement  
- geometry  
- operational transitions  
- workflow order  
- pipeline order  
- execution order  
- content transitions  

The user-facing layer expresses meaning, not mechanics.

---

# 5. User-Facing Mutation Rules

## 5.1 The user-facing layer cannot mutate upstream domains
The user-facing layer cannot change:
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

The user-facing layer is downstream.

## 5.2 The user-facing layer cannot generate structural domains
The user-facing layer cannot create:
- new semantic types  
- new semantic relationships  
- new content types  
- new execution types  
- new pipeline types  
- new workflow types  
- new routing types  
- new adjacency types  
- new invariants  

The user-facing layer is not structural.

---

# 6. User-Facing Boundary Rules

## 6.1 The user-facing layer cannot cross into structural domains
The user-facing layer cannot enter:
- engine logic  
- routing logic  
- workflow logic  
- pipeline logic  
- execution logic  
- content logic  
- semantic logic  

The user-facing layer remains expressive.

## 6.2 The user-facing layer cannot fuse with upstream domains
The user-facing layer cannot become:
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

# 7. User-Facing Error Rules

## 7.1 The user-facing layer may only express user-facing errors
Allowed:
- missing semantic type  
- invalid semantic mapping  
- invalid rendering configuration  
- malformed user-facing template  

## 7.2 The user-facing layer may not express structural errors
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

# 8. User-Facing Stability Rules

## 8.1 User-facing behavior must be deterministic
Given the same:
- semantic types  
- semantic relationships  
- semantic interpretations  
- semantic tables  

The same user-facing output must be produced.

## 8.2 User-facing behavior cannot drift
The user-facing layer cannot:
- reinterpret semantics  
- accumulate meaning  
- adapt based on usage  
- evolve without explicit definition  

User-facing behavior is stable.

