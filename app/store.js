import { combineReducers, createStore } from "redux";
// import { routerReducer } from "react-router-redux";


const defaultConfig = {};
const config = Config(defaultConfig);


const defaultStatus = {
  updateReady: false
};

const reducer = combineReducers({
  data,
  config,
  status,
  routing: routerReducer
});

const store = createStore(reducer);
