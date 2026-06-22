// system/5_Function/coord_lobby.js

export function coord_lobby({ workflowContext }) {

    const hotelRoot = workflowContext["coord_hotel_root"];

    // ------------------------------------------------------------
    // REQUIREMENT: Hotel Root must have run
    // ------------------------------------------------------------
    if (!hotelRoot || hotelRoot.phase !== "hotel_root") {
        return {
            phase: "lobby",
            error: "Hotel Root has not run yet",
            next_coord: null
        };
    }

    // ------------------------------------------------------------
    // CHILD COORDINATES OF THE LOBBY
    // ------------------------------------------------------------
    const lobbyChildren = [
        "coord_front_desk",
        "coord_vending_machine",
        "coord_bulletin_board",
        "coord_district_door",
        "coord_map_sign",
        "coord_directory",
        "coord_coat_room"
    ];

    // ------------------------------------------------------------
    // DETERMINE NEXT COORDINATE
    // ------------------------------------------------------------
    // The metadata determines which child to route to.
    // For this path, we always route to the front desk.
    // Other paths may route to other children.
    // ------------------------------------------------------------
    const nextCoord = "coord_front_desk";

    // ------------------------------------------------------------
    // RETURN:
    //   - next child coordinate
    //   - metadata context
    //   - structural context
    // ------------------------------------------------------------
    return {
        phase: "lobby",

        next_coord: nextCoord,

        metadata_id: hotelRoot.metadata_id,
        metadata: hotelRoot.metadata,

        allowed_parents: hotelRoot.allowed_parents,
        allowed_children: hotelRoot.allowed_children,
        constraints: hotelRoot.constraints,
        invariants: hotelRoot.invariants
    };
}
