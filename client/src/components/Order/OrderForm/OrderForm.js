import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createOrders } from '../../../redux/actions/ordersAction';
import MapComponent from '../../MapComponent/MapComponent';

export default function OrderForm() {

  const [input, setInput] = useState({ date: '', address: '', title: '', text: '', numOfPeople: '', price: '' })
  const inputHandler = (e) => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createOrders(input))
  }

  return (
    <>
      <form className='col-30' onSubmit={submitHandler}>
        <input name='date' type='text' placeholder='Дата мероприятия' onChange={inputHandler} />
        <input name='address' type='text' placeholder='Адрес' onChange={inputHandler} />
        <input name='title' type='text' placeholder='Название' onChange={inputHandler} />
        <input name='text' type='text' placeholder='Описание' onChange={inputHandler} />
        <input name='numOfPeople' type='text' placeholder='Кол-во людей' onChange={inputHandler} />
        <input name='price' type='text' placeholder='Цена' onChange={inputHandler} />
        <button className='btn-secondary'>Knopka</button>
      </form>
      {/* <MapComponent input={input} /> */}
    </>
  );
}
