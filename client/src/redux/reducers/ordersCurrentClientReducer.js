import { GET_ALL_CURRENT_ORDERS_CLIENT } from "../types/types";

export const ordersCurrentClientReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_CURRENT_ORDERS_CLIENT:
      return payload;

    default:
      return state;
  }
}
