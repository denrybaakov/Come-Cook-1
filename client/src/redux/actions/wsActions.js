import { NEW_MESSAGE } from "../types/types"

export const setMessage = (value) => {
  return {
    type: NEW_MESSAGE,
    payload: value,
  }
}
