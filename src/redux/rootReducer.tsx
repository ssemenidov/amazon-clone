import {combineReducers} from 'redux';
import {basketReducer} from './basketReducer';
import {catalogReducer} from './catalogReducer';
import {checkoutReducer} from './checkoutReducer';
import {ordersReducer} from './ordersReducer';
export const rootReducer = combineReducers({
  basket: basketReducer,
  catalog: catalogReducer,
  checkout: checkoutReducer,
  orders: ordersReducer,
});
