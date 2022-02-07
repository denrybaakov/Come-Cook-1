import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function OrderPage() {
  const orderItem = useSelector(state => state.orders)
  const {id} = useParams()
  console.log('item --->', orderItem);
  return (
    <>
    <div>order page id - {id}</div>
    
    </>
  );
}
