import React, {useEffect} from 'react';
import './Checkout.css';

import FlipMove from 'react-flip-move';
import {useDispatch, useSelector} from 'react-redux';
import {State} from '../../Interfaces';
import BasketItem from '../Basket/BasketItem/BasketItem';
import {
  ClearCheckout,
  DeleteFromBasketMany,
  DeleteFromCheckout,
} from '../../redux/actions';
import {Button, List, ListItem, Divider} from '@material-ui/core';
import {auth, db} from '../../firebase';
import {useState} from 'react';
import {useElements, useStripe, CardElement} from '@stripe/react-stripe-js';
import stripeJs from '@stripe/stripe-js';
import axios from '../../axios';
import {useHistory} from 'react-router-dom';
import NumberFormat from 'react-number-format';
import {getCheckoutTotal} from '../../redux/checkoutReducer';
function Checkout() {
  const history = useHistory();
  const dispatch = useDispatch();
  const checkout = useSelector((state: State) => state.checkout.checkout);
  const [email, setEmail] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  const [error, setError] = useState<string | null>('');
  const [success, setSuccess] = useState(false);
  const [process, setProcess] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSecret = async () => {
      const res = await axios({
        method: 'post',
        url: `/payments/create?total=${Math.floor(
          getCheckoutTotal(checkout) * 100
        )}`,
      });
      await setClientSecret(res.data.clientSecret);
    };
    getClientSecret();
  }, [checkout]);

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
          card: elements.getElement(CardElement) || {token: ''},
        },
      })
      .then(async ({paymentIntent}) => {
        //console.log(paymentIntent, auth.currentUser);

        if (paymentIntent) {
          await db
            .collection('users')
            .doc(auth.currentUser?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
              checkout: checkout,
              amount: paymentIntent.amount,
              created: paymentIntent.created,
            });
          setSuccess(true);
          setError(null);
          setProcess(false);
          dispatch(DeleteFromBasketMany(checkout));
          dispatch(ClearCheckout());
          history.replace('/orders');
        } else {
          setProcess(false);
          alert('Incorrect Card details. Please tap 4 2 4 2 4 2 4 2....');
        }
      })
      .catch((error) => {
        setError(error);
        setProcess(false);
      });
  };

  const handleCardChange = (e: stripeJs.StripeCardElementChangeEvent) => {
    setDisabled(e.empty);

    setError(e.error ? e.error.message : '');
  };

  const DeleteClick = (index: number) => {
    dispatch(DeleteFromCheckout(index));
  };
  auth.onAuthStateChanged((user) => {
    setEmail(user?.email || '');
  });

  return (
    <div className='checkout'>
      <div className='checkout__container'>
        <div className='checkout__header'>
          <h1>Checkout page</h1>
        </div>
        <Divider />
        <div className='checkout__section'>
          <div className='checkout__title'>
            <h2>Delivery Adress</h2>
            <div className='checkout__adress'>
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
        <div className='checkout__section'>
          <div className='checkout__title'>
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
            <div className='checkout__title'>
              <h2> Checkout is empty :(</h2>
            </div>
          )}
        </div>
        <Divider></Divider>
        <div className='checkout__section'>
          <div className='checkout__title'>
            <h2>Payment Method</h2>
          </div>
          <div className='checkout__payment'>
            <NumberFormat
              value={getCheckoutTotal(checkout)}
              className='foo'
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              decimalScale={2}
              renderText={(value) => (
                <div className='checkout__foo'>
                  <strong>{value}</strong>
                </div>
              )}
            />
            <form onSubmit={handleFormSubmit}>
              <CardElement onChange={handleCardChange}></CardElement>
              <Divider />
              <div className='checkout__btn'>
                <Button
                  disabled={disabled || success || process}
                  variant='contained'
                  type='submit'
                  color='primary'
                  onClick={() => {}}
                >
                  {process ? <p>Processing...</p> : 'Buy Now'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
