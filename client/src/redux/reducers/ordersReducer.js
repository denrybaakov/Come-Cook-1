import { CREATE_ORDERS, DELETE_ORDER, GET_ORDERS } from "../types/types";

export const ordersReducer = (state = [], { type, payload }) => {

  switch (type) {
    case GET_ORDERS:
      return payload;

    case CREATE_ORDERS:
      return [payload, ...state];

    case DELETE_ORDER:
      return state.filter(el => el.id !== payload);

    default:
      return state;
  }
}
