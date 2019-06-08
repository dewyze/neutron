import { app } from "electron"
import Window from "main/Window"

let mainWindow

if (process.env.NODE_ENV === "production") {
  const sourceMapSupport = require("source-map-support")
  sourceMapSupport.install()
}

const installExtensions = async () => {
  const installer = require("electron-devtools-installer")
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS
  const extensions = ["REACT_DEVELOPER_TOOLS", "REDUX_DEVTOOLS"]

  return Promise.all(
    extensions.map(name => installer.default(installer[name], forceDownload))
  ).catch(console.log) // eslint-disable-line no-console
}

function createWindow() {
  mainWindow = new Window()

  mainWindow.loadURL(`file://${__dirname}/index.html`)
}

app.on("ready", async () => {
  if (
    process.env.NODE_ENV === "development" ||
    process.env.DEBUG_PROD === "true"
  ) {
    await installExtensions()
  }

  createWindow()
  mainWindow.webContents.openDevTools()
})

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") app.quit()
})

app.on("activate", function() {
  if (mainWindow === null) createWindow()
})
