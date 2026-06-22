# 4_Lab - Sealed Test Harness (Architecture Mode)

## Purpose
'4_Lab' is the sandbox for testing architecture, invariants, and world rules.
It is not runtime. It is not world. It is not lore.

## What Belongs Here
- ArchitectureSystem tests
- EnvironmentLayer tests
- InvariantLayer tests
- GoalLayer tests
- Experimental architecture logic

## What Does NOT Belong Here
- Engine code
- World data
- Lore
- Meta rules
- Production modules

## Interaction With Other Layers
- Lab tests MetaArchitecture.
- Lab tests World.
- Lab does NOT test Lore.
- Lab does NOT run Engine.

## Stability
This layer is experimental and can change freely.