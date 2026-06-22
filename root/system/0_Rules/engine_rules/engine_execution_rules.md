# Engine Execution Rules

Engine execution rules define what the engine is allowed to *do* and what it is forbidden to do.  
Execution is mechanical, non‑semantic, non‑interpretive, and strictly downstream of all invariants and membranes.

The engine executes movement; it does not interpret, mutate, or influence upstream physics.

---

# 1. Execution Scope Rules

## 1.1 Execution is mechanical
Execution may only perform:
- structural transitions  
- adjacency‑based movement  
- placement‑based movement  
- routing‑defined transitions  
- workflow‑defined steps  

Execution cannot perform semantic or interpretive actions.

## 1.2 Execution cannot expand its scope
Execution cannot:
- invent new operations  
- invent new transitions  
- invent new movement types  
- reinterpret its own capabilities  

Execution is fixed.

---

# 2. Execution Interpretation Rules

## 2.1 Execution cannot interpret meaning
Execution cannot:
- infer intent  
- assign semantics  
- reinterpret names  
- reinterpret content  

Execution is non‑semantic.

## 2.2 Execution cannot reinterpret structure
Execution cannot:
- reinterpret adjacency  
- reinterpret placement  
- reinterpret geometry  
- reinterpret boundaries  

Structure is taken as‑is.

---

# 3. Execution Mutation Rules

## 3.1 Execution cannot mutate upstream domains
Execution cannot change:
- structure  
- geometry  
- naming  
- categories  
- invariants  

Execution is downstream and non‑mutative.

## 3.2 Execution cannot create new domains
Execution cannot create:
- new containers  
- new categories  
- new routing paths  
- new semantics  

Execution only uses what exists.

---

# 4. Execution Boundary Rules

## 4.1 Execution cannot cross domain boundaries
Execution cannot enter:
- semantics  
- registry internals  
- naming rules  
- geometry definitions  
- invariants  

Execution stays within the engine domain.

## 4.2 Execution cannot fuse with other domains
Execution cannot become:
- structure  
- registry  
- semantics  
- content  

Fusion is contamination.

---

# 5. Execution Routing Rules

## 5.1 Execution must follow routing exactly
Execution must:
- follow routing tables  
- follow adjacency  
- follow placement  
- follow workflow sequences  

Execution cannot improvise.

## 5.2 Execution cannot reorder transitions
Execution cannot:
- reorder routing steps  
- reorder workflow steps  
- alter transition order  

Order is fixed.

---

# 6. Execution Workflow Rules

## 6.1 Execution cannot reinterpret workflows
Execution cannot:
- infer workflow meaning  
- reinterpret workflow structure  
- alter workflow identity  

Workflows are executed mechanically.

## 6.2 Execution cannot create workflows
Execution cannot:
- generate new workflows  
- merge workflows  
- mutate workflows  

Workflows are upstream.

---

# 7. Execution State Rules

## 7.1 Execution cannot store semantic state
Execution cannot store:
- meaning  
- identity  
- categories  
- interpretation  

## 7.2 Execution cannot accumulate residue
Execution cannot:
- drift  
- evolve  
- adapt  
- reinterpret itself  

Execution is stateless with respect to semantics.

---

# 8. Execution Error Rules

## 8.1 Execution may only detect structural errors
Allowed:
- invalid adjacency  
- invalid placement  
- invalid routing transitions  
- boundary violations  

## 8.2 Execution may not detect semantic errors
Forbidden:
- meaning errors  
- identity errors  
- category errors  
- content errors  

Semantic errors are upstream.

---

# 9. Execution Stability Rules

## 9.1 Execution must be deterministic
Given the same:
- adjacency  
- placement  
- routing  
- workflow  

Execution must produce the same movement pattern.

## 9.2 Execution cannot drift
Execution cannot:
- reinterpret itself  
- accumulate meaning  
- change behavior over time  

Execution is stable.

