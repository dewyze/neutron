import React from "react"
import { fireEvent, cleanup } from "@testing-library/react"
import { IncrementButton } from "components/counter/IncrementButton"

afterEach(cleanup)

test("increment calls the callback", () => {
  const callback = jest.fn()
  const { getByText } = reduxRender(<IncrementButton onIncrement={callback} />)
  fireEvent.click(getByText("Increment"))
  expect(callback.mock.calls.length).toBe(1)
})
