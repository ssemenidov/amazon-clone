export interface ProductContent {
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
    basket: [
      {
        title: string;
        cost: number;
        rate: number;
        url: string;
      }
    ];
  };
  catalog: {
    catalog: [
      {
        title: string;
        cost: number;
        rate: number;
        url: string;
      }
    ];
  };
}
