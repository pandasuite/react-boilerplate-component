import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";

import React from "react";
import { createRoot } from "react-dom/client";
import { PandaBridgeRoot } from "pandasuite-bridge-react";
import "./index.css";
import App from "./App";
import IntlProvider from "./components/IntlProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <PandaBridgeRoot>
    <IntlProvider>
      <App />
    </IntlProvider>
  </PandaBridgeRoot>,
);
