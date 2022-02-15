import axios from "axios";
import { GET_ORDER_ID } from "../types/types"

export const getOrderID = (value) => {
  return {
    type: GET_ORDER_ID,
    payload: value
  }
}

export const getOrderItem = (id) => async (dispatch) => {
  const result = await axios(`/orders/${id}`);
  const result2 = {
    ...result.data.orderItem,
    clientName: result.data.orderItem.Client.name,
    clientSurname: result.data.orderItem.Client.surname,
    clientAvatar: result.data.orderItem.Client.avatar,
    clientEmail: result.data.orderItem.Client.email,
    clientPhone: result.data.orderItem.Client.phone,
    clientAbout: result.data.orderItem.Client.about,
    status: result.data.orderItem.Status.name,
  }
  dispatch(getOrderID(result2));
}
