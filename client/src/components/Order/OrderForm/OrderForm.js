import React, { useState } from 'react';
import MapComponent from '../../MapComponent/MapComponent';

export default function OrderForm() {

  const [input, setInput] = useState({ city: '', street: '', building: '' })
  const inputHandler = (e) => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input);
    // dispatch(addPackages(input))
  }

  return (
    <>
      <div>order</div>
      <form className='col-30' onSubmit={submitHandler}>
        <input name='city' type='text' placeholder='City' onChange={inputHandler}/>
        <input name='street' type='text' placeholder='Street' onChange={inputHandler}/>
        <input name='building' type='text' placeholder='Building' onChange={inputHandler}/>
        <button className='btn-secondary'>Knopka</button>
      </form>
      <MapComponent input={input}/>

    </>
  );
}
