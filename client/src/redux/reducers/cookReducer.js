import { SET_COOK } from "../types/types"

export const cookReducer = (state = {}, action) => {
  const {type, payload} = action

  switch (type) {
    case SET_COOK: 
      return payload

      
   
  
    default: {
      return state
    }
      
  }
  
}
