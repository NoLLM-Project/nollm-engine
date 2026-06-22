import { SemanticType } from "./semantic_types.js";
import { SemanticRelation } from "./semantic_relations.js";
import { SemanticAction } from "./semantic_actions.js";

// Minimal, mechanical, deterministic semantic ruleset
export const semantics = {
  // 1. Identify the semantic type of the input
  [SemanticAction.Identify](input) {
    if (input?.type && SemanticType[input.type]) {
      return input.type;
    }
    return SemanticType.Request; // default fallback
  },

  // 2. Interpret the input into the next semantic entity
  [SemanticAction.Interpret](input, type) {
    switch (type) {
      case SemanticType.Request:
        return { type: SemanticType.Room, value: input.value };
      case SemanticType.Room:
        return { type: SemanticType.Operation, value: input.value };
      default:
        return input;
    }
  },

  // 3. Route based on semantic relations
  [SemanticAction.Route](entity, relation) {
    if (relation === SemanticRelation.MapsTo) {
      return entity; // minimal routing: identity mapping
    }
    return entity;
  },

  // 4. Resolve into a concrete executable or next semantic entity
  [SemanticAction.Resolve](entity) {
    return entity; // minimal resolution: identity
  },

  // 5. Validate the resolved entity
  [SemanticAction.Validate](entity) {
    if (!entity || !entity.type) {
      throw new Error("Invalid semantic entity");
    }
  },

  // 6. Transform (optional, minimal)
  [SemanticAction.Transform](entity) {
    return entity; // no-op transform
  },

  // 7. Execute (abstract, not real execution)
  [SemanticAction.Execute](entity) {
    return { result: `Executed ${entity.type}` };
  }
};
