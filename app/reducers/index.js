import { combineReducers } from "redux"
import counter from "reducers/counter"
import { connectRouter } from "connected-react-router"

export default history =>
  combineReducers({
    router: connectRouter(history),
    counter,
  })
