import axios from "axios"
import { CREATE_ORDERS, DELETE_ORDER, EDIT_ORDER, GET_ALL_CURRENT_ORDERS_CLIENT, GET_ALL_CURRENT_ORDERS_POVAR, GET_ALL_FINISHED_ORDERS_CLIENT, GET_ALL_FINISHED_ORDERS_POVAR, GET_ALL_NEW_ORDERS_POVAR, GET_ORDERS } from "../types/types";

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
  dispatch({ type: CREATE_ORDERS, payload: result.data.newOrder })
}

export const deleteOrders = (id) => async (dispatch) => {
  await axios.delete(`/orders/${id}`);
  dispatch({ type: DELETE_ORDER, payload: id })
}

export const updateOrder = (value) => async (dispatch) => {
  const result = await axios.put(`/orders/${value.id}`, value);
  dispatch({ type: EDIT_ORDER, payload: result.data.updatedOrder })
}

////////

export const setNewOrdersPovar = (value) => ({
  type: GET_ALL_NEW_ORDERS_POVAR,
  payload: value
})

export const getNewOrdersPovar = () => async (dispatch) => {
  const result = await axios('/orders/povar/new');
  dispatch(setNewOrdersPovar(result.data.newOrdersPovar))
}

export const setCurrentOrdersPovar = (value) => ({
  type: GET_ALL_CURRENT_ORDERS_POVAR,
  payload: value
})

export const getCurrentOrdersPovar = (id) => async (dispatch) => {
  const result = await axios(`/orders/povar/${id}/current`);
  dispatch(setCurrentOrdersPovar(result.data.currentOrdersPovar))
}

export const setFinishedOrdersPovar = (value) => ({
  type: GET_ALL_FINISHED_ORDERS_POVAR,
  payload: value
})

export const getFinishedOrdersPovar = (id) => async (dispatch) => {
  const result = await axios(`/orders/povar/${id}/finished`);
  dispatch(setFinishedOrdersPovar(result.data.finishedOrdersPovar))
}

export const setCurrentOrdersClient = (value) => ({
  type: GET_ALL_CURRENT_ORDERS_CLIENT,
  payload: value
})

export const getCurrentOrdersClient = (id) => async (dispatch) => {
  const result = await axios(`/orders/client/${id}/current`);
  dispatch(setCurrentOrdersClient(result.data.currentOrdersClient))
}

export const setFinishedOrdersClient = (value) => ({
  type: GET_ALL_FINISHED_ORDERS_CLIENT,
  payload: value
})

export const getFinishedOrdersClient = (id) => async (dispatch) => {
  const result = await axios(`/orders/client/${id}/finished`);
  dispatch(setFinishedOrdersClient(result.data.finishedOrdersClient))
}
