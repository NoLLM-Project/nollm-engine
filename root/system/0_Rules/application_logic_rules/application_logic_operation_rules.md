# Application Logic Operation Rules

Application logic operation rules define how operations are executed, sequenced, coordinated, validated, and completed within the application logic domain.  
Application logic operations are operational, not structural or interpretive.  
Application logic operations cannot mutate semantics, content, or any upstream domain.

Application logic operations are downstream of user-facing expression and upstream of domain-specific logic.

---

# 1. Operation Definition Rules

## 1.1 An application logic operation is a non-structural unit of work
Allowed operations:
- validating inputs  
- applying business rules  
- orchestrating downstream actions  
- coordinating tasks  
- preparing view models  
- transforming non-structural data  
- dispatching operational requests  

Operations perform work; they do not define physics.

## 1.2 Application logic operations cannot perform interpretation or structural transitions
Forbidden operations:
- assigning semantic types  
- deriving meaning  
- interpreting content  
- forming semantic relationships  
- triggering structural transitions  
- mutating content  
- mutating execution  
- mutating pipelines or workflows  
- altering routing or engine behavior  

Operations do not interpret meaning or perform physics.

---

# 2. Operation Position Rules

## 2.1 Operations are downstream of user-facing expression
Operations may:
- receive human intent  
- receive interaction signals  
- receive expressive selections  

Operations may not mutate user-facing surfaces.

## 2.2 Operations are downstream of semantics
Operations may:
- consume semantic meaning  
- use semantic classifications as inputs  

Operations may not mutate semantics.

## 2.3 Operations are downstream of all structural domains
Operations may not:
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

Operations cannot reinterpret structure.

## 2.4 Operations are upstream of domain-specific logic
Operations provide:
- validated inputs  
- operational context  
- orchestrated actions  
- decision surfaces  

Operations do not implement domain-specific rules.

---

# 3. Operation Visibility Rules

## 3.1 Operations may see expressive and semantic surfaces
Allowed visibility:
- user-facing interactions  
- semantic meaning  
- semantic annotations  
- semantic contexts  
- content → semantic interpretation mappings  

## 3.2 Operations may not see structural domains
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

Operations cannot reveal upstream physics.

---

# 4. Operation Sequencing Rules

## 4.1 Operations may sequence other operations
Allowed sequencing:
- action → validator  
- validator → operation  
- operation → coordinator  
- coordinator → task  
- task → dispatcher  

Sequencing is operational, not structural.

## 4.2 Operations may not sequence structural transitions
Forbidden sequencing:
- workflow transitions  
- pipeline transitions  
- routing transitions  
- execution transitions  
- content transitions  
- geometry or adjacency transitions  

Operations cannot orchestrate physics.

---

# 5. Operation Execution Rules

## 5.1 Operations must execute deterministically
Given the same:
- user-facing input  
- semantic meaning  
- application state  

The same operational outcome must occur.

## 5.2 Operations must be side-effect constrained
Operations may:
- update application logic state  
- produce operational outputs  
- trigger downstream application logic actions  

Operations may not:
- mutate upstream domains  
- alter structural state  
- reinterpret meaning  

---

# 6. Operation Mutation Rules

## 6.1 Operations cannot mutate upstream domains
Operations cannot change:
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

Operations are downstream.

## 6.2 Operations cannot generate structural domains
Operations cannot create:
- new semantic types  
- new semantic relationships  
- new content types  
- new execution types  
- new pipeline types  
- new workflow types  
- new routing types  
- new adjacency types  
- new invariants  

Operations are not structural.

---

# 7. Operation Boundary Rules

## 7.1 Operations cannot cross into structural domains
Operations cannot enter:
- engine logic  
- routing logic  
- workflow logic  
- pipeline logic  
- execution logic  
- content logic  
- semantic logic  

Operations remain operational.

## 7.2 Operations cannot fuse with upstream domains
Operations cannot become:
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

# 8. Operation Error Rules

## 8.1 Operations may only express application-level errors
Allowed:
- invalid input  
- invalid operation request  
- missing business rule  
- unsupported action  
- malformed application state  

## 8.2 Operations may not express structural or semantic errors
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

# 9. Operation Stability Rules

## 9.1 Operation behavior must be deterministic
Operations must produce identical results for identical inputs.

## 9.2 Operation behavior cannot drift
Operations cannot:
- reinterpret semantics  
- reinterpret structure  
- accumulate meaning  
- adapt based on usage  
- evolve without explicit definition  

Operations are stable.

