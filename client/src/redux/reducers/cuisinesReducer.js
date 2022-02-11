import { GET_CUISINES } from "../types/types";

export const cuisinesReducer = (state = [], action) => {
  const {type, payload } = action;

  switch (type) {
    case GET_CUISINES:
      return payload;
  
    default:
      return state;
  }
}
