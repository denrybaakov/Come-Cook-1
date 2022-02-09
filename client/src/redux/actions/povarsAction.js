import axios from "axios"
import { GET_POVARS } from "../types/types"

export const setPovars = (value) => {
  return {
    type: GET_POVARS,
    payload: value
  }
}

export const getPovars = () => async (dispatch) => {
  const result = await axios('/povars');
  console.log('povars action ---->', result.data.allPovars);
  dispatch(setPovars(result.data.allPovars))
}
