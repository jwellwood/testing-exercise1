import { createStore, compose } from 'redux';
import * as reducers from '../reducers';

const nonTypedWindow: any = window;

const composeEnhancers =
  nonTypedWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers.alertReducer, composeEnhancers());
