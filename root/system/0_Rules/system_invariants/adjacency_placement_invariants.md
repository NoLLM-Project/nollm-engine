# Adjacency and Placement Invariants

Adjacency and placement invariants define the non‑negotiable physics of movement and location.  
They ensure that coordinates, shapes, and boundaries remain stable, non‑semantic, and drift‑free.

These invariants are upstream of execution and cannot be overridden.

---

# 1. Adjacency Invariants

## 1.1 Adjacency is structural, not semantic
Adjacency is determined by:
- shape compatibility  
- boundary alignment  
- geometric form  

Adjacency is not determined by:
- naming  
- meaning  
- semantics  
- intent  

## 1.2 Adjacency cannot create new pathways
Adjacency cannot:
- invent new movement routes  
- create new coordinates  
- create new categories  
- create new containers  

Adjacency only exposes existing structural relationships.

## 1.3 Adjacency must remain local
Adjacency applies only to:
- immediate neighbors  
- direct structural relationships  

Adjacency cannot:
- propagate  
- infer  
- generalize  
- expand  

## 1.4 Adjacency cannot override geometry
Adjacency must respect:
- shapes  
- boundaries  
- dimensions  

Geometry defines form; adjacency defines contact.

## 1.5 Adjacency cannot absorb other domains
Adjacency cannot absorb:
- placement  
- routing  
- semantics  
- naming  
- registry  

Adjacency is a standalone structural domain.

## 1.6 Adjacency is reversible
If A is adjacent to B, then B is adjacent to A.  
Adjacency cannot be directional.

---

# 2. Placement Invariants

## 2.1 Placement uses structure; it does not define it
Placement cannot:
- create shapes  
- mutate shapes  
- reinterpret shapes  

Placement is downstream of structure.

## 2.2 Placement cannot override geometry
Placement must respect:
- boundaries  
- dimensions  
- forms  

Placement cannot place a coordinate where geometry forbids it.

## 2.3 Placement cannot create new adjacency
Placement cannot:
- make two shapes adjacent  
- remove adjacency  
- reinterpret adjacency  

Placement uses adjacency; it does not define it.

## 2.4 Placement is non‑semantic
Placement cannot:
- interpret meaning  
- infer intent  
- assign semantics  

Placement is mechanical, not interpretive.

## 2.5 Placement cannot absorb routing
Placement defines location; routing defines movement.  
Placement cannot:
- determine movement  
- determine direction  
- determine transitions  

## 2.6 Placement is reversible
Placement operations:
- leave no residue  
- do not mutate identity  
- do not mutate semantics  
- do not mutate structure  

Placement is a reversible structural operation.

---

# 3. Movement Invariants (Adjacency + Placement)

## 3.1 Movement must respect adjacency
Movement is only allowed when:
- adjacency exists  
- boundaries align  
- geometry permits  

Movement cannot:
- skip adjacency  
- invent adjacency  
- reinterpret adjacency  

##