import PropTypes from "prop-types"
import React from "react"

export const DecrementButton = React.memo(({ onDecrement }) => (
  <button onClick={onDecrement}>Decrement Component</button>
))

DecrementButton.propTypes = {
  onDecrement: PropTypes.func,
}
