import { useSelector } from "react-redux"


const ChatMessage = ({ message }) => {
  const { role } = useSelector(state => state.user)
  const [userName, userMessage] = message.split('=:=')

  return (
    <div className={`chat__block-message ${role}`}>
      <p className="chat__message "><i className="chat__userName">{userName}:</i>  &nbsp; {userMessage}</p>
    </div>
  )
}

export default ChatMessage


{/* <>



      <input onChange={(e) => setInput(e.target.value)} value={input} type={'text'} /><button onClick={clickHandler} >Отправить</button>
      {test.map((e, index) => {
        return (
          <p key={index}> {e} </p>
        )
      })}
    </> */}
