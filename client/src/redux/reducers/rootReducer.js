import { combineReducers } from 'redux';
import { clientReducer } from '../reducers/clientReducer';
import { cookReducer } from '../reducers/cookReducer';
import { ordersReducer } from "./ordersReducer";
import { coordsOrdersReducer } from "./coordsOrdersReducer";

export const rootReducer = combineReducers({
    orders: ordersReducer,
    client: clientReducer,
    cook: cookReducer,
})
