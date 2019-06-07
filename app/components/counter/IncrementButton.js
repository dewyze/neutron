import React, { useState } from "react"

export default function IncrementButton(state) {
  return <button onClick={state.onIncrement}>Increment Component</button>
}
