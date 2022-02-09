import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function ChatClient() {

  const [test, setTest] = useState([]);
  const [input, setInput] = useState('');

  const ws = useSelector(state => state.ws)

  ws.onopen = function (e) {
    ws.send("Меня зовут Джон");
  };

  ws.onmessage = function (event) {
    setTest(prev => [...prev, event.data])
  };

  const clickHandler = (e) => {
    console.log(input);
    ws.send(input)

    setInput('')

    return (
      // <div className="chat orderId__chat">
      //   <div className="chat__content">
      //     <p className="chat__message">Я Клиент</p>
      //     <p className="chat__message povar">Hello friend</p>
      //   </div>
      //   <div className="chat__group-btns">
      //     <input type="text" className="chat__input" placeholder='Введите сообщение...' />
      //     <button className="chat__input">Отправить</button>
      //   </div>
      // </div>
      <>
   
     

      <input onChange={(e) => setInput(e.target.value)} value={input} type={'text'}/><Button onClick={clickHandler} >Отправить</Button>
      {test.map((e, index) => {
        return (
        <p key = {index}> {e} </p>
        )
      })}
    </>
    )
  }

}
