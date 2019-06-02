import { app } from "electron"
import schema from "./defaults"
import Store from "electron-store"

class Config {
  constructor() {
    return new Store({ name: "novel.config", schema })
  }
}

module.exports = Config
