import { createWalker } from "../engine_core/coordinate_walker.js";

test("walker iterates mechanically through coordinates", () => {
    const walker = createWalker([1, 2, 3]);

    expect(walker.hasNext()).toBe(true);
    expect(walker.next()).toBe(1);
    expect(walker.next()).toBe(2);
    expect(walker.next()).toBe(3);
    expect(walker.hasNext()).toBe(false);
});

test("walker does not interpret coordinates", () => {
    const walker = createWalker(["a", { x: 1 }, null]);

    expect(walker.next()).toBe("a");
    expect(walker.next()).toEqual({ x: 1 });
    expect(walker.next()).toBeNull();
});
