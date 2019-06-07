import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { store } from "./store"
import { AppContainer } from "react-hot-loader"

import Root from "./containers/Root"

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
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
