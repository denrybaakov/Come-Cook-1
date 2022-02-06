import { combineReducers } from "redux";
import { ordersReducer } from "./ordersReducer";
import { coordsOrdersReducer } from "./coordsOrdersReducer";

export const rootReducer = combineReducers({
  orders: ordersReducer,
  coords: coordsOrdersReducer
})
