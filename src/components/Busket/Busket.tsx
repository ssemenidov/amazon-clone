import React, { useState } from "react";

import "./Busket.css";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import { ProductContent, State } from "../../Interfaces";
import BusketItem from "./BusketItem/BusketItem";
import { useDispatch, useSelector } from "react-redux";
import { DeleteProduct } from "../../redux/actions";

const initialProduct: ProductContent = {
  title:
    " 2020 Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (8th Generation)",
  cost: 629.99,
  rate: 3,
  url: "https://m.media-amazon.com/images/I/71gOkVA6-eL._AC_UL480_FMwebp_QL65_.jpg",
};

function Busket() {
  const dispatch = useDispatch();
  const state = useSelector((state: State) => state.busket.busket);
  const [checked, setChecked] = useState(Array(state.length).fill(false));

  const DeleteClick = (index: number) => {
    dispatch(DeleteProduct(index));
    let newChecked = [...checked];
    newChecked.splice(index, 1);
    console.log(checked, newChecked, index);

    setChecked(newChecked);
  };

  const handleToggle = (index: number) => () => {
    let newChecked = [...checked];
    if (checked[index]) {
      newChecked[index] = false;
    } else {
      newChecked[index] = true;
    }
    setChecked(newChecked);
  };
  return (
    <div className="busket">
      <div className="busket__cart">
        <div className="busket__header">
          <h1>Shopping Cart</h1>
        </div>
        <Divider />
        <List component="ul">
          {state.map((value, index) => {
            return (
              <ListItem key={index}>
                <ListItemIcon>
                  <Checkbox
                    onClick={handleToggle(index)}
                    edge="start"
                    checked={checked[index]}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
                <BusketItem
                  product={value}
                  deleteClick={() => DeleteClick(index)}
                ></BusketItem>
              </ListItem>
            );
          })}
        </List>
        <Divider />
      </div>

      <div className="busket__total">
        <p>
          Subtotal (1 item): <strong> 0</strong>
        </p>
        <div className="busket__btn">
          <Button variant="contained" color="secondary">
            proceed to checout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Busket;
