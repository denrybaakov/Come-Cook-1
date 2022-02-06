
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { initState } from '../state/initState';
import { rootReducer } from '../reducers/rootReducer';

export const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);