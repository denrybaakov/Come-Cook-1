import { GET_POVAR_ID } from "../types/types";

export const povarIDReducer = (state = {}, action) => {
  const {type, payload } = action;

  switch (type) {
    case GET_POVAR_ID:
      return payload;
  
    default:
      return state;
  }
}
