# Routing Rules

Routing rules define the allowed movement patterns within the system.  
Routing is strictly downstream of all engine rules and upstream of workflows.  
Routing cannot mutate physics, reinterpret structure, or create new transitions.

Routing is mechanical, non‑semantic, and non‑interpretive.

---

# 1. Routing Position Rules

## 1.1 Routing is downstream of the engine
Routing must obey:
- engine membrane rules  
- engine visibility rules  
- engine execution rules  
- engine state rules  
- engine error rules  
- engine loading rules  

Routing cannot override or reinterpret engine constraints.

## 1.2 Routing cannot influence upstream domains
Routing cannot alter:
- invariants  
- geometry  
- naming  
- categories  
- registry internals  

Routing is a consumer of upstream physics.

---

# 2. Routing Visibility Rules

## 2.1 Routing may only see what the engine may see
Routing may access:
- adjacency  
- placement  
- coordinates  
- routing tables  
- workflow step sequences  

Routing inherits engine visibility limits.

## 2.2 Routing may not see semantic domains
Routing may not access:
- meaning  
- identity  
- categories  
- content  
- interpretation layers  

Routing is non‑semantic.

---

# 3. Routing Interpretation Rules

## 3.1 Routing cannot interpret meaning
Routing cannot:
- infer intent  
- assign semantics  
- reinterpret names  
- reinterpret content  

Routing is mechanical.

## 3.2 Routing cannot reinterpret structure
Routing cannot:
- reinterpret adjacency  
- reinterpret placement  
- reinterpret geometry  
- reinterpret boundaries  

Structure is taken as‑is.

---

# 4. Routing Mutation Rules

## 4.1 Routing cannot mutate upstream domains
Routing cannot change:
- structure  
- geometry  
- naming  
- categories  
- invariants  

Routing is non‑mutative.

## 4.2 Routing cannot create new domains
Routing cannot create:
- new containers  
- new categories  
- new routing paths  
- new semantics  

Routing is not generative.

---

# 5. Routing Transition Rules

## 5.1 Routing cannot invent transitions
Routing cannot:
- create adjacency  
- create placement  
- create new movement types  

Routing uses only existing structural transitions.

## 5.2 Routing must respect adjacency
Movement is only allowed when:
- adjacency exists  
- boundaries align  
- geometry permits  

Routing cannot skip adjacency.

## 5.3 Routing must respect placement
Routing cannot:
- place coordinates in invalid locations  
- violate geometry  
- violate boundaries  

Placement is upstream of routing.

---

# 6. Routing Execution Rules

## 6.1 Routing must be executable by the engine
Routing cannot define transitions that:
- violate engine visibility  
- violate engine execution limits  
- require semantic interpretation  
- require persistent state  
- require mutation of upstream domains  

Routing must remain within engine capability.

## 6.2 Routing cannot reorder workflows
Routing cannot:
- reorder workflow steps  
- reinterpret workflow transitions  
- alter workflow identity  

Workflows are upstream.

---

# 7. Routing State Rules

## 7.1 Routing cannot store semantic state
Routing cannot store:
- meaning  
- identity  
- categories  
- interpretation  

## 7.2 Routing cannot accumulate residue
Routing cannot:
- drift  
- evolve  
- adapt  
- reinterpret itself  

Routing is stateless with respect to semantics.

---

# 8. Routing Error Rules

## 8.1 Routing may only detect structural routing errors
Allowed:
- invalid adjacency  
- invalid placement  
- invalid routing transitions  
- boundary violations  

## 8.2 Routing may not detect semantic errors
Forbidden:
- meaning errors  
- identity errors  
- category errors  
- content errors  

Semantic errors are upstream.

---

# 9. Routing Boundary Rules

## 9.1 Routing cannot cross domain boundaries
Routing cannot enter:
- semantics  
- registry internals  
- naming rules  
- geometry definitions  
- invariants  

Routing stays within the routing domain.

## 9.2 Routing cannot fuse with other domains
Routing cannot become:
- structure  
- engine  
- semantics  
- content  

Fusion is contamination.

---

# 10. Routing Stability Rules

## 10.1 Routing must be deterministic
Given the same:
- adjacency  
- placement  
- routing tables  
- workflow  

Routing must produce the same movement pattern.

## 10.2 Routing cannot drift
Routing cannot:
- reinterpret itself  
- accumulate meaning  
- change behavior over time  

Routing is stable.

