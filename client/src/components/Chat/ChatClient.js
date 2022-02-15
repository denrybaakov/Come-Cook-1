import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ChatMessage from './ChatMessage';
import { useDispatch } from 'react-redux';
import { setMessage } from '../../redux/actions/wsActions'


export default function ChatClient() {

  const user = useSelector(state => state.user)
  const dispatch = useDispatch();

  const [test, setTest] = useState([]);
  const [input, setInput] = useState('');

  const messages = useSelector(state => state.messages)

  const ws = useSelector(state => state.ws)

  ws.onopen = function (e) {
  };

  ws.onmessage = function (event) {
    console.log(event.data);
    dispatch(setMessage(event.data))
  };

  const clickHandler = (e) => {
    console.log(input);
    ws.send(input)
    setInput('')
  }

  return (
    <div className="chat orderId__chat">
      <div className="chat__content">
        {messages.map((item, i) => <ChatMessage key={i} message={item} />)}
      </div>
      <div className="chat__group-btns">
        <input
          type="text"
          className="chat__input"
          placeholder='Введите сообщение...'
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          className="chat__btn"
          onClick={clickHandler}
        >Отправить</button>
      </div>
    </div>

  )

}
