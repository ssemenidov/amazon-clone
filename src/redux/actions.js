import { ADD_PRODUCT } from "./types";

export function AddProduct(product) {
  return {
    type: ADD_PRODUCT,
    item: product,
  };
}
