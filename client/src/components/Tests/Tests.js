import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';


export default function Tests() {

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

      setInput ('')
  }

  return (
    <>
      <h1>test</h1>
     

      <input onChange={(e) => setInput(e.target.value)} value={input} type={'text'}/><Button onClick={clickHandler} >Отправить</Button>
      {test.map((e, index) => {
        return (
        <p key = {index}> {e} </p>
        )
      })}
    </>
  );
}
