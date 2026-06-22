# Semantic Types

Semantic types define the kinds of semantic objects that may exist in the semantic domain.  
Semantic types describe meaning, interpretation, and conceptual identity.  
Semantic types do not describe structure, physics, or operations.

Semantic types are interpretive, not structural.

Semantic types are downstream of content and upstream of user‑facing layers.

---

# 1. Semantic Type Definition Rules

## 1.1 A semantic type defines a category of meaning
A semantic type may represent:
- a concept  
- a meaning-bearing entity  
- a semantic grouping  
- a semantic relationship anchor  
- a human-facing interpretive object  

Semantic types are the building blocks of semantic interpretation.

## 1.2 A semantic type cannot represent structural domains
Forbidden semantic type meanings:
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

Semantic types cannot encode physics or structure.

---

# 2. Minimal Semantic Type Set

The semantic layer begins with a minimal, stable set of semantic types.  
These types are intentionally few — semantics expands through relationships, not proliferation.

## **1. SemanticType.Concept**
Meaning:  
A meaning-bearing idea or interpretive object.

Examples:  
“Customer”, “Order”, “Garden”, “Season”, “Harvest”, “Event”.

## **2. SemanticType.Attribute**
Meaning:  
A semantic property or descriptive feature of a concept.

Examples:  
“Color”, “Size”, “Mood”, “Status”, “Seasonality”.

## **3. SemanticType.Relation**
Meaning:  
A semantic relationship between two or more concepts.

Examples:  
“belongs_to”, “part_of”, “causes”, “describes”, “associated_with”.

## **4. SemanticType.Context**
Meaning:  
A semantic environment or interpretive frame in which concepts acquire meaning.

Examples:  
“Seasonal context”, “Geographic context”, “Cultural context”.

## **5. SemanticType.Interpretation**
Meaning:  
A semantic mapping from content → meaning.

Examples:  
“Interpret this content as a Product”,  
“Interpret this content as a WeatherCondition”.

## **6. SemanticType.Annotation**
Meaning:  
A semantic label or tag applied to content or concepts.

Examples:  
“Urgent”, “Organic”, “Perishable”, “Featured”.

---

# 3. Semantic Type Position Rules

## 3.1 Semantic types are downstream of content
Semantic types may:
- interpret content  
- assign meaning to content  
- group content semantically  

Semantic types may not mutate content.

## 3.2 Semantic types are upstream of user-facing layers
Semantic types provide meaning to:
- UI  
- narrative  
- human-facing systems  

Semantic types do not perform operations.

---

# 4. Semantic Type Visibility Rules

## 4.1 Semantic types may see content surfaces
Allowed:
- content states  
- content transitions  
- content material  

## 4.2 Semantic types may not see structural domains
Forbidden:
- pipeline structure  
- workflow structure  
- routing tables  
- geometry definitions  
- naming rules  
- invariants  

Semantic types cannot reveal upstream physics.

---

# 5. Semantic Type Stability Rules

## 5.1 Semantic types must be deterministic
Given the same content:
- the same semantic type must be assigned  
- the same interpretation must occur  

## 5.2 Semantic types cannot drift
Semantic types cannot:
- reinterpret themselves  
- accumulate meaning  
- evolve without explicit definition  

Semantic types are stable.

