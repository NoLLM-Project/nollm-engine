# shapes.md
*(Tower‑side invariant document)*

## 1. Role of Shapes
Shapes are **Tower‑only structural summaries** of a user turn.

A shape is:

- the collapsed result of a single spine  
- a structural decision about *what this turn is*  
- the basis for selecting a wrapper‑tag  

A shape is **not**:

- content  
- meaning  
- pipeline  
- routing  
- coordinates  
- engine structure  

Shapes never leave the Tower.

---

## 2. Shape Lifecycle
1. The user sends raw text.  
2. The wrapper extracts a single spine.  
3. The wrapper collapses the spine into a shape.  
4. The wrapper derives a wrapper‑tag from the shape.  
5. The shape stays in the Tower and is never forwarded.  

If no valid shape can be formed, no wrapper‑tag is produced and the system does not activate.

---

## 3. Shape Scope
Shapes describe **only**:

- what kind of turn this is (e.g., ask, tell, configure, inspect)  
- what structural slots are present (e.g., subject, target, parameters)  
- what high‑level operation is implied (e.g., “run a pipeline”, “inspect a room”)  

Shapes do **not** describe:

- specific room IDs  
- specific pipelines  
- specific coordinates  
- specific engine behavior  
- specific registry routes  

Those belong to the system and are derived later from the wrapper‑tag.

---

## 4. Single‑Spine Requirement
Every valid shape is derived from **exactly one spine**.

The wrapper must reject:

- **multi‑spine turns** (two or more independent requests)  
- **fused spines** (entangled requests that cannot be cleanly separated)  
- **missing spines** (no clear actionable structure)  
- **malformed spines** (contradictory or structurally incoherent)  

If the single‑spine requirement fails:

- no shape is produced  
- no wrapper‑tag is produced  
- the system does not activate  

---

## 5. Ambiguity and Shapes
Ambiguity is resolved **before** shape formation.

Rules:

- If the turn is ambiguous and cannot be clarified → **no shape**  
- If the turn is ambiguous but can be clarified → clarify, then form a shape  
- Shapes must never encode unresolved ambiguity  

Shapes are always **post‑clarification**.

---

## 6. Shape Categories
Shapes are grouped into **categories** that are Tower‑only concepts, such as:

- request shapes (ask the system to do something)  
- inspection shapes (ask about state/structure)  
- configuration shapes (set or change parameters)  
- narrative shapes (non‑actionable, may be rejected or reflected)  

Each category:

- defines what a valid spine looks like  
- defines what slots must or may be present  
- defines when the wrapper must reject the turn  

These categories are **not** visible to the system.

---

## 7. Shape Slots
Shapes may expose **slots** such as:

- subject  
- target  
- parameters  
- scope  
- constraints  

Slots are **Tower‑internal** and used only to:

- decide whether the turn is structurally valid  
- decide which wrapper‑tag to emit  

Slots are never forwarded to the system.  
Slots are never embedded in tags.  
Slots never cross the membrane.

---

## 8. Shape Rejection
The wrapper must reject shape formation when:

- the turn is multi‑intent or multi‑spine  
- the turn fuses unrelated operations  
- the turn depends on cross‑turn references  
- the turn requires implicit meaning not present in the text  
- the turn violates Tower boundaries or governance  

On rejection:

- no shape is produced  
- no wrapper‑tag is produced  
- the system does not activate  

---

## 9. Shape → Wrapper‑Tag Mapping
The mapping from shape → wrapper‑tag is **Tower‑internal**.

Properties:

- many shapes may map to the same wrapper‑tag  
- the same shape may map to different wrapper‑tags over time (Tower evolution)  
- the system never sees shapes and never knows this mapping  

The wrapper‑tag is the **only** artifact that crosses the membrane.

---

## 10. Turn Isolation for Shapes
Shapes are **per‑turn only**:

- a shape is created for the current turn  
- a shape is used to derive a wrapper‑tag  
- the shape is discarded after the turn  
- shapes are never reused across turns  

No shape state persists into the next turn.

---

## 11. Shape Membrane Guarantee
Shapes:

- exist only in the Tower  
- never cross the membrane  
- never appear in semantics  
- never appear in registry  
- never appear in concierge  
- never appear in the engine  

All shape logic, validation, and rejection are **Tower‑only**.

Nothing fuses.
