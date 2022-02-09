import { initState } from "../state/initState";

export const wsReducer = (state = initState, action) => {

  const { type, payload } = action;

  switch (type) {
    case 'WS_CONNECT':

      return new WebSocket("ws://localhost:3042");

    default:
      return state;
  }
}
