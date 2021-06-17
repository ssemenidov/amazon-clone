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
  const [checked, setChecked] = useState([-1]);
  const [cost, setCost] = useState(0);
  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
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
        <List component="nav">
          {[0, 1, 2, 3].map((value, index) => {
            return (
              <ListItem key={value} onClick={handleToggle(value)}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
                <BusketItem {...state[index]}></BusketItem>
              </ListItem>
            );
          })}
        </List>
        <Divider />
      </div>

      <div className="busket__total">
        <p>
          Subtotal (1 item): <strong> ${cost}</strong>
        </p>
        <div className="busket__btn">
          <Button variant="contained">proceed to checout</Button>
        </div>
      </div>
    </div>
  );
}

export default Busket;
