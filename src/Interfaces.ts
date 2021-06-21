export interface ProductContent {
  id: string;
  title: string;
  cost: number;
  rate: number;
  url: string;
}

export interface Action {
  type: String;
  item: any;
}

export interface State {
  basket: {
    basket: Array<ProductContent>;
  };
  catalog: {
    catalog: Array<ProductContent>;
  };
}
