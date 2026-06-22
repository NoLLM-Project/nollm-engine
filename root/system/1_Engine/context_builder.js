// engine/context_builder.js

function buildLayerContext(layerName, requestContext) {
  switch (layerName) {
    case "field.semantic":
      return {
        layer: layerName,
        data: {
          wrapper: requestContext.wrapper,
          metadata: requestContext.metadata,
          semanticMap: requestContext.semanticMap
        }
      };

    case "registry.identity":
      return {
        layer: layerName,
        data: {
          metadata: requestContext.metadata,
          sku: requestContext.sku,
          skuCandidates: requestContext.skuCandidates
        }
      };

    case "world.placement":
      return {
        layer: layerName,
        data: {
          objectId: requestContext.objectId,
          parentId: requestContext.parentId,
          allowedParents: requestContext.allowedParents,
          forbiddenParents: requestContext.forbiddenParents
        }
      };

    case "engine.adjacency":
      return {
        layer: layerName,
        data: {
          from: requestContext.from,
          to: requestContext.to,
          adjacencyList: requestContext.adjacencyList,
          deprecatedPaths: requestContext.deprecatedPaths
        }
      };

    default:
      throw new Error(`Unknown layer: ${layerName}`);
  }
}

module.exports = { buildLayerContext };
