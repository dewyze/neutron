import React from "react"
import { ConnectedRouter } from "connected-react-router"
import { createMemoryHistory } from "history"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { render } from "@testing-library/react"
import reducer from "reducers"

global.reduxRender = (
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
    initialState,
    store = createStore(reducer(history), initialState),
  } = {}
) => {
  return {
    ...render(
      <Provider store={store}>
        <ConnectedRouter history={history}>{ui}</ConnectedRouter>
      </Provider>
    ),
    store,
  }
}
