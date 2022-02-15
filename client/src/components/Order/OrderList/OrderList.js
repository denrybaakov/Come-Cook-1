import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentOrdersClient } from '../../../redux/actions/ordersAction';
import OrderItem from '../OrderItem/OrderItem';

const OrderList = () => {
  const allOrders = useSelector(state => state.ordersCurrentClient);
  const {id} = useSelector(state => state.user)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentOrdersClient(id))
  }, [])

  return (

    <div>
      {
        allOrders.map((item, index) => <OrderItem
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
        />)
      }
    </div>
  );
}

export default OrderList
