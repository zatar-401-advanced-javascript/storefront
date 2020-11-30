import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; //optional
import categories from './categories';
import products from './products';
import cart from './cart';

const reducers = combineReducers({ categories,products,cart });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();