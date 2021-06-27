import {Action, ProductContent} from '../Interfaces';
const initialState: {orders: Array<ProductContent>} = {
  orders: [],
};

export const ordersReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
