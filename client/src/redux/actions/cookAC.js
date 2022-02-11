import axios from "axios"
import { EDIT_POVAR, SET_COOK } from "../types/types"
import { setUser, checkUser } from "./userAC"

export const setCook = (value) => {
  return {
    type: SET_COOK,
    payload: value
  }
}

export const getPovar = (newUser) => async (dispatch) => {
  console.log(newUser);
  const res = await axios.post('/auth/signup', newUser)
  console.log(res.data.user);
  dispatch(setUser(res.data.user)) 
}

export const signInCook = ( loginUser) => async ( dispatch ) => {
  const res = await axios.post('/auth/signin', loginUser)
  dispatch(setUser(res.data))

}

export const clientLogout = () => async (dispatch) => {
  await axios.post('/auth/logout')
  dispatch(setCook(null))
}

//


export const getOnePovar = (id) => async (dispatch) => {
  const result = await axios(`/settings/povar/${id}`);
  dispatch(setCook(result.data.onePovar))
}

export const editPovar = (value) => async (dispatch) => {
  const result = await axios.put(`/settings/povar/`, value)
  const res = await axios.post('/auth/check')
  dispatch(setUser(res.data.user))
  dispatch({type: EDIT_POVAR, payload: result.data.povar})
  
}




