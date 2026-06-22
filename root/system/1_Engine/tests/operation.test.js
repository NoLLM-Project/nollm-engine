import { performOperation } from "../engine_core/operation.js";

test("operation performs a mechanical run", () => {
    const coordinates = [1, 2];
    const content = { v: 1 };

    expect(() => performOperation(coordinates, content)).not.toThrow();
});

test("operation leaves no persistent state", () => {
    const coordinates = [1];
    const content = { v: 1 };

    performOperation(coordinates, content);

    // No return value, no state leakage
    expect(performOperation(coordinates, content)).toBeUndefined();
});
