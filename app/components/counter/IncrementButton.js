import PropTypes from "prop-types"
import React from "react"

export const IncrementButton = React.memo(({ onIncrement }) => (
  <button onClick={onIncrement}>Increment</button>
))

IncrementButton.propTypes = {
  onIncrement: PropTypes.func,
}
