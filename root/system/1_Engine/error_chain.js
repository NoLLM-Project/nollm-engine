// engine/error_chain.js

function chainError(outer, inner) {
  return {
    ...outer,
    details: {
      ...outer.details,
      inner
    }
  };
}

module.exports = { chainError };
