import { useSelector } from "react-redux"


const ChatMessage = ({ message }) => {
  const { role } = useSelector(state => state.user)
  const [userName, userMessage] = message.split('=:=')

  console.log('role ======', role);
  return (
    <div className={`chat__block-message ${role === 'cook' ? 'povar' : 'client'}`}>
      <p className="chat__message "><i className="chat__userName">{userName}:</i>  &nbsp; {userMessage}</p>
    </div>
  )
}

export default ChatMessage
