import axios from "axios";
import { GET_POVAR_ID } from "../types/types"

export const getPovarID = (value) => {
  return {
    type: GET_POVAR_ID,
    payload: value
  }
}

export const getPovarPage = (id) => async (dispatch) => {
  const result = await axios(`/povars/${id}`);
  dispatch(getPovarID(result.data.onePovar));
}
