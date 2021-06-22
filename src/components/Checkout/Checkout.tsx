import React, { useEffect } from "react";
import "./Checkout.css";

import FlipMove from "react-flip-move";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../Interfaces";
import BasketItem from "../Basket/BasketItem/BasketItem";
import { DeleteFromCheckout } from "../../redux/actions";
import { Button, List, ListItem, Divider } from "@material-ui/core";
import { auth } from "../../firebase";
import { useState } from "react";

function Checkout() {
  const dispatch = useDispatch();
  const products = useSelector((state: State) => state.checkout.checkout);
  const [email, setEmail] = useState("");
  const DeleteClick = (index: number) => {
    dispatch(DeleteFromCheckout(index));
  };
  auth.onAuthStateChanged((user) => {
    setEmail(user?.email || "");
  });
  return (
    <div className="checkout">
      <div className="checkout__container">
        <div className="checkout__header">
          <h1>Checkout page</h1>
        </div>
        <Divider />
        <div className="checkout__section">
          <div className="checkout__title">
            <h2>Delivery Adress</h2>
            <div className="checkout__adress">
              <List>
                <ListItem> email {email}</ListItem>
                <ListItem> City London</ListItem>
                <ListItem> street Baker Street</ListItem>
                <ListItem> House 221b</ListItem>
              </List>
            </div>
          </div>
        </div>
        <Divider />
        <div className="checkout__section">
          <div className="checkout__title">
            <h2>Items</h2>
          </div>

          {products.length ? (
            <FlipMove>
              {products.map((value, index) => (
                <ListItem key={value.id}>
                  <BasketItem
                    product={value}
                    deleteClick={() => DeleteClick(index)}
                  ></BasketItem>
                </ListItem>
              ))}
            </FlipMove>
          ) : (
            <div className="checkout__title">
              <h2> Checkout is empty :(</h2>
            </div>
          )}
        </div>
        <Divider></Divider>
        <div className="checkout__section">
          <div className="checkout__title">
            <h2>Payment Method</h2>
          </div>
        </div>
        <Divider></Divider>
        <div className="checkout__section">
          <Button variant="contained" color="primary" onClick={() => {}}>
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
