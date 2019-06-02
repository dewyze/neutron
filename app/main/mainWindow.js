import { BrowserWindow } from "electron"
import Config from "../api/config"

const config = new Config()

const mainWindow = new BrowserWindow({
  width: config.get("windowSize.width"),
  height: config.get("windowSize.height"),
  webPreferences: {
    nodeIntegration: true,
  },
})

mainWindow.on("will-resize", (event, newBounds) => {
  config.set({
    "windowSize.width": newBounds.width,
    "windowSize.height": newBounds.height,
  })
})

mainWindow.on("closed", () => {
  mainWindow.null
})

module.exports = mainWindow
