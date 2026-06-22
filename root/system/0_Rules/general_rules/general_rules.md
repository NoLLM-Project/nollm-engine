# General Rules — System‑Level Foundations

These rules define the physics of the rule system itself.  
They apply to all rule documents, all layers, all domains, and all invariants.

They are the root contract for the entire system.

---

## 1. Rule Identity

1.1 A rule is a written constraint that governs system behavior.  
1.2 A rule must be expressed in natural language, not code.  
1.3 A rule must be stable, minimal, and non‑overlapping.  
1.4 A rule must belong to exactly one layer and one domain.  
1.5 A rule must have a unique identifier derived from its layer and domain.

---

## 2. Rule Document Structure

2.1 Each rule document defines a single conceptual surface (e.g., geometry, governance, collapse).  
2.2 A rule document must not define more than one conceptual surface.  
2.3 A rule document must not reference implementation details.  
2.4 A rule document must not reference other rule documents by filename.  
2.5 A rule document may reference other surfaces only by concept, not by path.

---

## 3. Layers

3.1 A layer is a conceptual boundary that groups rules by purpose.  
3.2 Layers must remain stable and must not be renamed without governance approval.  
3.3 A rule must belong to exactly one layer.  
3.4 Layers must not overlap in responsibility.  
3.5 Layers must not reference each other cyclically.

---

## 4. Domains

4.1 A domain is a sub‑area of a layer that groups related rules.  
4.2 A domain must be strictly narrower than its layer.  
4.3 A rule must belong to exactly one domain.  
4.4 Domains must not overlap.  
4.5 Domains must not contain sub‑domains.

---

## 5. Naming Conventions

5.1 Rule identifiers must follow the pattern:

<layer>.<domain>.<name>


5.2 Names must be lowercase, hyphenated, and descriptive.  
5.3 Names must not contain implementation terms (e.g., “function”, “class”, “API”).  
5.4 Names must not contain temporal terms (e.g., “v1”, “temporary”).  
5.5 Names must not contain personal names.

---

## 6. Rule Boundaries

6.1 A rule must describe what is required, not how to implement it.  
6.2 A rule must not contain examples, metaphors, or analogies.  
6.3 A rule must not contain conditional logic (“if/then”).  
6.4 A rule must not contain procedural steps.  
6.5 A rule must not contain references to code, files, or directories.

---

## 7. Rule Interactions

7.1 Rules must not contradict each other.  
7.2 If two rules appear to conflict, the higher‑layer rule prevails.  
7.3 Rules must not depend on implementation details.  
7.4 Rules must not depend on runtime state.  
7.5 Rules must not depend on user behavior.

---

## 8. Rule Stability

8.1 Rules must be written to remain valid across system evolution.  
8.2 Rules must not reference transient features.  
8.3 Rules must not reference experimental features.  
8.4 Rules must not reference deprecated features.  
8.5 Rules must be updated only through governance procedures.

---

## 9. Rule Purpose

9.1 Rules exist to constrain system behavior, not to describe it.  
9.2 Rules must reduce ambiguity, not increase it.  
9.3 Rules must prevent collapse, not cause it.  
9.4 Rules must support invariants, not override them.  
9.5 Rules must remain readable to future stewards.
