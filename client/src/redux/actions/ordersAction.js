import axios from "axios"
import { SET_ORDERS } from "../types/types"

export const setOrders = (value) => {
  return {
    type: SET_ORDERS,
    payload: value
  }
}

export const getOrders = () => async (dispatch) => {
  const result = await axios('/orders');
  dispatch(setOrders(result.data.allOrders));
}

export const getOrderItem = (id) => async (dispatch) => {
  const result = await axios(`/orders/${id}`);
  dispatch(setOrders(result.data.orderItem));
}
