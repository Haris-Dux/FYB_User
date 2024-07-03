import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "./index.css";
import axios from "axios";
import TagManager from "react-gtm-module";


axios.defaults.withCredentials = true;

const tagManagerArgs = {
  gtmId: "GTM-M22FW3SS",
};

TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
