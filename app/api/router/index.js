import { goBack } from "connected-react-router"

import { store } from "store"

export function back() {
  store.dispatch(goBack())
}
