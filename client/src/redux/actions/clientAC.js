import axios from "axios"
import { SET_CLIENT } from "../types/types"
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
  console.log(res.data)
  dispatch(setUser(res.data))

}

export const clientLogout = () => async (dispatch) => {
  await axios.post('/auth/logout')
  dispatch(setClient(null))
}
