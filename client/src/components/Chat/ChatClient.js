

const ChatClient = () => {
  return (
    <div className="chat orderId__chat">
      <div className="chat__content">
        <p className="chat__message">Я Клиент</p>
        <p className="chat__message povar">Hello friend</p>
      </div>
      <div className="chat__group-btns">
        <input type="text" className="chat__input" placeholder='Введите сообщение...' />
        <button className="chat__input">Отправить</button>
      </div>
    </div>
  )
}

export default ChatClient
