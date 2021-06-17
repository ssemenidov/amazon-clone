import { combineReducers } from "redux";
import { busketReducer } from "./busketReducer";

export const rootReducer = combineReducers({
  busket: busketReducer,
});
