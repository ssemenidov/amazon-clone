import { ProductContent } from "../Interfaces";
import { ADD_PRODUCT, DELETE_PRODUCT } from "./types";

export function AddProduct(product: ProductContent) {
  return {
    type: ADD_PRODUCT,
    item: { ...product, id: Date.now().toString() },
  };
}
export function DeleteProduct(index: number) {
  return {
    type: DELETE_PRODUCT,
    item: index,
  };
}
