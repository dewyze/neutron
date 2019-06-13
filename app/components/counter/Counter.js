import React, { useCallback } from "react"
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "actions/types"
import { useSelector, useDispatch } from "react-redux"
import { IncrementButton } from "components/counter/IncrementButton"
import { DecrementButton } from "components/counter/DecrementButton"
import styles from "./Counter.scss"

export default function Counter() {
  const dispatch = useDispatch()
  const count = useSelector(state => state.counter.value)

  const onIncrement = useCallback(() => dispatch({ type: INCREMENT_COUNTER }), [
    dispatch,
  ])
  const onDecrement = useCallback(() => dispatch({ type: DECREMENT_COUNTER }), [
    dispatch,
  ])

  return (
    <div>
      <h1 className={styles.red} data-testid="counter">
        Counter: {count}
      </h1>
      <IncrementButton onIncrement={onIncrement} />
      <DecrementButton onDecrement={onDecrement} />
    </div>
  )
}
