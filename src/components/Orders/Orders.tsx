import React, {useEffect, useState} from 'react';
import {Button, List, ListItem, Divider} from '@material-ui/core';
import './Orders.css';
import {useDispatch, useSelector} from 'react-redux';
import {Order, State} from '../../Interfaces';
import BasketItem from '../Basket/BasketItem/BasketItem';
import moment from 'moment';
import {auth, db} from '../../firebase';

function Orders() {
  const dispatch = useDispatch();
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => {
    db.collection('users')
      .doc(auth.currentUser?.uid)
      .collection('orders')
      .orderBy('created', 'desc')
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),
        }));
        setOrders(data);
      });
    console.log(orders);
  }, []);
  return (
    <div className='orders'>
      <div className='orders__container'>
        <div className='orders__header'>
          <h1>Your Orders</h1>
        </div>
        <Divider />

        {orders.length ? (
          orders.map((item) => (
            <div className='orders__item'>
              <div className='order__date'>
                <h3>
                  Date:
                  {item.created &&
                    moment.unix(item.created).format('MMMM Do YYYY, h:mm a')}
                </h3>
              </div>
              <div className='order__cost'>
                <h2>Total:{item.amount && item.amount / 100}</h2>
              </div>

              {item.checkout?.map((value) => (
                <ListItem key={value.id}>
                  <BasketItem product={value} deleteClick={null}></BasketItem>
                </ListItem>
              ))}

              <Divider />
            </div>
          ))
        ) : (
          <div className='orders__title'>
            <h2> Order list is empty :(</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
