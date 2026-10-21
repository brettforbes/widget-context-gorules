const fs = require("fs");
const path = require("path");
const { DEV_PORT, HEADERS, WASM_ISOLATION } = require("../src/shell-config");

const headerText = JSON.stringify(HEADERS);
if (DEV_PORT === 4001) {
  throw new Error("context widget still uses Composer port 4001");
}
if (/Cross-Origin-Embedder-Policy|Cross-Origin-Opener-Policy/.test(headerText)) {
  throw new Error("cross-origin isolation headers are not allowed in W1");
}
if (WASM_ISOLATION !== "deferred") {
  throw new Error("WASM isolation must stay deferred until an embed test enables it");
}
const html = fs.readFileSync(path.join(__dirname, "../src/html/app.html"), "utf8");
if (!html.includes('id="context-root"')) {
  throw new Error("React mount is missing");
}
if (html.includes("sample")) {
  throw new Error("startup template still references a sample file");
}
console.log("w1-config-ok");
