import React from "react";

import "./Busket.css";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { ProductContent } from "../Product/ProductInterface";
import BusketItem from "./BusketItem/BusketItem";
const initialProduct: ProductContent = {
  title:
    " 2020 Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (8th Generation)",
  cost: 629.99,
  rate: 3,
  url: "https://m.media-amazon.com/images/I/71gOkVA6-eL._AC_UL480_FMwebp_QL65_.jpg",
};

function Busket() {
  return (
    <div className="busket">
      <div className="busket__cart">
        <div className="busket__header">
          <h1>Shopping Cart</h1>
        </div>
        <Divider />
        <List component="nav">
          <ListItem>
            <BusketItem {...initialProduct}></BusketItem>
          </ListItem>
          <Divider />
          <ListItem>
            <BusketItem {...initialProduct}></BusketItem>
          </ListItem>
        </List>
        <Divider />
      </div>

      <div className="busket__total">
        <p>
          Subtotal (1 item): <strong> $10.99</strong>
        </p>
        <div className="busket__btn">
          <Button variant="contained">proceed to checout</Button>
        </div>
      </div>
    </div>
  );
}

export default Busket;
