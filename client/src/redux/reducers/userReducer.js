import { SET_USER } from "../types/types"

export const userReducer = (state = {}, action) => {
  const {type, payload} = action

  switch (type) {
    case SET_USER: 
      return payload
  
    default: {
      return state
    } 
  }
}
