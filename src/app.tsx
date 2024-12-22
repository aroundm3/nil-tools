import "./index.css"; // import css

import * as React from "react";
import { createRoot } from "react-dom/client";
import AppLayout from "./apps/components/AppLayout";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <AppLayout>
      <h1 className="text-2xl text-purple-700">Hello react</h1>
    </AppLayout>
  </React.StrictMode>
);
