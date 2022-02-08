export const initState = {
  client: null,
  cook: {},
  user: {},
  orders: [],
  ws: new WebSocket("ws://localhost:3001")
}
