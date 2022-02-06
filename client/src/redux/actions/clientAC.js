import axios from "axios"
import { SET_CLIENT } from "../types/types"

export const setClient = (value) => {
  return {
    type: SET_CLIENT,
    payload: value
  }
}

export const getСlient = (newUser, navigate) => async (dispatch) => {
  const res = await axios.post('/auth/signup', newUser)
  // console.log(res.data.user);
  dispatch(setClient(res.data.user)) 
  navigate('/profile') 
  
  // console.log(newUser);
}

export const signinClient = ( loginUser, navigate ) => async ( dispatch ) => {
  const res = await axios.post('/auth/signin', loginUser)
  console.log(res.data)
  dispatch(setClient(res.data))
  navigate('/profile') 

}

export const clientLogout = () => async (dispatch) => {
  await axios.post('/auth/logout')
  dispatch(setClient(null))
}
