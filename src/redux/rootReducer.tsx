import { combineReducers } from "redux";
import { basketReducer } from "./basketReducer";
import { catalogReducer } from "./catalogReducer";
export const rootReducer = combineReducers({
  basket: basketReducer,
  catalog: catalogReducer,
});
