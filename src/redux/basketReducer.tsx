import {
  ADD_TO_BASKET,
  DELETE_FROM_BASKET,
  DELETE_FROM_BASKET_MANY,
} from './types';
import {Action, ProductContent} from '../Interfaces';
const initialState: {basket: Array<ProductContent>} = {
  basket: [
    {
      id: Date.now().toString(),
      title:
        ' 2020 Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (8th Generation)',
      cost: 629.99,
      rate: 3,
      url: 'https://m.media-amazon.com/images/I/71gOkVA6-eL._AC_UL480_FMwebp_QL65_.jpg',
    },
  ],
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
      let newbasket2 = [...state.basket];
      newbasket2.forEach((item, index) => {
        action.item.forEach((element: any) => {
          if (item.id === element.id) {
            newbasket2.splice(index, 1);
          }
        });
      });
      return {...state, basket: newbasket2};

    default:
      return state;
  }
};
