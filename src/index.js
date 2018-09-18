import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// import { store } from './stores';
import { RootStore } from "./stores";
// import { SessionStore } from "./stores/session.store";
import { app } from "./firebase";

let store = new RootStore();
console.log("store -> ", store);

const rootComponent = (
  <Provider {...store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(rootComponent, document.getElementById("root"));
registerServiceWorker();
