import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editClient } from "../../../redux/actions/clientAC";
import { checkUser } from "../../../redux/actions/userAC";

const ClientSettings = () => {
const client = useSelector(state => state.user)
const { id } = useSelector(state => state.user)

const [input, setInput] = useState({
  name: client.name,
  surname: client.surname,
  email: client.email,
  phone: client.phone,
  about: client.about,
})

const dispatch = useDispatch();

const inputHandler = (e) => {
  setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
}

const submitHandler = (e) => {
  e.preventDefault();
  dispatch(editClient({ id, ...input }))
}


  return (
    <div className="col-70 profile__col-70">
      <form onSubmit={submitHandler}>
      <h2 className="profile__title">Настройки</h2>
      <div className="setting">
        <input type="text" className="input-profile setting__input" placeholder='Добавьте имя' name="name" value={input.name} onChange={inputHandler} />
        <input type="text" className="input-profile setting__input" placeholder='Добавьте фамилию' name="surname" value={input.surname} onChange={inputHandler} />
        <input type="text" className="input-profile setting__input" name="email" placeholder='Добавьте email' value={input.email} onChange={inputHandler} />
        <input type="text" className="input-profile setting__input" name="phone" placeholder='Добавьте контактный номер телефона' value={input.phone} onChange={inputHandler} />
        <input type="text" className="input-profile setting__input" placeholder='Добавьте немного информации о себе' name="about" value={input.about} onChange={inputHandler} />
        <button className="btn-secondary setting__btn">Применить</button>
      </div>
      </form>
    </div>
  )
}

export default ClientSettings
