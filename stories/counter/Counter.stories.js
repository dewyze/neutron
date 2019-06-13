import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { Provider } from "react-redux"

import Counter from "components/counter/Counter"

const store = {
  getState: () => {
    return {
      counter: {
        value: 5,
      },
    }
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
}

storiesOf("Counter", module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add("basic", () => <Counter />)
