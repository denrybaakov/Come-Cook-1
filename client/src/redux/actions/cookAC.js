import axios from "axios"
import { SET_COOK } from "../types/types"

export const setCook = (value) => {
  return {
    type: SET_COOK,
    payload: value
  }
}

export const getPovar = (newUser, navigate) => async (dispatch) => {
  console.log(newUser);
  const res = await axios.post('/auth/signup', newUser)
  console.log(res.data.user);
  dispatch(setCook(res.data.user)) 
  navigate('/profile') 
}

export const signInCook = ( loginUser, navigate ) => async ( dispatch ) => {
  const res = await axios.post('/auth/signin', loginUser)
  console.log(res.data)
  dispatch(setCook(res.data))
  navigate('/profile') 

}

export const clientLogout = () => async (dispatch) => {
  await axios.post('/auth/logout')
  dispatch(setCook(null))
}
