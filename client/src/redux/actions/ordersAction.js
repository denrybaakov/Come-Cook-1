import axios from "axios"
import { CREATE_ORDERS, GET_ORDERS } from "../types/types";

export const setOrders = (value) => ({
  type: GET_ORDERS,
  payload: value
})

export const getOrders = () => async (dispatch) => {
  const result = await axios('/orders');
  const result2 = result.data.allOrders.map(el => {
    return {
      ...el, 
      name: el.Client.name, 
      surname: el.Client.surname, 
      avatar: el.Client.avatar,
      status: el.Status.name 
    }
  })
  dispatch(setOrders(result2));
}

export const createOrders = (value) => async (dispatch) => {
  const result = await axios.post('/orders', value);
  console.log('order create action --->', result.data.newOrder);
  dispatch({type: CREATE_ORDERS, payload: result.data.newOrder})
}

export const getOrderItem = (id) => async (dispatch) => {
  const result = await axios(`/orders/${id}`);
  dispatch(setOrders(result.data.orderItem));
}
