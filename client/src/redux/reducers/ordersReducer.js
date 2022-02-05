import { SET_ORDERS } from "../types/types";

export const ordersReducer = (state =[], action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ORDERS:
      return payload;
        
    default:
      return state;
  }
}
