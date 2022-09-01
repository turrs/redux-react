import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

const globalState = {
  count: 98,
};

//reducer
// eslint-disable-next-line no-unused-vars
const rootReducer = (state = globalState, action) => {
  return state;
};

//store
const storeRedux = createStore(rootReducer);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={storeRedux}>
      <App />
    </Provider>
  </React.StrictMode>
);
