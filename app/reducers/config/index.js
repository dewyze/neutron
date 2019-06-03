import defaults from "app/reducers/defaults/defaultConfig";
import Config from "electron-store";

export default function(state = Config.store(defaults), action) {
  switch (action.type) {
    case "SET_WINDOW_SIZE":
      state.isSideNavFolded = action.isFolded;
      return Object.assign({}, state);
  }
  return state;
}
