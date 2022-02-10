import axios from "axios"
import { EDIT_CLIENT, SET_CLIENT } from "../types/types"
import { setUser } from "./userAC"

export const setClient = (value) => {
  return {
    type: SET_CLIENT,
    payload: value
  } 
}

export const getСlient = (newUser) => async (dispatch) => {
  const res = await axios.post('/auth/signup', newUser)
  dispatch(setUser(res.data.user)) 
}

export const signinClient = ( loginUser) => async ( dispatch ) => {
  const res = await axios.post('/auth/signin', loginUser)
  dispatch(setUser(res.data))
}

export const clientLogout = () => async (dispatch) => {
  await axios.post('/auth/logout')
  dispatch(setClient(null))
}

///

export const getOneClient = (id) => async (dispatch) => {
  const result = await axios(`/settings/client/${id}`);
  dispatch(setClient(result.data.oneClient))
}

export const editClient = (value) => async (dispatch) => {
  const result = await axios.put(`/settings/client/${value.id}`, value)
  dispatch({type: EDIT_CLIENT, payload: result.data.client})
}
