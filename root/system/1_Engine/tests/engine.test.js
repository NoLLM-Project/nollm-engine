import { runEngine } from "../engine_core/engine.js";

test("engine follows coordinates mechanically", () => {
    const coordinates = [1, 2, 3];
    const content = { value: "x" };

    // runEngine should not throw or interpret anything
    expect(() => runEngine(coordinates, content)).not.toThrow();
});

test("engine discards content after movement", () => {
    const coordinates = [1];
    const content = { value: "x" };

    // runEngine clears the carrier internally
    runEngine(coordinates, content);

    // No direct access to carrier; test is structural:
    // The engine must not return or expose content.
    expect(runEngine(coordinates, content)).toBeUndefined();
});
