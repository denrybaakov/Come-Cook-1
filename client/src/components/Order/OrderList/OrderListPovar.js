import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewOrdersPovar } from '../../../redux/actions/ordersAction'

import OrderItemPovar from '../OrderItem/OrderItemPovar';

const OrderListPovar = () => {
  const allOrders = useSelector(state => state.ordersNewPovar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewOrdersPovar())
  }, [])

  return (

    <div className="profile__list">
      {
        allOrders.map((item, index) => <OrderItemPovar
          key={item.id}
          id={item.id}
          index={index}
          date={item.date}
          address={item.address}
          title={item.title}
          text={item.text}
          numOfPeople={item.numOfPeople}
          price={item.price}
          status={item.status}
          status_id={item.status_id}
          nameClient={item.Client.name}
          emailClient={item.Client.email}
          avatar={item.Client.avatar}
        />)
      }
    </div>
  );
}

export default OrderListPovar
