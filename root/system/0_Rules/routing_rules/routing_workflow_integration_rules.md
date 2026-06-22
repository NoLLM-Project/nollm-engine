# Routing–Workflow Integration Rules

Routing–workflow integration rules define how routing consumes workflow structure without interpreting workflow meaning or mutating workflow identity.  
Workflows are upstream sequences; routing is a downstream mechanical executor of movement.

Routing is mechanical, non‑semantic, and non‑interpretive.

---

# 1. Integration Position Rules

## 1.1 Workflows are upstream of routing
Routing must treat workflows as:
- fixed sequences  
- immutable structures  
- non‑semantic instructions  
- non‑interpretive movement patterns  

Routing cannot alter workflow identity.

## 1.2 Routing is downstream of workflow structure
Routing may only:
- read workflow step order  
- read workflow transitions  
- execute movement defined by workflow structure  

Routing cannot reinterpret workflows.

---

# 2. Workflow Visibility Rules

## 2.1 Routing may only see structural workflow surfaces
Routing may access:
- workflow step order  
- workflow transition structure  
- workflow routing references  

These are mechanical.

## 2.2 Routing may not see workflow semantics
Routing may not access:
- workflow meaning  
- workflow intent  
- workflow categories  
- workflow content  

Workflow semantics are upstream.

---

# 3. Workflow Interpretation Rules

## 3.1 Routing cannot interpret workflow meaning
Routing cannot:
- infer intent  
- assign semantics  
- reinterpret workflow names  
- reinterpret workflow content  

Routing executes structure only.

## 3.2 Routing cannot reinterpret workflow structure
Routing cannot:
- reinterpret step order  
- reinterpret transitions  
- reinterpret workflow boundaries  

Structure is taken as‑is.

---

# 4. Workflow Mutation Rules

## 4.1 Routing cannot mutate workflows
Routing cannot:
- change workflow order  
- change workflow transitions  
- add workflow steps  
- remove workflow steps  
- mutate workflow identity  

Workflows are immutable.

## 4.2 Routing cannot create workflows
Routing cannot:
- generate new workflows  
- merge workflows  
- split workflows  
- derive workflows  

Workflow creation is upstream.

---

# 5. Workflow‑Driven Movement Rules

## 5.1 Routing must follow workflow order
Routing must:
- execute workflow steps in order  
- respect workflow transitions  
- obey workflow boundaries  

Routing cannot reorder workflows.

## 5.2 Routing must translate workflow steps into structural movement
Routing may:
- map workflow steps to adjacency  
- map workflow steps to placement  
- map workflow steps to routing transitions  

Routing may not reinterpret workflow meaning.

---

# 6. Workflow Boundary Rules

## 6.1 Routing cannot cross workflow domain boundaries
Routing cannot enter:
- workflow semantics  
- workflow metadata  
- workflow categories  
- workflow content  

Routing stays within routing.

## 6.2 Routing cannot fuse with workflows
Routing cannot become:
- workflow logic  
- workflow semantics  
- workflow identity  

Fusion is contamination.

---

# 7. Workflow Error Rules

## 7.1 Routing may detect structural workflow errors
Allowed:
- missing workflow steps  
- invalid workflow transitions  
- malformed workflow routing references  

These are structural.

## 7.2 Routing may not detect semantic workflow errors
Forbidden:
- meaning errors  
- intent errors  
- category errors  
- content errors  

Semantic workflow errors are upstream.

---

# 8. Workflow Collapse Rules

## 8.1 Workflow collapse is structural at the routing level
Routing may detect collapse when:
- workflow transitions cannot be executed structurally  
- workflow steps reference invalid adjacency or placement  
- workflow routing entries are missing  

## 8.2 Workflow collapse cannot propagate upstream
Routing collapse cannot:
- alter workflow identity  
- reinterpret workflow meaning  
- mutate workflow structure  

Collapse is contained.

---

# 9. Workflow Stability Rules

## 9.1 Workflow integration must be deterministic
Given the same:
- workflow  
- adjacency  
- placement  
- routing tables  

Routing must produce the same movement pattern.

## 9.2 Workflow integration cannot drift
Routing cannot:
- reinterpret workflows over time  
- accumulate workflow meaning  
- adapt routing behavior based on workflow semantics  

Integration is stable.

