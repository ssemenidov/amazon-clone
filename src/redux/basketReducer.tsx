import {
  ADD_TO_BASKET,
  DELETE_FROM_BASKET,
  DELETE_FROM_BASKET_MANY,
} from './types';
import {Action, ProductContent} from '../Interfaces';
const initialState: {basket: Array<ProductContent>} = {
  basket: [],
};

export const basketReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {...state, basket: [...state.basket, action.item]};
    case DELETE_FROM_BASKET:
      let newbasket = [...state.basket];
      newbasket.splice(action.item, 1);

      return {...state, basket: newbasket};
    case DELETE_FROM_BASKET_MANY:
      let newbasket2: ProductContent[] = [];
      state.basket.forEach((item, index) => {
        let f = true;
        action.item.forEach((element: any) => {
          if (item.id === element.id) {
            f = false;
          }
        });
        if (f) newbasket2.push(item);
      });
      return {...state, basket: newbasket2};

    default:
      return state;
  }
};
