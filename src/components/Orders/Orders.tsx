import React from 'react';
import {Button, List, ListItem, Divider} from '@material-ui/core';
import './Orders.css';
import {useSelector} from 'react-redux';
import {State} from '../../Interfaces';
function Orders() {
  const orders = useSelector((state: State) => state.orders.orders);
  return (
    <div className='orders'>
      <div className='orders__container'>
        <div className='orders__header'>
          <h1>Orders page</h1>
        </div>
        <Divider />
        <div className='orders__section'>
          <div className='orders__title'>
            <h2> Order list is empty :(</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
