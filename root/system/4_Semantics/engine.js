import { semanticInterpreter } from "../4_Semantics/semantic_interpreter.js";
import { semantics } from "../4_Semantics/semantics.js";
import { bindRoomToOperation } from "../3_Registry/rooms/room_binding.js";

export class Engine {
  constructor(config = {}) {
    this.config = config;
  }

  // Normalize the incoming request into a semantic-friendly shape
  normalize(input) {
    if (typeof input === "string") {
      return { type: "Request", value: input };
    }
    return input;
  }

  // Core engine pipeline
  evaluate(input) {
    // 1. Normalize
    const normalized = this.normalize(input);

    // 2. Semantic interpretation pipeline
    const resolved = semanticInterpreter(normalized, semantics);

    // 3. Bind the resolved semantic entity (Room) to an Operation
    const binding = bindingRoomToOperation(resolved);

    // 4. Execute the handler for the bound operation
    const executed = binding.handler(resolved);

    // 5. Return the result
    return executed;
  }
}
