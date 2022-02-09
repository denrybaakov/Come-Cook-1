import { GET_ALL_CURRENT_ORDERS_POVAR } from "../types/types";

export const ordersCurrentPovarReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_CURRENT_ORDERS_POVAR:
      return payload;

    default:
      return state;
  }
}
