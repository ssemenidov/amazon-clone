import { ProductContent } from "../Interfaces";
import {
  ADD_TO_BASKET,
  ADD_TO_CHECKOUT,
  DELETE_FROM_BASKET,
  DELETE_FROM_CHECKOUT,
} from "./types";

export function AddToBasket(product: ProductContent) {
  return {
    type: ADD_TO_BASKET,
    item: { ...product, id: Date.now().toString() },
  };
}
export function DeleteFromBasket(index: number) {
  return {
    type: DELETE_FROM_BASKET,
    item: index,
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
