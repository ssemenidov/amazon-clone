export interface ProductContent {
  title: string;
  cost: number;
  rate: number;
  url: string;
}

export interface State {
  busket: {
    busket: [
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
export interface Action {
  type: String;
  item: any;
}
