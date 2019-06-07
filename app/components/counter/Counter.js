import React, { useState, useEffect } from "react"
import IncrementButton from "components/counter/IncrementButton"

export default function Counter() {
  const [count, setCount] = useState(0)
  const onIncrement = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <IncrementButton onIncrement={onIncrement} />
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}
