import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppShell from "./shared/components/AppShell/AppShell.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppShell />
  </React.StrictMode>
);
