
import { combineReducers } from 'redux';
import { clientReducer } from '../reducers/clientReducer';
import { cookReducer } from '../reducers/cookReducer';



export const rootReducer = combineReducers({
    client: clientReducer,
    cook: cookReducer
  
})
