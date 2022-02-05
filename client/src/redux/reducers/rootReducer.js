import { combineReducers } from "redux";
import { ordersReducer } from "./ordersReducer";

export const rootReducer = combineReducers({
  orders: ordersReducer
})
