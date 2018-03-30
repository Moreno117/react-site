import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from './reducers';

const enhancers = composeWithDevTools({});

export default function configureStore() {
  const initialState = {};
  return createStore(
    combineReducers({ ...reducers }),
    initialState,
    enhancers(applyMiddleware(thunk))
  );
}
