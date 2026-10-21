import React, { useState } from "react";
import { DecisionGraph, JdmConfigProvider } from "@gorules/jdm-editor";
import "@gorules/jdm-editor/dist/style.css";
import { emptyDecisionGraph } from "./empty-decision-graph";

const PANES = [
  { id: "rules", label: "Rules", summary: "Draft only" },
  { id: "graph", label: "Combined Graph", summary: "No revision yet" },
  { id: "provenance", label: "Provenance", summary: "No ledger yet" },
];

export default function App() {
  const [activePane, setActivePane] = useState("graph");
  const [draft, setDraft] = useState(emptyDecisionGraph);
  const inactive = PANES.filter((pane) => pane.id !== activePane);
  const active = PANES.find((pane) => pane.id === activePane);

  return (
    <main className="shell">
      <header className="shell-bar">
        <strong>SpiderFeet Context</strong>
        <span>Backend simulation is authoritative. This draft is not a release.</span>
      </header>
      <section className="shell-stage" aria-label={active.label}>
        {activePane === "rules" ? (
          <JdmConfigProvider>
            <DecisionGraph value={draft} onChange={setDraft} />
          </JdmConfigProvider>
        ) : null}
        {activePane === "graph" ? (
          <p className="shell-placeholder" id="combined-graph-pane">
            Combined graph appears here after an explicit merge.
          </p>
        ) : null}
        {activePane === "provenance" ? (
          <p className="shell-placeholder" id="provenance-pane">
            Provenance appears here after a revision exists.
          </p>
        ) : null}
      </section>
      <nav className="shell-summaries" aria-label="Inactive panes">
        {inactive.map((pane) => (
          <button key={pane.id} type="button" onClick={() => setActivePane(pane.id)}>
            <span>{pane.label}</span>
            <small>{pane.summary}</small>
          </button>
        ))}
      </nav>
    </main>
  );
}
