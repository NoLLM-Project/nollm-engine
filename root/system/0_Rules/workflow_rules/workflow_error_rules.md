# Workflow Error Rules

Workflow error rules define what constitutes a workflow‑level structural error, how workflows may surface errors, and what workflows are forbidden to do in response.  
Workflow errors are mechanical, non‑semantic, non‑interpretive, and strictly upstream of routing errors.

Workflows may detect structural violations.  
Workflows may not interpret meaning, identity, or semantics as errors.

---

# 1. Workflow Error Scope Rules

## 1.1 Workflows may only detect structural workflow errors
Allowed workflow error types:
- missing workflow steps  
- invalid workflow step order  
- invalid workflow transitions  
- malformed workflow structure  
- invalid routing transition references  
- boundary violations within workflow structure  

These are mechanical and non‑semantic.

## 1.2 Workflows may not detect semantic errors
Forbidden workflow error types:
- meaning errors  
- identity errors  
- category errors  
- content errors  
- interpretation errors  

Semantic errors are upstream and invisible to workflows.

---

# 2. Workflow Error Interpretation Rules

## 2.1 Workflows cannot interpret the cause of an error
Workflows cannot:
- infer intent  
- assign semantics  
- reinterpret names  
- reinterpret content  

Errors are structural facts, not semantic signals.

## 2.2 Workflows cannot reinterpret structural context
Workflows cannot reinterpret:
- adjacency  
- placement  
- geometry  
- routing transitions  

Structure is taken as‑is.

---

# 3. Workflow Error Mutation Rules

## 3.1 Workflows cannot mutate upstream domains in response to errors
Workflows cannot change:
- geometry  
- adjacency  
- placement  
- naming  
- categories  
- invariants  

Errors do not grant mutation privileges.

## 3.2 Workflows cannot create new domains in response to errors
Workflows cannot create:
- new workflow types  
- new routing types  
- new adjacency types  
- new semantics  

Errors are not generative.

---

# 4. Workflow Error Boundary Rules

## 4.1 Workflow errors cannot cross domain boundaries
Workflow errors cannot propagate into:
- semantics  
- registry internals  
- naming rules  
- geometry definitions  
- invariant definitions  

Workflow errors remain inside the workflow domain.

## 4.2 Workflow errors cannot fuse domains
Workflow errors cannot cause:
- workflow ↔ routing fusion  
- workflow ↔ engine fusion  
- workflow ↔ semantics fusion  

Fusion is contamination.

---

# 5. Workflow Error Handling Rules

## 5.1 Workflow error handling must be mechanical
Allowed responses:
- halt workflow execution  
- return structural workflow error codes  
- abort workflow step (structural only)  
- signal routing‑level structural error  

Forbidden responses:
- reinterpret meaning  
- reinterpret identity  
- reinterpret categories  
- reinterpret content  

## 5.2 Workflow error handling cannot alter workflow identity
Errors cannot:
- reorder workflow steps  
- mutate workflow structure  
- reinterpret workflow transitions  

Workflow identity is fixed.

---

# 6. Workflow Error State Rules

## 6.1 Workflow error state must be ephemeral
Workflow error state must:
- exist only during workflow evaluation  
- be cleared after the workflow step  
- leave no residue  

## 6.2 Workflow error state cannot persist across executions
Workflow error state cannot:
- accumulate  
- evolve  
- adapt  
- drift  

Persistence is forbidden.

---

# 7. Workflow Error Visibility Rules

## 7.1 Workflow errors are not visible to semantic domains
Workflow errors cannot be:
- interpreted by semantics  
- interpreted by registry  
- interpreted by naming  
- interpreted by geometry  

Workflow errors are internal to workflows and routing.

## 7.2 Workflow errors cannot expose upstream domains
Workflow errors cannot reveal:
- invariants  
- naming rules  
- geometry definitions  
- category boundaries  

Workflow errors are sealed.

---

# 8. Workflow Error Stability Rules

## 8.1 Workflow error detection must be deterministic
Given the same:
- workflow structure  
- routing tables  
- adjacency/placement  

The same structural workflow error must be detected.

## 8.2 Workflow error behavior cannot drift
Workflow error handling cannot:
- reinterpret itself  
- accumulate meaning  
- change behavior over time  

Workflow error handling is stable.

