import axios from "axios"
import { SET_USER } from "../types/types"

export const setUser = (value) => {
  return {
      type: SET_USER,
      payload: value
  }
}


export const checkUser = () => (dispatch) => {
  axios.post('/auth/check')
  .then(res => dispatch(setUser(res.data.user)))
  .catch((error) => dispatch(setUser(null)))
  
}

export const userLogout = () => async (dispatch) => {
  await axios.post('/auth/logout')
  dispatch(setUser(null))
}
