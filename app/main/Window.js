import { BrowserWindow } from "electron"
import Config from "../api/config"
import { throttle } from "lodash"

const config = new Config()

export default class Window {
  constructor() {
    const win = new BrowserWindow({
      x: config.get("windowSize.x"),
      y: config.get("windowSize.y"),
      width: config.get("windowSize.width"),
      height: config.get("windowSize.height"),
      minWidth: 500,
      minHeight: 320,
      webPreferences: {
        nodeIntegration: true,
      },
    })

    win.on("resize", throttle(this.setWindowSize, 1000))
    win.on("move", throttle(this.setWindowSize, 1000))

    win.on("closed", () => {
      win.null
    })

    return win
  }

  setWindowSize() {
    try {
      config.set("windowSize", this.getBounds())
    } catch (e) {
      console.log(e) // eslint-disable-line no-console
    }
  }
}
