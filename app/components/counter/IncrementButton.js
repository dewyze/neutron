import React from "react"

export const IncrementButton = React.memo(({ onIncrement }) => (
  <button onClick={onIncrement}>Increment Component</button>
))
