import { ProductContent } from "../Interfaces";
import { ADD_PRODUCT } from "./types";

export function AddProduct(product: ProductContent) {
  return {
    type: ADD_PRODUCT,
    item: product,
  };
}
