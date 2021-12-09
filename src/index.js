import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Style1 from "./components/Style1";

import Counter from "./Counter";
import store from "./store";
import { Provider } from "react-redux";
import ViewOne from "./ViewOne";

ReactDOM.render(
  // <Provider store={store}>
  //   <Counter />
  // </Provider>,
  <ViewOne />,
  document.getElementById("root")
);
