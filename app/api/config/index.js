import schema from "./defaults"
import Store from "electron-store"

export default class Config {
  constructor() {
    return new Store({ name: "novel.config", schema })
  }
}
