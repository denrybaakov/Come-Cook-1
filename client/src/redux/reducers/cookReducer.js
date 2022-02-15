import { EDIT_POVAR, SET_COOK } from "../types/types"

export const cookReducer = (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_COOK:
      return payload

    case EDIT_POVAR:
      return state.map(el => {
        if (el.id === payload.id) {
          return { ...payload }
        } else {
          return el
        }
      })

    default: {
      return state
    }

  }

}
