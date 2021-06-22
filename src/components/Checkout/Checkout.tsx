import React from "react";
import "./Checkout.css";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";

import FlipMove from "react-flip-move";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../Interfaces";
import BasketItem from "../Basket/BasketItem/BasketItem";
import { DeleteFromCheckout } from "../../redux/actions";
function Checkout() {
  const dispatch = useDispatch();
  const state = useSelector((state: State) => state.checkout.checkout);
  const DeleteClick = (index: number) => {
    dispatch(DeleteFromCheckout(index));
  };

  return (
    <div className="checkout">
      <div className="checkout__content">
        <div className="checkout__header">
          <h1>Checkout page</h1>
        </div>
        <Divider />

        <FlipMove>
          {state.map((value, index) => (
            <ListItem key={value.id}>
              <BasketItem
                product={value}
                deleteClick={() => DeleteClick(index)}
              ></BasketItem>
            </ListItem>
          ))}
        </FlipMove>

        <Divider />
      </div>
    </div>
  );
}

export default Checkout;
