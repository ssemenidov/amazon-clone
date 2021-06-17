import { Action } from "../Interfaces";
import { ADD_PRODUCT } from "./types";

const initialState = {
  busket: [
    {
      title:
        " 2020 Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (8th Generation)",
      cost: 629.99,
      rate: 3,
      url: "https://m.media-amazon.com/images/I/71gOkVA6-eL._AC_UL480_FMwebp_QL65_.jpg",
    },
  ],
};
export const busketReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, busket: [...state.busket, action.item] };
    default:
      return state;
  }
};
