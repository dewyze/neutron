import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "actions/types"

export default function counter(state = { value: 0 }, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        value: state.value + 1,
      }
    case DECREMENT_COUNTER:
      return {
        value: state.value - 1,
      }
    default:
      return state
  }
}
