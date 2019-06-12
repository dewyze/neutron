import React from "react"
import { fireEvent, cleanup } from "@testing-library/react"
import { DecrementButton } from "components/counter/DecrementButton"

afterEach(cleanup)

test("increment calls the callback", () => {
  const callback = jest.fn()
  const { getByText } = reduxRender(<DecrementButton onDecrement={callback} />)
  fireEvent.click(getByText("Decrement"))
  expect(callback.mock.calls.length).toBe(1)
})
