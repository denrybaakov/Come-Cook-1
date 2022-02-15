import { combineReducers } from 'redux';
import { clientReducer } from '../reducers/clientReducer';
import { cookReducer } from '../reducers/cookReducer';
import { cuisinesReducer } from './cuisinesReducer';
import { messagesReducer } from './messageReducer';
import { orderIDReducer } from './orderIDReducer';
import { ordersCurrentClientReducer } from './ordersCurrentClientReducer';
import { ordersCurrentPovarReducer } from './ordersCurrentPovarReducer';
import { ordersFinishedClientReducer } from './ordersFinishedClientReducer';
import { ordersFinishedPovarReducer } from './ordersFinishedPovarReducer';
import { ordersNewPovarReducer } from './ordersNewPovarReducer';
import { ordersReducer } from "./ordersReducer";
import { povarIDReducer } from './povarIDReducer';
import { povarReducer } from './povarReducer';
import { userReducer } from './userReducer';
import { wsReducer } from './wsReducer';

export const rootReducer = combineReducers({
  orders: ordersReducer,
  client: clientReducer,
  cook: cookReducer,
  user: userReducer,
  orderID: orderIDReducer,
  povars: povarReducer,
  povarID: povarIDReducer,
  ws: wsReducer,
  messages : messagesReducer,
  ordersNewPovar: ordersNewPovarReducer,
  ordersCurrentPovar: ordersCurrentPovarReducer,
  ordersFinishedPovar: ordersFinishedPovarReducer,
  ordersCurrentClient: ordersCurrentClientReducer,
  ordersFinishedClient: ordersFinishedClientReducer,
  cuisines: cuisinesReducer
})
