# Application Logic Types

Application logic types define the kinds of operational objects that may exist in the application logic domain.  
Application logic types describe how the system performs operations in response to human intent.  
Application logic types do not describe structure, physics, or interpretation.

Application logic types are operational, not structural or interpretive.  
Application logic types are downstream of user-facing expression and upstream of domain-specific logic.

---

# 1. Application Logic Type Definition Rules

## 1.1 An application logic type defines a category of operational behavior
An application logic type may represent:
- an action  
- an operation  
- a validator  
- a coordinator  
- a dispatcher  
- an application-level task  
- an application-level decision surface  

Application logic types perform operations; they do not define physics.

## 1.2 An application logic type cannot represent structural domains
Forbidden application logic type meanings:
- geometry  
- adjacency  
- placement  
- invariants  
- engine operations  
- routing transitions  
- workflow steps  
- pipeline stages  
- execution operations  
- content states  
- semantic types  
- user-facing types  

Application logic types cannot encode physics, interpretation, or expression.

---

# 2. Minimal Application Logic Type Set

The application logic layer begins with a minimal, stable set of operational types.  
These types are intentionally few — operations expand through composition, not proliferation.

## **1. ApplicationLogicType.Action**
Meaning:  
A discrete operation performed in response to human intent.

Examples:  
SubmitForm, SaveDraft, ApplyFilter, TriggerSearch.

## **2. ApplicationLogicType.Operation**
Meaning:  
A multi-step operational unit that coordinates actions.

Examples:  
ValidateAndSubmit, LoadAndTransform, PrepareViewModel.

## **3. ApplicationLogicType.Validator**
Meaning:  
A logic unit that checks correctness of inputs or state.

Examples:  
InputValidator, PermissionValidator, FormatValidator.

## **4. ApplicationLogicType.Dispatcher**
Meaning:  
A logic unit that routes operational requests to the correct handler.

Examples:  
ActionDispatcher, EventDispatcher.

## **5. ApplicationLogicType.Coordinator**
Meaning:  
A logic unit that orchestrates multiple operations.

Examples:  
FormSubmissionCoordinator, SearchCoordinator.

## **6. ApplicationLogicType.Task**
Meaning:  
A self-contained operational workflow within the application logic domain.

Examples:  
GeneratePreviewTask, RecalculateStateTask.

## **7. ApplicationLogicType.DecisionSurface**
Meaning:  
A logic unit that evaluates conditions and selects an operational path.

Examples:  
EligibilityCheck, ModeSelector.

---

# 3. Application Logic Type Position Rules

## 3.1 Application logic types are downstream of user-facing expression
Application logic types may:
- receive human intent  
- receive interaction signals  
- receive expressive selections  

Application logic types may not mutate user-facing surfaces.

## 3.2 Application logic types are downstream of semantics
Application logic types may:
- consume semantic meaning  
- use semantic classifications as inputs  

Application logic types may not mutate semantics.

## 3.3 Application logic types are downstream of all structural domains
Application logic types may not:
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

Application logic types cannot reinterpret structure.

## 3.4 Application logic types are upstream of domain-specific logic
Application logic types provide:
- validated inputs  
- operational context  
- orchestrated actions  
- decision surfaces  

Application logic types do not implement domain-specific rules.

---

# 4. Application Logic Type Visibility Rules

## 4.1 Application logic types may see expressive and semantic surfaces
Allowed visibility:
- user-facing interactions  
- semantic meaning  
- semantic annotations  
- semantic contexts  
- content → semantic interpretation mappings  

## 4.2 Application logic types may not see structural domains
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

Application logic types cannot reveal upstream physics.

---

# 5. Application Logic Type Behavior Rules

## 5.1 Application logic types may perform operations
Allowed:
- validating inputs  
- applying business rules  
- orchestrating downstream actions  
- coordinating domain-specific logic  
- managing application state  
- performing non-structural transformations  

## 5.2 Application logic types may not perform structural operations
Forbidden:
- triggering structural transitions  
- mutating content  
- mutating execution  
- mutating pipelines or workflows  
- mutating routing  
- altering geometry, adjacency, or placement  

Application logic types perform operations, not physics.

---

# 6. Application Logic Type Mutation Rules

## 6.1 Application logic types cannot mutate upstream domains
Application logic types cannot change:
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

Application logic types are downstream.

## 6.2 Application logic types cannot generate structural domains
Application logic types cannot create:
- new semantic types  
- new semantic relationships  
- new content types  
- new execution types  
- new pipeline types  
- new workflow types  
- new routing types  
- new adjacency types  
- new invariants  

Application logic types are not structural.

---

# 7. Application Logic Type Stability Rules

## 7.1 Application logic types must be deterministic
Given the same:
- user-facing input  
- semantic meaning  
- application state  

The same operational type must be selected.

## 7.2 Application logic types cannot drift
Application logic types cannot:
- reinterpret semantics  
- reinterpret structure  
- accumulate meaning  
- adapt based on usage  
- evolve without explicit definition  

Application logic types are stable.

