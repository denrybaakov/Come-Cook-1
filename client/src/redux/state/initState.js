export const initState = {
  client: {},
  cook: {},
  user: {},
  orders: [],
  orderID: {},
  povars: [],
  povarID: {},
  ws: new WebSocket("ws://localhost:3001"),
  messages: [],
  ordersNewPovar: [],
  ordersCurrentPovar: [],
  ordersFinishedPovar: [],
  ordersCurrentClient: [],
  ordersFinishedClient: [],
  cuisines: []
}
