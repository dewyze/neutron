import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Root from "./containers/Root";

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  );
};

render(Root);

if (module.hot) {
  module.hot.accept("./containers/Root", () => {
    render(Root);
  });
}
