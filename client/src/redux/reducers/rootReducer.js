import { combineReducers } from 'redux';
import { clientReducer } from '../reducers/clientReducer';
import { cookReducer } from '../reducers/cookReducer';
import { orderIDReducer } from './orderIDReducer';
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

})
