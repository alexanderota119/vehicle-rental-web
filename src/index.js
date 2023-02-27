import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./router";
import store from "./store";
import { Provider } from "react-redux";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
//...
let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
