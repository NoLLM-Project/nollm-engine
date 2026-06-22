# Application Logic Rules

The application logic layer defines how the system performs operations in response to human intent expressed through the user-facing layer.  
Application logic is operational, not structural or interpretive.  
Application logic is downstream of user-facing expression and upstream of domain-specific logic.

Application logic cannot mutate or reinterpret semantics, content, or any structural domain.

---

# 1. Application Logic Definition Rules

## 1.1 Application logic performs operations in response to human intent
Application logic may:
- execute defined operations  
- coordinate workflows within its own domain  
- respond to user-facing interactions  
- apply business rules  
- validate inputs  
- orchestrate downstream actions  

Application logic performs operations; it does not define physics.

## 1.2 Application logic cannot interpret meaning or structure
Forbidden application logic behaviors:
- assigning semantic types  
- deriving meaning  
- interpreting content  
- interpreting semantic relationships  
- interpreting structural transitions  
- interpreting geometry, adjacency, or placement  

Interpretation belongs to semantics; physics belongs to structural domains.

---

# 2. Application Logic Position Rules

## 2.1 Application logic is downstream of user-facing expression
Application logic may:
- receive human intent  
- receive interaction signals  
- receive expressive selections  

Application logic may not mutate user-facing surfaces.

## 2.2 Application logic is downstream of semantics
Application logic may:
- consume semantic meaning  
- use semantic classifications as inputs  

Application logic may not mutate semantics.

## 2.3 Application logic is downstream of all structural domains
Application logic may not:
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

Application logic cannot reinterpret structure.

## 2.4 Application logic is upstream of domain-specific logic
Application logic provides:
- validated inputs  
- operational context  
- orchestrated actions  
- decision surfaces  

Application logic does not implement domain-specific rules.

---

# 3. Application Logic Visibility Rules

## 3.1 Application logic may see expressive and semantic surfaces
Allowed visibility:
- user-facing interactions  
- semantic meaning  
- semantic annotations  
- semantic contexts  
- content → semantic interpretation mappings  

## 3.2 Application logic may not see structural domains
Forbidden visibility:
- pipeline structure  
- workflow structure  
- routing tables  
- geometry definitions  
- naming rules  
- invariants  
- registry internals  
- execution internals  
- content internals  

Application logic cannot reveal upstream physics.

---

# 4. Application Logic Behavior Rules

## 4.1 Application logic may perform operations
Allowed:
- validating inputs  
- applying business rules  
- orchestrating downstream actions  
- coordinating domain-specific logic  
- managing application state  
- performing non-structural transformations  

## 4.2 Application logic may not perform structural operations
Forbidden:
- triggering structural transitions  
- mutating content  
- mutating execution  
- mutating pipelines or workflows  
- mutating routing  
- altering geometry, adjacency, or placement  

Application logic performs operations, not physics.

---

# 5. Application Logic Mutation Rules

## 5.1 Application logic cannot mutate upstream domains
Application logic cannot change:
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

Application logic is downstream.

## 5.2 Application logic cannot generate structural domains
Application logic cannot create:
- new semantic types  
- new semantic relationships  
- new content types  
- new execution types  
- new pipeline types  
- new workflow types  
- new routing types  
- new adjacency types  
- new invariants  

Application logic is not structural.

---

# 6. Application Logic Boundary Rules

## 6.1 Application logic cannot cross into structural domains
Application logic cannot enter:
- engine logic  
- routing logic  
- workflow logic  
- pipeline logic  
- execution logic  
- content logic  
- semantic logic  

Application logic remains operational.

## 6.2 Application logic cannot fuse with upstream domains
Application logic cannot become:
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

# 7. Application Logic Error Rules

## 7.1 Application logic may only express application-level errors
Allowed:
- invalid input  
- invalid operation request  
- missing business rule  
- unsupported action  
- malformed application state  

## 7.2 Application logic may not express structural or semantic errors
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

# 8. Application Logic Stability Rules

## 8.1 Application logic must be deterministic
Given the same:
- user-facing input  
- semantic meaning  
- application state  

The same operational outcome must be produced.

## 8.2 Application logic cannot drift
Application logic cannot:
- reinterpret semantics  
- reinterpret structure  
- accumulate meaning  
- adapt based on usage  
- evolve without explicit definition  

Application logic is stable.

