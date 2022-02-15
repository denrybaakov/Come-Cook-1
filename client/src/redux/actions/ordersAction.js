import axios from "axios"
import { CREATE_ORDERS, DELETE_ORDER, DELETE_ORDER_CURRENT_CLIENT, EDIT_ORDER, EDIT_ORDERS_CURRENT_CLIENT, GET_ALL_CURRENT_ORDERS_CLIENT, GET_ALL_CURRENT_ORDERS_POVAR, GET_ALL_FINISHED_ORDERS_CLIENT, GET_ALL_FINISHED_ORDERS_POVAR, GET_ALL_NEW_ORDERS_POVAR, GET_ORDERS } from "../types/types";

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
  const result2 = result.data.newOrdersPovar.map(el => {
    return {
      ...el,
      name: el.Client.name,
      surname: el.Client.surname,
      avatar: el.Client.avatar,
      status: el.Status.name
    }
  })
  dispatch(setNewOrdersPovar(result2))
}

export const setCurrentOrdersPovar = (value) => ({
  type: GET_ALL_CURRENT_ORDERS_POVAR,
  payload: value
})

export const getCurrentOrdersPovar = (id) => async (dispatch) => {
  const result = await axios(`/orders/povar/${id}/current`);
  const result2 = result.data.currentOrdersPovar.map(el => {
    return {
      ...el,
      name: el.Client.name,
      surname: el.Client.surname,
      avatar: el.Client.avatar,
      status: el.Status.name
    }
  })
  dispatch(setCurrentOrdersPovar(result2))
}

export const setFinishedOrdersPovar = (value) => ({
  type: GET_ALL_FINISHED_ORDERS_POVAR,
  payload: value
})

export const getFinishedOrdersPovar = (id) => async (dispatch) => {
  const result = await axios(`/orders/povar/${id}/finished`);
  const result2 = result.data.finishedOrdersPovar.map(el => {
    return {
      ...el,
      name: el.Client.name,
      surname: el.Client.surname,
      avatar: el.Client.avatar,
      status: el.Status.name
    }
  })
  dispatch(setFinishedOrdersPovar(result2))
}

export const setCurrentOrdersClient = (value) => ({
  type: GET_ALL_CURRENT_ORDERS_CLIENT,
  payload: value
})

export const getCurrentOrdersClient = (id) => async (dispatch) => {
  const result = await axios(`/orders/client/${id}/current`);
  const result2 = result.data.currentOrdersClient.map(el => {
    return {
      ...el,
      status: el.Status.name
    }
  })
  dispatch(setCurrentOrdersClient(result2))
}

export const updateOrderCurrentClient = (value) => async (dispatch) => {
  const result = await axios.put(`/orders/client/${value.id}/current`, value);
  const result2 = {
    ...result.data.updatedOrder,
    status: result.data.updatedOrder.Status.name
  }
  dispatch({ type: EDIT_ORDERS_CURRENT_CLIENT, payload: result2 })
}

export const deleteOrdersCurrentClient = (id) => async (dispatch) => {
  await axios.delete(`/orders/${id}`);
  dispatch({ type: DELETE_ORDER_CURRENT_CLIENT, payload: id })
}

export const setFinishedOrdersClient = (value) => ({
  type: GET_ALL_FINISHED_ORDERS_CLIENT,
  payload: value
})

export const getFinishedOrdersClient = (id) => async (dispatch) => {
  const result = await axios(`/orders/client/${id}/finished`);
  const result2 = result.data.finishedOrdersClient.map(el => {
    return {
      ...el,
      status: el.Status.name
    }
  })
  dispatch(setFinishedOrdersClient(result2))
}
