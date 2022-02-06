import * as TYPE from '../types/types'

export const coordsOrdersReducer = (state = [], { type, payload }) => {
  switch (type) {
    case TYPE.GET_COORDS_ORDERS:
      return payload
    default:
      return state
  }
}

