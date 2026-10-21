/** Inline starter graph. The shell does not load a sample JSON file. */

export const emptyDecisionGraph = {
  nodes: [
    {
      id: "request",
      type: "inputNode",
      position: { x: 80, y: 120 },
      name: "Request",
    },
    {
      id: "response",
      type: "outputNode",
      position: { x: 520, y: 120 },
      name: "Response",
    },
  ],
  edges: [],
};
