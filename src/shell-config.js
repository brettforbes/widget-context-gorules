/** Dev server policy for the context iframe. Composer owns port 4001. */

const DEV_PORT = 4011;

const HEADERS = {
  "Cross-Origin-Resource-Policy": "cross-origin",
};

const WASM_ISOLATION = "deferred";

module.exports = {
  DEV_PORT,
  HEADERS,
  WASM_ISOLATION,
};
