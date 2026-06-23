// system/5_Function/coord_preprocess_service_room.js

export function coord_preprocess_service_room({ workflowContext, carrier }) {

    const hotelRoot = workflowContext["coord_hotel_root"];

    // REQUIRE: hotel_root must have run
    if (!hotelRoot || hotelRoot.phase !== "hotel_root") {
        return {
            phase: "preprocess_service",
            error: "Hotel Root has not run yet",
            metadata_id: null,
            next_path: null,
            carrier
        };
    }

    const metadataId = hotelRoot.metadata_id;

    // ------------------------------------------------------------
    // VESTIBULE + CHECKPOINT (NO SUPERVISION, NO DETECTION)
    // ------------------------------------------------------------

    // If front_desk sent the runner here WITHOUT a completed path,
    // it means this is the VESTIBULE call.
    if (workflowContext.__from_front_desk === true) {
        return {
            phase: "preprocess_service_vestibule",
            metadata_id: metadataId,
            next_path: "PATH_PREPROCESS",
            carrier
        };
    }

    // If the runner reached this coord because PATH_PREPROCESS ended here,
    // this is the CHECKPOINT call.
    return {
        phase: "preprocess_service_checkpoint",
        metadata_id: metadataId,
        next_path: "front_desk",
        carrier
    };
}
