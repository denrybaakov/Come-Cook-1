import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrderItem } from '../../../redux/actions/orderIDAction';

export default function OrderPage() {
  const orderItem = useSelector(state => state.orderID)
  console.log('item --->', orderItem);
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(() => {
    dispatch(getOrderItem(id));
  },[])

  return (
    <>
    <div>{orderItem.date}</div>
    <div>{orderItem.address}</div>
    <div>{orderItem.title}</div>
    <div>{orderItem.text}</div>
    <div>{orderItem.numOfPeople}</div>
    <div>{orderItem.price}</div>
    <div>{orderItem.status}</div>
    <div>{orderItem.clientName}</div>
    <div>{orderItem.clientSurname}</div>
    <div>{orderItem.clientAvatar}</div>
    <div>{orderItem.clientEmail}</div>
    <div>{orderItem.clientPhone}</div>
    {/* <br/>
    <div>{orderItem.povarName}</div>
    <div>{orderItem.povarCuisine}</div> */}
    </>
  );
}
