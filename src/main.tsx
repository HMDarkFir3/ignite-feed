import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import { App } from "@src/App";

import { GlobalStyle } from "@themes/globals";
import { dark } from "@themes/dark";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
