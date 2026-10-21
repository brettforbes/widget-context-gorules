import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./shell.css";

const mount = document.getElementById("context-root");
if (!mount) {
  throw new Error("context-root is missing");
}
createRoot(mount).render(<App />);
