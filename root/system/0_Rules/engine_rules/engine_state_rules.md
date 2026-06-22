# Engine State Rules

Engine state rules define what the engine is allowed to store, what it is forbidden to store, and how state behaves across execution.  
State is strictly mechanical, non‑semantic, non‑interpretive, and downstream of all invariants and membranes.

The engine may not accumulate meaning, identity, or interpretation.  
The engine may not drift or evolve through state.

---

# 1. State Scope Rules

## 1.1 Engine state is mechanical only
The engine may store:
- temporary structural references  
- execution pointers  
- routing positions  
- workflow step indices  

These are mechanical and non‑semantic.

## 1.2 Engine state may not contain semantic information
The engine may not store:
- meaning  
- identity  
- categories  
- content  
- interpretation  

Semantic state is forbidden.

---

# 2. State Mutation Rules

## 2.1 Engine state cannot mutate upstream domains
State cannot change:
- structure  
- geometry  
- naming  
- categories  
- invariants  

State is downstream and non‑mutative.

## 2.2 Engine state cannot create new domains
State cannot create:
- new containers  
- new categories  
- new routing paths  
- new semantics  

State is not generative.

---

# 3. State Interpretation Rules

## 3.1 Engine state cannot interpret meaning
State cannot:
- encode semantics  
- infer intent  
- reinterpret names  
- reinterpret content  

State is non‑semantic.

## 3.2 Engine state cannot reinterpret structure
State cannot:
- reinterpret adjacency  
- reinterpret placement  
- reinterpret geometry  
- reinterpret boundaries  

State reflects structure; it does not reinterpret it.

---

# 4. State Boundary Rules

## 4.1 Engine state cannot cross domain boundaries
State cannot enter:
- semantics  
- registry internals  
- naming rules  
- geometry definitions  
- invariants  

State remains inside the engine domain.

## 4.2 Engine state cannot fuse with other domains
State cannot become:
- structure  
- registry  
- semantics  
- content  

Fusion is contamination.

---

# 5. State Lifecycle Rules

## 5.1 Engine state must be ephemeral
State must:
- exist only during execution  
- be cleared after execution  
- leave no residue  

State is temporary.

## 5.2 Engine state cannot persist across executions
State cannot:
- accumulate  
- evolve  
- adapt  
- drift  

Persistence is forbidden.

---

# 6. State Stability Rules

## 6.1 Engine state must be deterministic
Given the same:
- adjacency  
- placement  
- routing  
- workflow  

State must evolve identically.

## 6.2 Engine state cannot drift
State cannot:
- reinterpret itself  
- accumulate meaning  
- change behavior over time  

State is stable.

---

# 7. State Error Rules

## 7.1 Engine state may only reflect structural errors
Allowed:
- invalid adjacency  
- invalid placement  
- invalid routing transitions  
- boundary violations  

## 7.2 Engine state may not reflect semantic errors
Forbidden:
- meaning errors  
- identity errors  
- category errors  
- content errors  

Semantic errors are upstream.

---

# 8. State Visibility Rules

## 8.1 Engine state is not externally visible
State cannot be:
- inspected by semantics  
- inspected by registry  
- inspected by naming  
- inspected by geometry  

State is internal.

## 8.2 Engine state cannot expose upstream domains
State cannot reveal:
- invariants  
- naming rules  
- geometry definitions  
- category boundaries  

State is sealed.

