import { runEngineStep, getCarrier } from "./engine.js";
import { PATH_FORWARD, PATH_REVERSE } from "./1_Engine/paths.js";
import { movementCore } from "./1_Engine/movement_core.js";

export function runEngineWithCoordinates(path, payload) {
    for (const coord of path) {

        // Move to the coordinate
        runEngineStep(coord, payload);

        // Get carrier xyz
        const carrier = getCarrier();
        const xyz = carrier.position;

        // Coordinate-specific logic
        if (movementCore[coord]) {
            payload = movementCore[coord](payload, xyz);
        }
    }
}

// Actually run it
const payload = {
    rawFile: "example.txt",
    userToken: "abc123"
};

runEngineWithCoordinates(PATH_FORWARD, payload);
runEngineWithCoordinates(PATH_REVERSE, null);
