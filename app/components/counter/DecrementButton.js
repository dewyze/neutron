import React from "react"

export const DecrementButton = React.memo(({ onDecrement }) => (
  <button onClick={onDecrement}>Decrement Component</button>
))
