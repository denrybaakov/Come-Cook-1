import { SET_COOK, SET_COOK_AVATAR } from "../types/types"

export const cookReducer = (state = {}, action) => {
  const {type, payload} = action

  switch (type) {
    case SET_COOK: 
      return payload

      // case SET_COOK_AVATAR: 
      // return payload



    default: {
      return state
    }
      
  }
  
}
