// preprocess.js
// Design-level skeleton for S_PREPROCESS.
// Performs non-semantic, non-interpretive normalization only.
// Lives strictly in the service corridor. Never touches runtime.

// -----------------------------------------------------------------------------
// Public API
// -----------------------------------------------------------------------------

/**
 * preprocess(context)
 * Executes the S_PREPROCESS state.
 *
 * Responsibilities:
 * - strip formatting
 * - normalize whitespace
 * - extract explicit literals
 * - detect ambiguity (flag only, do not resolve)
 * - prepare input for invariant enforcement
 *
 * Forbidden:
 * - inference
 * - assumption
 * - invention
 * - personalization
 * - semantic interpretation
 *
 * @param {object} context - Fresh context from S0.
 * @returns {object} updated context
 */
function preprocess(context) {
  const normalized = normalizeInput(context.rawRequest);

  return {
    ...context,
    normalizedInput: normalized,
    // ambiguity flags only — never resolved here
    ambiguity: detectAmbiguity(normalized)
  };
}

// -----------------------------------------------------------------------------
// Normalization (non-semantic)
// -----------------------------------------------------------------------------

/**
 * normalizeInput(raw)
 * Performs purely mechanical cleanup.
 *
 * Allowed:
 * - whitespace normalization
 * - trimming
 * - structural cleanup
 * - literal extraction
 *
 * Forbidden:
 * - interpreting meaning
 * - guessing intent
 * - adding structure not present in input
 */
function normalizeInput(raw) {
  if (typeof raw !== 'string') return raw;

  // Purely mechanical normalization.
  return raw
    .replace(/\r\n/g, '\n')   // normalize line endings
    .replace(/\t/g, ' ')      // normalize tabs
    .replace(/ +/g, ' ')      // collapse spaces
    .trim();                  // remove leading/trailing whitespace
}

// -----------------------------------------------------------------------------
// Ambiguity Detection (flag-only)
// -----------------------------------------------------------------------------

/**
 * detectAmbiguity(input)
 * Detects structural ambiguity without resolving it.
 *
 * Allowed:
 * - flagging ambiguous patterns
 *
 * Forbidden:
 * - interpreting which meaning is intended
 * - resolving ambiguity
 * - altering the input
 */
function detectAmbiguity(input) {
  const flags = [];

  if (typeof input !== 'string') return flags;

  // Example structural ambiguity patterns (design-level placeholders)
  if (input.includes(' or ')) flags.push('OR_AMBIGUITY');
  if (input.endsWith('?') && input.split('?').length > 2) flags.push('MULTIPLE_QUESTIONS');

  return flags;
}

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

module.exports = {
  preprocess
};
