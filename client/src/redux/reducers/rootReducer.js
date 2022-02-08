import { combineReducers } from 'redux';
import { clientReducer } from '../reducers/clientReducer';
import { cookReducer } from '../reducers/cookReducer';
import { ordersReducer } from "./ordersReducer";
import { userReducer } from './userReducer';
import { wsReducer } from './wsReducer';

export const rootReducer = combineReducers({
  orders: ordersReducer,
  client: clientReducer,
  cook: cookReducer,
  user: userReducer,
  ws: wsReducer,
})
