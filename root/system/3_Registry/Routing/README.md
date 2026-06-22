# Routing Registry  
### Movement, Transition, and Dispatch Logic for NoLLM

The **Routing** subsystem defines *how movement, transitions, and dispatch* occur across the NoLLM architecture.  
Routing determines:

- **where** you can go  
- **when** you can go there  
- **what conditions must be met**  
- **what transitions occur**  
- **what profile governs the route**  
- **what invariants must hold**  

Routing is the **behavioral backbone** of NoLLM.

---

# 1. Purpose of the Routing Registry

Routing ensures:

- **deterministic navigation** across world → hotel → floor → room  
- **safe transitions** across UI, service, and stance layers  
- **strict module dispatch** for request types  
- **non‑drifting movement rules**  
- **clear separation** between spatial, UI, service, stance, and module routing  

Routing is the *movement contract* that prevents ambiguity.

---

# 2. Files in This Folder

Routing/
routing.schema.json
routing_transitions.json
routing_constraints.json
routing_invariants.md
routing_metadata.json
routing_profiles.json


Each file plays a distinct role.

---

# 3. routing_schema.json

Defines the **shape** of every route:

id: string
source: string
target: string
conditions: [string]
transitions: [string]
profile: string
invariants: [string]


This schema ensures:

- consistent structure  
- predictable fields  
- stable routing definitions  

---

# 4. routing_transitions.json

This is the **master list** of all routing transitions in the system.

Each entry defines:

- **id** — route identity  
- **source** — canonical name of origin  
- **target** — canonical name of destination  
- **conditions** — when the route is valid  
- **transitions** — what happens during the route  
- **profile** — routing profile (strict, standard, service, ui, stance, notepad, none)  
- **invariants** — rules that must hold  

This file includes routing for:

### World-plane navigation  
- world_root → districts  
- world_root → tower  
- world_root → field  
- world_root → hotel_shell  
- hotel_shell → hotel  

### Floor transitions  
- floor_01 ↔ floor_02  
- floor_02 ↔ floor_03  

### Circulation  
- hallway → hallway  
- stairwell → floor  
- elevator → floor  

### Room transitions  
- room → hallway  
- hallway → room  

### Module dispatch  
- routing_node → module_echo  
- routing_node → module_validate  
- routing_node → module_null  

### UI transitions  
- ui → surface_architecture  
- ui → ui_panel  
- ui → ui_map_node  
- ui → ui_edge  

### Service behaviors  
- concierge → navigate  
- concierge → explain  
- concierge → stance  
- concierge → continuity  
- concierge → map update  

### Directory, Vending, Bulletin  
- directory → lookup  
- vending_machine → dispense  
- bulletin_board → read/post  

### Notepad  
- coat_room_notepad → store_text  
- concierge → read_text  

### Map rendering  
- render nodes  
- render edges  
- render marker  
- render door states  

### Error handling  
- invalid node  
- missing scene  
- forbidden navigation  
- error accessibility  
- error state machine  

### District door logic  
- hover  
- click  
- forbidden click  
- prepare door  
- unlock door  
- load district door scene  
- fade transitions  

This file is the **authoritative routing graph** of the system.

---

# 5. routing_constraints.json

Defines **structural and semantic constraints** for routing.

Examples:

### Spatial constraints  
- world → hotel allowed  
- floor → floor allowed  
- room ↔ hallway allowed  
- skeleton → any forbidden  

### UI constraints  
- ui → ui allowed  
- ui → surface allowed  
- ui → world forbidden  

### Service constraints  
- concierge → service_behavior allowed  
- service → world forbidden  

### Profile constraints  
- strict → dispatch only  
- standard → navigation + render + dispatch  
- service → load_scene + describe_structure  
- ui → render only  
- stance → apply_anchors only  
- notepad → store_text only  
- none → no transitions  

Constraints ensure routing remains **legal and non‑drifting**.

---

# 6. routing_invariants.md

Defines the **rules that must always hold** for routing.

Invariants include:

### Identity invariants  
- route IDs must be unique  
- source/target must be valid canonical names  

### Spatial invariants  
- world → hotel must pass through hotel_shell  
- floor transitions must follow vertical adjacency  
- skeletons must not be navigable  

### UI invariants  
- UI transitions must remain in UI space  
- UI errors must not modify world state  

### Service invariants  
- concierge must route only to service behaviors  
- service behaviors must not route to world objects  

### Profile invariants  
- strict → dispatch only  
- ui → render only  
- stance → anchors only  
- notepad → store only  

### Integrity invariants  
- no cycles in world → hotel → floor → room hierarchy  
- no bypassing required layers  
- no contradictions with coordinates, metadata, or SKUs  

These invariants keep routing **clean, stable, and deterministic**.

---

# 7. routing_metadata.json

Defines **metadata required for routing nodes**:

- required fields  
- allowed conditions  
- allowed transitions  
- transition definitions  

Examples:

### Conditions  
- navigation  
- user_request  
- ui_select  
- scene_load  
- anchor_change  
- continuity_note_relevant  
- error_detected  

### Transitions  
- enter_districts  
- move_up / move_down  
- exit_room / enter_room  
- render_nodes / render_edges  
- apply_colors / apply_shapes / apply_icons  
- display_error_highlight  
- apply_anchors  
- store_text  
- update_you_are_here  

This file ensures routing transitions remain **literal and non‑inferential**.

---

# 8. routing_profiles.json

Defines **allowed routing profiles** and their behavior.

Examples:

### strict  
- dispatch only  

### standard  
- navigation  
- ui_select  
- render  
- dispatch  

### service  
- load_scene  
- describe_structure  
- apply_anchors  
- offer_next_step  

### ui  
- render_nodes  
- render_edges  
- render_marker  
- apply_styles  

### stance  
- apply_anchors only  

### notepad  
- store_text only  

### none  
- no transitions  

Profiles ensure routing remains **contextually correct**.

---

# 9. How Routing Interacts With Other Registry Subsystems

Routing binds together:

### Coordinates  
- spatial adjacency  
- vertical/horizontal movement  

### Naming  
- source/target canonical names  

### Metadata  
- descriptive meaning of nodes  

### SKUs  
- routing nodes and modules are SKU‑backed  

### World  
- world objects use routing to move between scenes  

### Engine  
- validators enforce routing invariants  
- modules are dispatched via routing  

Routing is the **behavioral glue** of the system.

---

# 10. Adding or Modifying Routes

To add a new route:

1. Add an entry to `routing_transitions.json`  
2. Validate it against `routing.schema.json`  
3. Ensure constraints in `routing_constraints.json` are satisfied  
4. Ensure invariants in `routing_invariants.md` are satisfied  
5. Ensure profile is defined in `routing_profiles.json`  
6. Ensure transitions are defined in `routing_metadata.json`  
7. Ensure source/target exist in Naming and Coordinates  

The Engine will automatically interpret the new route.

---

# 11. Mental Model Summary

- **routing_transitions.json** → the routing graph  
- **routing.schema.json** → structure  
- **routing_constraints.json** → legal structure  
- **routing_invariants.md** → global rules  
- **routing_metadata.json** → condition + transition definitions  
- **routing_profiles.json** → routing behavior  

Routing ensures that NoLLM remains:

- deterministic  
- navigable  
- structurally sound  
- non‑drifting  
- identity‑consistent  

This folder is the **movement contract** of the system.


