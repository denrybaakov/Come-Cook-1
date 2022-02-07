import axios from "axios"
import * as TYPE from '../types/types'

export const setOrders = (value) => ({
  type: TYPE.GET_ORDERS,
  payload: value
})

export const getOrders = () => async (dispatch) => {
  const result = await axios('/orders');
  dispatch(setOrders(result.data.allOrders));
}

export const createOrders = (value) => async (dispatch) => {
  const result = await axios.post('/orders', value);
  console.log('order create action --->', result.data.newOrder);
  dispatch({type: TYPE.CREATE_ORDERS, payload: result.data.newOrder})
}

// export const getOrderItem = (id) => async (dispatch) => {
//   const result = await axios(`/orders/${id}`);
//   dispatch(setOrders(result.data.orderItem));
// }
