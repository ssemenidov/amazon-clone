import { Action, ProductContent } from "../Interfaces";

const initialState: { catalog: Array<ProductContent> } = {
  catalog: [
    {
      id: Date.now().toString(),
      title:
        " 2020 Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (8th Generation)",
      cost: 629.99,
      rate: 3,
      url: "https://m.media-amazon.com/images/I/71gOkVA6-eL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: Date.now().toString(),
      title:
        " Apple iPhone XS Max, 64GB, Gold - Fully Unlocked (Renewed Premium)",
      cost: 429.99,
      rate: 3,
      url: "https://m.media-amazon.com/images/I/810JGfh-38L._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      id: Date.now().toString(),
      title: "Apple iPhone 11, 64GB, White - Fully Unlocked (Renewed Premium)",
      cost: 129.99,
      rate: 3,
      url: "https://m.media-amazon.com/images/I/41C-k1iuJNS._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      id: Date.now().toString(),
      title: " Apple iPhone 11, 64GB, Green - Fully Unlocked (Renewed Premium)",
      cost: 329.99,
      rate: 3,
      url: "https://m.media-amazon.com/images/I/71EEY8pR-VS._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      id: Date.now().toString(),
      title:
        " 2020 Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (8th Generation)",
      cost: 629.99,
      rate: 3,
      url: "https://m.media-amazon.com/images/I/71gOkVA6-eL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: Date.now().toString(),
      title:
        " 2020 Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (8th Generation)",
      cost: 629.99,
      rate: 3,
      url: "https://m.media-amazon.com/images/I/71gOkVA6-eL._AC_UL480_FMwebp_QL65_.jpg",
    },
  ],
};
export const catalogReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
