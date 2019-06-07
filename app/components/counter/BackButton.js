import React from "react"
import { back } from "api/router"

export const BackButton = React.memo(() => (
  <button onClick={back}>Go Back</button>
))
