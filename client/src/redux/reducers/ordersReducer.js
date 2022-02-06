import * as TYPE from '../types/types'

export const ordersReducer = (state = [], { type, payload }) => {

  switch (type) {
    case TYPE.GET_ORDERS:
      return payload;
    default:
      return state;
  }
}
