import { CREATE_ORDERS, GET_ORDERS } from "../types/types";

export const ordersReducer = (state = [], { type, payload }) => {

  switch (type) {
    case GET_ORDERS:
      return payload;

    case CREATE_ORDERS:
      return [payload, ...state];
      
    default:
      return state;
  }
}
