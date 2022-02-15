import { DELETE_ORDER_CURRENT_CLIENT, EDIT_ORDERS_CURRENT_CLIENT, GET_ALL_CURRENT_ORDERS_CLIENT } from "../types/types";

export const ordersCurrentClientReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_CURRENT_ORDERS_CLIENT:
      return payload;

    case EDIT_ORDERS_CURRENT_CLIENT:
      console.log(action);
      return state.map(el => {
        if (el.id === payload.id) {
          return { ...payload };
        } else {
          return el;
        }
      });

    case DELETE_ORDER_CURRENT_CLIENT:
      return state.filter(el => el.id !== payload);

    default:
      return state;
  }
}
