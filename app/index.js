import React from "react"
import ReactDOM from "react-dom"
import { store, history } from "./store"
import { AppContainer } from "react-hot-loader"
import { ConnectedRouter } from "connected-react-router"
import { Provider } from "react-redux"

import Root from "./containers/Root"

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <ConnectedRouter history={history}>
          {" "}
          {/* place ConnectedRouter under Provider */}
          <Component />
        </ConnectedRouter>
      </AppContainer>
    </Provider>,
    document.getElementById("root")
  )
}

render(Root)

if (module.hot) {
  module.hot.accept("./containers/Root", () => {
    render(Root)
  })
}
