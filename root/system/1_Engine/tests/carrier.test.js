import { createCarrier } from "../engine_core/carrier.js";

test("carrier moves positionally without semantics", () => {
    const carrier = createCarrier("payload");

    carrier.moveTo(5);
    // No semantic meaning; just positional assignment
    expect(() => carrier.moveTo(10)).not.toThrow();
});

test("carrier clears content at end of operation", () => {
    const carrier = createCarrier("payload");

    carrier.clear();

    // After clear, internal state must not be accessible
    expect(carrier.get).toBeUndefined();
});
