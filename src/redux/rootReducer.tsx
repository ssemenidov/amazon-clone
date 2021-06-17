import { combineReducers } from "redux";
import { busketReducer } from "./busketReducer";
import { catalogReducer } from "./catalogReducer";
export const rootReducer = combineReducers({
  busket: busketReducer,
  catalog: catalogReducer,
});
