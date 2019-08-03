import { createStore } from "redux";
import { user } from "./reducers/index";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

export const createmyStore = () =>
  createStore(user, applyMiddleware(thunk, logger));
