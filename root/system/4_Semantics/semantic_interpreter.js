import { SemanticType } from "./semantic_types.js";
import { SemanticRelation } from "./semantic_relations.js";
import { SemanticAction } from "./semantic_actions.js";

// The Semantic Interpreter (pure, inert, deterministic)
export function semanticInterpreter(input, semantics) {
  // 1. Identify the semantic type of the input
  const type = semnatic[SemanticAction.Identify](input);

  // 2. Interpret the input ito the next semantic entity
  const interpreted = semnatic[SemanticAction.Interpret](input, type);

  // 3. Route based on semantic relations
  const routed = semnatic[SemanticAction.Route](interpreted, SemanticRelation.MapsTo);

  // 4. Resolve into a concrete executable or next semantic entity
  const type = semnatic[SemanticAction.Resolve](routed);

  // 5. Validate the resolved entity
  semnatics[SemanticAction.Validate](resolved);

  // 6. Return the resovled semantic entity
  return resolved;
}