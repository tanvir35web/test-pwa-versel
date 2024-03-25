import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RamadanProvider } from "./context-api/RamadanContext.jsx";
import * as serviceWorkerRegistration from '../serviceWorkerRegistration.js';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RamadanProvider>
      <App />
    </RamadanProvider>
  </React.StrictMode>,
);

serviceWorkerRegistration.unregister();
