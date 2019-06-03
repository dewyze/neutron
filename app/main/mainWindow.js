import { BrowserWindow } from "electron"
import Config from "../api/config"
import { throttle } from "lodash"

const config = new Config()

const mainWindow = new BrowserWindow({
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

mainWindow.on("resize", throttle(setWindowSize, 1000));
mainWindow.on("move", throttle(setWindowSize, 1000));

mainWindow.on("closed", () => {
  mainWindow.null
})

function setWindowSize() {
  try {
    config.set("windowSize", mainWindow.getBounds())
  } catch(e) {
  }
}

module.exports = mainWindow
