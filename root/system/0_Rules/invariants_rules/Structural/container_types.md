# Container Types

## Scope
These rules define the sovereign container categories recognized by the system.
They apply across all planes:
- 0_Rules
- 1_Engine
- 2_Architecture
- 3_Registry
- 4_Semantics

These rules define **what container types exist**, not how they are implemented or structured.

---

## Core Principle
Container types are **system‑level categories**, not architectural structures.

They define:
- identity  
- role  
- allowed relationships  

They do **not** define:
- folder layouts  
- schemas  
- file contents  
- geometry  
- adjacency  
- behavior  

---

## Sovereign Container Types

### 1. **A_World**
The top‑level container representing the entire system’s spatial domain.

### 2. **B_Districts**
A collection of district‑level containers that subdivide the world.

### 3. **C_Hotel**
A sovereign container representing the hotel domain within the world.

### 4. **D_Tower**
A sovereign container representing the tower domain within the world.

These four are the **only** top‑level structural domains.

---

## Sub‑Container Categories
These categories define allowed sub‑containers within sovereign domains.
They define **types**, not structure.

### District Sub‑Containers
- buildings  
- guides  
- maps  

### Hotel Sub‑Containers
- lobby  
- floors  
- public_spaces  
- services  
- shell  

### Tower Sub‑Containers
- shell  
- vertical_circulation  
- views  

These are **allowed categories**, not schemas or folder structures.

---

## Cross‑Plane Rules

- 2_Architecture **instantiates** containers of these types.  
- 1_Engine **operates on** containers but may not create new types.  
- 3_Registry may **reference** container types but may not define them.  
- 4_Semantics may **interpret** container types but may not alter them.  
- Only 0_Rules defines which container types exist.  

No plane may introduce new container types.

---

## Drift Conditions

Container type drift occurs when:
- a new container type is introduced outside 0_Rules  
- a container is assigned a type not defined here  
- a container type is redefined by another plane  
- container types are used to encode semantics or behavior  
- container types are used to encode schemas or structure  

These conditions define drift; they do not describe detection or correction.
