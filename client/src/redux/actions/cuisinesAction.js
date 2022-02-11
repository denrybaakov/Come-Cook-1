import axios from "axios"
import { GET_CUISINES } from "../types/types"

export const setCuisines = (value) => {
  return {
    type: GET_CUISINES,
    payload: value
  }
}

export const getCuisines = () => async (dispatch) => {
  const result = await axios('/cuisines');
  dispatch(setCuisines(result.data.cuisines))
}
