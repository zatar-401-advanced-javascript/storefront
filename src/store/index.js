//===========================================| Dependencies |===========================================
import { createStore, combineReducers,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; //optional
import categories from './categories';
import products from './products';
import cart from './cart';
import thunk from '../middleware/thunk'

//===============================================| Store |===============================================
const reducers = combineReducers({ categories,products,cart });
const store = () => {
  return createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));
};

export default store();
//=======================================================================================================