import {auth, db} from '../firebase';
import firebase from 'firebase';
import {Action, Order, ProductContent} from '../Interfaces';
import {SET_ORDERS} from './types';
import {SetOrders} from './actions';
import {useDispatch} from 'react-redux';

const initialState: {orders: Order[]} = {
  orders: [],
};

export const ordersReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_ORDERS:
      return {...state, orders: action.item};
    default:
      return state;
  }
};
export function fetchOrders() {
  return async (dispatch: any) => {
    let orders: Order[] = [];

    await db
      .collection('users')
      .doc(auth.currentUser?.uid)
      .collection('orders')
      .orderBy('created', 'desc')
      .onSnapshot((snapshot) => {
        orders = snapshot.docs as any;
      });
    console.log(orders);

    await dispatch(SetOrders(orders));
  };
}
