import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Style1 from "./components/Style1";

import Counter from "./Counter";
import store from "./store";
import { Provider } from "react-redux";
import ViewOne from "./ViewOne";
import AsyncArray from "./components/AsyncArray";

ReactDOM.render(
  // <Provider store={store}>
  //   <Counter />
  // </Provider>,
  // <ViewOne />,
  <AsyncArray />,
  document.getElementById("root")
);
