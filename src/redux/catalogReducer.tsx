import {Action, ProductContent} from '../Interfaces';

const initialState: {catalog: Array<ProductContent>} = {
  catalog: [
    {
      id: Date.now().toString(),
      title:
        ' 2020 Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (8th Generation)',
      cost: 629.99,
      rate: 2,
      url: 'https://m.media-amazon.com/images/I/71gOkVA6-eL._AC_UL480_FMwebp_QL65_.jpg',
    },
    {
      id: Date.now().toString(),
      title:
        ' 2020 Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Space Gray (4th Generation)',
      cost: 679.99,
      rate: 3,
      url: 'https://m.media-amazon.com/images/I/719UcXKzXHL._AC_UL480_FMwebp_QL65_.jpg',
    },
    {
      id: Date.now().toString(),
      title:
        ' Apple iPhone XS Max, 64GB, Gold - Fully Unlocked (Renewed Premium)',
      cost: 429.99,
      rate: 2,
      url: 'https://m.media-amazon.com/images/I/810JGfh-38L._AC_UY327_FMwebp_QL65_.jpg',
    },
    {
      id: Date.now().toString(),
      title: 'Apple iPhone 11, 64GB, White - Fully Unlocked (Renewed Premium)',
      cost: 129.99,
      rate: 4,
      url: 'https://m.media-amazon.com/images/I/41C-k1iuJNS._AC_UY327_FMwebp_QL65_.jpg',
    },
    {
      id: Date.now().toString(),
      title: ' Apple iPhone 11, 64GB, Green - Fully Unlocked (Renewed Premium)',
      cost: 899.99,
      rate: 5,
      url: 'https://m.media-amazon.com/images/I/71EEY8pR-VS._AC_UY327_FMwebp_QL65_.jpg',
    },
    {
      id: Date.now().toString(),
      title:
        ' 2020 Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray',
      cost: 629.99,
      rate: 3,
      url: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY327_FMwebp_QL65_.jpg',
    },
    {
      id: Date.now().toString(),
      title: 'ASUS VivoBook 15 Thin and Light Laptop, 15.6” ',
      cost: 407.99,
      rate: 4,
      url: 'https://m.media-amazon.com/images/I/81fstJkUlaL._AC_UY327_FMwebp_QL65_.jpg',
    },
  ],
};
export const catalogReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
