import { GET_ALL_FINISHED_ORDERS_POVAR } from "../types/types";

export const ordersFinishedPovarReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_FINISHED_ORDERS_POVAR:
      return payload;

    default:
      return state;
  }
}
