import { EDIT_CLIENT, SET_CLIENT } from "../types/types";

export const clientReducer = (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_CLIENT:
      return payload

    case EDIT_CLIENT:
      return state.map(el => {
        if (el.id === payload.id) {
          return { ...payload }
        } else {
          return el
        }
      })

    default:
      return state
  }

}
