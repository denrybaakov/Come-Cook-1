import { GET_ORDER_ID } from "../types/types";

export const orderIDReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ORDER_ID:
      return payload;

    default:
      return state;
  }
}
