import { GET_ALL_FINISHED_ORDERS_CLIENT } from "../types/types";

export const ordersFinishedClientReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_FINISHED_ORDERS_CLIENT:
      return payload;

    default:
      return state;
  }
}
