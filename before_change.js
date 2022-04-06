const helpers = require("./helpers");

/**
 * Posts a passed status to vendorA API for this vendor, course and user
 */
exports.vendorASessionPassed = async (fb) => {
  const vendorAApi = config?.env?.vendorA_api_url;
};

/**
 * @typedef {Object} PushParticipationProgressRequest
 * @property {string} secret
 */

/**
 * Posts a passed status to vendorB API for this vendor, course and user
 */
exports.vendorBSessionUpdate = async (fb, config, sessionId, updatedSession, lazyScenario, lazyUser) => {
  if (!updatedSession?.vendorBReportingId) return; // Return if session is not a vendorB session

  if (!config?.env?.vendorBBaseUrl || !config?.env?.vendorBSecret || !config?.env?.vendorBPartnerId) {
    throw new helpers.EngineError("Missing configuration for vendorB");
  }
};
