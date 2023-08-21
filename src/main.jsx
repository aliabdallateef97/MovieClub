import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/core/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import App from "@/core/App";
import { Loader } from "./core/components";

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.Suspense fallback={<Loader />}>
          <App />
        </React.Suspense>
      </PersistGate>
    </Provider>
  </HashRouter>
);
