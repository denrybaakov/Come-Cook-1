import { combineReducers } from 'redux';
import { clientReducer } from '../reducers/clientReducer';
import { cookReducer } from '../reducers/cookReducer';
import { ordersReducer } from "./ordersReducer";

export const rootReducer = combineReducers({
    client: clientReducer,
    cook: cookReducer,
    orders: ordersReducer
})
