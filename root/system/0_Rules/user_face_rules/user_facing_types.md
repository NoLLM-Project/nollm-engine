# User-Facing Types

User-facing types define the kinds of expressive objects that may exist in the user-facing domain.  
User-facing types describe how meaning is presented to humans.  
User-facing types do not describe structure, physics, or interpretation.

User-facing types are expressive, not interpretive.  
User-facing types are downstream of semantics and upstream of application logic.

---

# 1. User-Facing Type Definition Rules

## 1.1 A user-facing type defines a category of expressive surface
A user-facing type may represent:
- a visual component  
- a textual surface  
- a layout container  
- a narrative surface  
- a human-facing representation of meaning  
- a display context  

User-facing types express meaning; they do not create meaning.

## 1.2 A user-facing type cannot represent structural domains
Forbidden user-facing type meanings:
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

User-facing types cannot encode physics or interpretation.

---

# 2. Minimal User-Facing Type Set

The user-facing layer begins with a minimal, stable set of expressive types.  
These types are intentionally few — expression expands through composition, not proliferation.

## **1. UserFacingType.View**
Meaning:  
A container for presenting semantic meaning to humans.

Examples:  
Dashboard view, Detail view, Summary view.

## **2. UserFacingType.Component**
Meaning:  
A discrete expressive element.

Examples:  
Label, Icon, Badge, Card, Chip, Tag.

## **3. UserFacingType.TextSurface**
Meaning:  
A textual representation of semantic meaning.

Examples:  
Title, Subtitle, Body text, Caption.

## **4. UserFacingType.VisualSurface**
Meaning:  
A non-textual expressive surface.

Examples:  
Color block, Image placeholder, Symbolic marker.

## **5. UserFacingType.Layout**
Meaning:  
A structural container for arranging expressive elements.

Examples:  
Row, Column, Grid, Stack.

## **6. UserFacingType.ContextSurface**
Meaning:  
A surface that expresses semantic context.

Examples:  
Seasonal context banner, Location context header.

## **7. UserFacingType.AnnotationSurface**
Meaning:  
A surface that expresses semantic annotations.

Examples:  
“Organic” badge, “Urgent” tag, “Featured” ribbon.

---

# 3. User-Facing Type Position Rules

## 3.1 User-facing types are downstream of semantics
User-facing types may:
- consume semantic types  
- consume semantic relationships  
- consume semantic interpretations  
- consume semantic annotations  

User-facing types may not mutate semantics.

## 3.2 User-facing types are upstream of application logic
User-facing types provide:
- expressive surfaces  
- rendered meaning  
- human-facing output  

User-facing types do not perform operations.

---

# 4. User-Facing Type Visibility Rules

## 4.1 User-facing types may see semantic surfaces only
Allowed visibility:
- semantic types  
- semantic attributes  
- semantic relationships  
- semantic contexts  
- semantic annotations  
- content → semantic interpretation mappings  

## 4.2 User-facing types may not see structural domains
Forbidden visibility:
- pipeline structure  
- workflow structure  
- routing tables  
- geometry definitions  
- naming rules  
- invariants  
- registry internals  

User-facing types cannot reveal upstream physics.

---

# 5. User-Facing Type Expression Rules

## 5.1 User-facing types may express meaning
User-facing types may:
- render text  
- render icons  
- render colors  
- render layout  
- render narrative  
- render grouping  
- render context  

## 5.2 User-facing types may not express structure
User-facing types may not:
- express adjacency  
- express placement  
- express geometry  
- express operational transitions  
- express workflow order  
- express pipeline order  
- express execution order  
- express content transitions  

User-facing types express meaning, not mechanics.

---

# 6. User-Facing Type Mutation Rules

## 6.1 User-facing types cannot mutate upstream domains
User-facing types cannot change:
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

User-facing types are downstream.

## 6.2 User-facing types cannot generate structural domains
User-facing types cannot create:
- new semantic types  
- new semantic relationships  
- new content types  
- new execution types  
- new pipeline types  
- new workflow types  
- new routing types  
- new adjacency types  
- new invariants  

User-facing types are not structural.

---

# 7. User-Facing Type Stability Rules

## 7.1 User-facing types must be deterministic
Given the same:
- semantic types  
- semantic relationships  
- semantic interpretations  
- semantic tables  

The same user-facing type must be selected.

## 7.2 User-facing types cannot drift
User-facing types cannot:
- reinterpret semantics  
- accumulate meaning  
- adapt based on usage  
- evolve without explicit definition  

User-facing types are stable.

