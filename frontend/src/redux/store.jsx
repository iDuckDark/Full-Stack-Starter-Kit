import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import combineReducers from "./combineReducers";

export default createStore(
    combineReducers,
    applyMiddleware(thunk, createLogger())
);
