import {ADD_TO_CHECKOUT, CLEAR_CHECKOUT, DELETE_FROM_CHECKOUT} from './types';
import {Action, ProductContent} from '../Interfaces';
const initialState: {checkout: Array<ProductContent>} = {
  checkout: [],
};
export const getCheckoutTotal = (checkout: Array<ProductContent>) => {
  return checkout?.reduce((amount, item) => amount + item.cost, 0);
};
export const checkoutReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_TO_CHECKOUT:
      return {...state, checkout: action.item};
    case DELETE_FROM_CHECKOUT:
      let newcheckout = [...state.checkout];
      newcheckout.splice(action.item, 1);
      return {...state, checkout: newcheckout};
    case CLEAR_CHECKOUT:
      return {...state, checkout: []};
    default:
      return state;
  }
};
