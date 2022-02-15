import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createOrders } from '../../../redux/actions/ordersAction';

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
      <form className='order__form' onSubmit={submitHandler}>
        <input className="input-profile setting__input" name='date' type='date' placeholder='Дата мероприятия' onChange={inputHandler} />
        <input className="input-profile setting__input" name='address' type='text' placeholder='Адрес' onChange={inputHandler} />
        <input className="input-profile setting__input" name='title' type='text' placeholder='Название' onChange={inputHandler} />
        <input className="input-profile setting__input" name='text' type='text' placeholder='Описание' onChange={inputHandler} />
        <input className="input-profile setting__input" name='numOfPeople' type='text' placeholder='Кол-во людей' onChange={inputHandler} />
        <input className="input-profile setting__input" name='price' type='text' placeholder='Цена' onChange={inputHandler} />
        <button className='btn-secondary'>Создать заказ</button>
      </form>
    </>
  );
}
