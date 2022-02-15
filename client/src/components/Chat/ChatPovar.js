import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ChatMessage from './ChatMessage';

const ChatPovar = () => {

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
    ws.send(input)
    setInput('')
  }

  return (
    <div className="chat orderId__chat">
      <div className="chat__content">
        {test.map((item, i) => <ChatMessage key={i} message={item} />)}
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
          className="chat__input"
          onClick={clickHandler}
        >Отправить</button>
      </div>
    </div>
  )
}

export default ChatPovar
