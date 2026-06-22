// system/5_Function/coord_postprocess_service_room.js

export function coord_postprocess_service_room({ workflowContext, carrier }) {

    const hotelRoot = workflowContext["coord_hotel_root"];

    // REQUIRE: hotel_root must have run
    if (!hotelRoot || hotelRoot.phase !== "hotel_root") {
        return {
            phase: "postprocess_service_room",
            error: "Hotel Root has not run yet",
            metadata_id: null,
            next_path: null,
            carrier: null
        };
    }

    const metadataId = hotelRoot.metadata_id;

    // ------------------------------------------------------------
    // 1. INTERNAL POSTPROCESS ACTIONS (NOT EXPOSED AS COORDS)
    // ------------------------------------------------------------

    function normalizeOutputWhitespace(carrier) {
        return {
            ...carrier,
            output: carrier.output?.replace(/\s+/g, " ").trim() || ""
        };
    }

    function normalizeOutputPunctuation(carrier) {
        return {
            ...carrier,
            output: carrier.output
                ?.replace(/[\u2018\u2019]/g, "'")
                .replace(/[\u201C\u201D]/g, '"')
                || ""
        };
    }

    function finalizeMetadataShell(carrier) {
        return {
            ...carrier,
            metadata_shell: {
                ...carrier.metadata_shell,
                postprocess_ran: true,
                finalized: true
            }
        };
    }

    function finalizeCarrierShell(carrier) {
        return {
            ...carrier,
            carrier_shell: {
                ...carrier.carrier_shell,
                cleaned: true,
                normalized: true
            }
        };
    }

    // ------------------------------------------------------------
    // 2. APPLY INTERNAL ACTIONS IN SEQUENCE
    // ------------------------------------------------------------

    let updatedCarrier = carrier || {};

    updatedCarrier = normalizeOutputWhitespace(updatedCarrier);
    updatedCarrier = normalizeOutputPunctuation(updatedCarrier);
    updatedCarrier = finalizeMetadataShell(updatedCarrier);
    updatedCarrier = finalizeCarrierShell(updatedCarrier);

    // ------------------------------------------------------------
    // 3. RETURN TO FRONT DESK (NO COORDS, NO XYZ)
    // ------------------------------------------------------------

    return {
        phase: "postprocess_service_room",
        metadata_id: metadataId,
        next_path: "coord_front_desk",
        carrier: updatedCarrier
    };
}
