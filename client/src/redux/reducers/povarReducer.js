import { GET_POVARS } from "../types/types";

export const povarReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_POVARS:
      return payload;
  
    default:
      return state;
  }
}
