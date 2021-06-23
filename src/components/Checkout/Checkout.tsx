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
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import stripeJs from "@stripe/stripe-js";
import axios from "../../axios";
import { useHistory } from "react-router-dom";
function Checkout() {
  const history = useHistory();
  const dispatch = useDispatch();
  const checkout = useSelector((state: State) => state.checkout.checkout);
  const [email, setEmail] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState<string | null>("");
  const [success, setSuccess] = useState(false);
  const [process, setProcess] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSecret = async () => {
      const res = await axios({
        method: "post",
        url: `/payment/create?total=${1000 * 100}`,
      });
      setClientSecret(res.data.clientSecret);
    };
    getClientSecret();
  }, [checkout]);
  const DeleteClick = (index: number) => {
    dispatch(DeleteFromCheckout(index));
  };
  auth.onAuthStateChanged((user) => {
    setEmail(user?.email || "");
  });
  const handleFormSubmit = async (event: React.SyntheticEvent) => {
    //const target = e.target as typeof e.target & {};
    event.preventDefault();
    setProcess(true);
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement) || { token: "" },
        },
      })
      .then(({ paymentIntent }) => {
        setSuccess(true);
        setError(null);
        setProcess(false);
        history.replace("/orders");
      });
  };
  const handleCardChange = (e: stripeJs.StripeCardNumberElementChangeEvent) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

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

          {checkout.length ? (
            <FlipMove>
              {checkout.map((value, index) => (
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
          <div className="checkout__payment">
            <form onSubmit={() => handleFormSubmit}>
              <CardElement onChange={() => handleCardChange}></CardElement>
              <Divider />
              <Button
                disabled={disabled || success || process}
                variant="contained"
                type="submit"
                color="primary"
                onClick={() => {}}
              >
                {process ? <p>Processing...</p> : "Buy Now"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
