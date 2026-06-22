// system/engine/path_endpoints.js

export function deriveEndpoints(metadata, structural) {
  const { coordinates, type, category } = metadata || {};

  // Example: start at lobby for hotel-type objects
  let startNode = "coord_lobby";

  // Example: choose end based on category or coordinates
  let endNode = null;

  if (category === "hotel_front_desk") {
    endNode = "coord_front_desk";
  } else if (category === "service_room") {
    endNode = "coord_service_room";
  } else {
    // fallback: use coordinates mapping if you have one
    endNode = mapCoordinatesToNode(coordinates);
  }

  return { startNode, endNode };
}

function mapCoordinatesToNode(coordinates) {
  // stub: you can wire this to your coordinate registry
  // e.g. lookup by floor/zone/room
  return null;
}
