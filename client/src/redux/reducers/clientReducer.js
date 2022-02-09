import { SET_CLIENT } from "../types/types";
export const clientReducer = (state = {}, action) => {
  const {type, payload} = action

  switch (type) {
    case SET_CLIENT: 
      return payload

      
   
  
    default: {
      return state
    }
      
  }
  
}
