import React, { useState } from "react";

import "./Basket.css";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import { State } from "../../Interfaces";
import BasketItem from "./BasketItem/BasketItem";
import { useDispatch, useSelector } from "react-redux";
import { DeleteProduct } from "../../redux/actions";
import FlipMove from "react-flip-move";
function Basket() {
  const dispatch = useDispatch();
  const state = useSelector((state: State) => state.basket.basket);
  const [checked, setChecked] = useState(Array(state.length).fill(false));
  const [total, setTotal] = useState(0);
  const DeleteClick = (index: number) => {
    dispatch(DeleteProduct(index));

    let newChecked = [...checked];
    if (newChecked[index]) {
      setTotal(total - state[index].cost);
    }
    newChecked.splice(index, 1);
    setChecked(newChecked);
  };

  const handleToggle = (index: number) => () => {
    let newChecked = [...checked];
    if (checked[index]) {
      setTotal(total - state[index].cost);
      newChecked[index] = false;
    } else {
      newChecked[index] = true;
      setTotal(total + state[index].cost);
    }
    setChecked(newChecked);
  };
  return (
    <div className="basket">
      <div className="basket__cart">
        <div className="basket__header">
          <h1>Shopping Cart</h1>
        </div>
        <Divider />

        <FlipMove>
          {state.map((value, index) => (
            <ListItem key={value.id}>
              <ListItemIcon onClick={handleToggle(index)}>
                <Checkbox
                  edge="start"
                  checked={checked[index]}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <BasketItem
                product={value}
                deleteClick={() => DeleteClick(index)}
              ></BasketItem>
            </ListItem>
          ))}
        </FlipMove>

        <Divider />
      </div>

      <div className="basket__total">
        <p>
          Subtotal ({checked.filter((value) => value).length} item):{" "}
          <strong> {total}</strong>
        </p>
        <div className="basket__btn">
          <Button variant="contained" color="primary">
            proceed to checout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Basket;
