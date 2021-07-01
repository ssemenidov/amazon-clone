import {Order, ProductContent} from '../Interfaces';
import {
  ADD_TO_BASKET,
  ADD_TO_CHECKOUT,
  CLEAR_CHECKOUT,
  DELETE_FROM_BASKET,
  DELETE_FROM_BASKET_MANY,
  DELETE_FROM_CHECKOUT,
  SET_ORDERS,
} from './types';

export function AddToBasket(product: ProductContent) {
  return {
    type: ADD_TO_BASKET,
    item: {...product, id: Date.now().toString()},
  };
}

export function SetOrders(orders: Order[]) {
  return {
    type: SET_ORDERS,
    item: orders,
  };
}
export function DeleteFromBasket(index: number) {
  return {
    type: DELETE_FROM_BASKET,
    item: index,
  };
}
export function DeleteFromBasketMany(products: ProductContent[]) {
  return {
    type: DELETE_FROM_BASKET_MANY,
    item: products,
  };
}
export function AddToCheckout(products: ProductContent[]) {
  return {
    type: ADD_TO_CHECKOUT,
    item: products,
  };
}
export function DeleteFromCheckout(index: number) {
  return {
    type: DELETE_FROM_CHECKOUT,
    item: index,
  };
}
export function ClearCheckout() {
  return {
    type: CLEAR_CHECKOUT,
  };
}
