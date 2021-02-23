import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { loadState } from "./localstorage";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "react-router-redux";
import rootReducer from "../reducers/rootReducer";

const persistedStore = loadState();

export const history = createBrowserHistory();

export default createStore(
  rootReducer,
  persistedStore,
  applyMiddleware(routerMiddleware(history), logger)
);
