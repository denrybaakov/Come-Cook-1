import { GET_ALL_NEW_ORDERS_POVAR } from "../types/types";

export const ordersNewPovarReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_NEW_ORDERS_POVAR:
      return payload;

    default:
      return state;
  }
}
