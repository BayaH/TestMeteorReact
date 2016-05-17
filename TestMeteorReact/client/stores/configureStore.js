import { combineReducers, createStore, applyMiddleware } from 'redux';
import orders from '../reducers/orders';
import orderUi from '../reducers/orderUi';
import thunkMiddleware from 'redux-thunk';

const reducer = combineReducers({ orders, orderUi });

export default function configureStore() {
  const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

  return createStoreWithMiddleware(reducer);
}
