import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from '../reducer/initialState';
import rootReducer from '../reducer/rootReducer';

const middlewares = [thunk];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(...middlewares))
);

export default store;
