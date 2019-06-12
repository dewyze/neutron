import React from "react"
import { fireEvent, cleanup } from "@testing-library/react"
import Counter from "components/counter/Counter"

afterEach(cleanup)

test("renders the counter value", () => {
  const { getByTestId } = reduxRender(<Counter />, {
    initialState: { counter: { value: 3 } },
  })
  expect(getByTestId("counter").textContent).toBe("Counter: 3")
})

test("increment increases the count", () => {
  const { getByTestId, getByText } = reduxRender(<Counter />, {
    initialState: { counter: { value: 3 } },
  })
  fireEvent.click(getByText("Increment"))
  expect(getByTestId("counter").textContent).toBe("Counter: 4")
})

test("decrement decreases the count", () => {
  const { getByTestId, getByText } = reduxRender(<Counter />, {
    initialState: { counter: { value: 3 } },
  })
  fireEvent.click(getByText("Decrement"))
  expect(getByTestId("counter").textContent).toBe("Counter: 2")
})
