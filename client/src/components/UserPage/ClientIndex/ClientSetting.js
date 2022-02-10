import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editClient, getOneClient } from "../../../redux/actions/clientAC";
import { checkUser } from "../../../redux/actions/userAC";

const ClientSettings = () => {


  // const { id } = useSelector(state => state.user);

  // console.log(user);
  // console.log(user);
  const { id, about, avatar, email, name, password, phone, surname } = useSelector(state => state.client)
  // const client = useSelector(state => state.client)
  // console.log('client ----->', client);

  useEffect(() => {
    dispatch(getOneClient(id))
  }, [])

  const [input, setInput] = useState({ avatar, name, about, surname, email, phone, password })

  const inputHandler = (e) => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const dispatch = useDispatch();

  const editClientHandler = () => {
    dispatch(editClient({ id, ...input }))
    console.log(input);
    // dispatch(checkUser())
  }

  return (
    <div className="col-70 profile__col-70">
      <h2 className="profile__title">Настройки</h2>
      <div className="setting">
        <input type="text" className="input-profile setting__input" placeholder='Добавьте имя' name="name" value={input.name} onChange={inputHandler} />
        <input type="text" className="input-profile setting__input" placeholder='Добавьте немного информации о себе' name="about" value={input.about} onChange={inputHandler} />
        <input type="text" className="input-profile setting__input" placeholder='Добавьте фамилию' name="surname" value={input.surname ?? null} onChange={inputHandler} />
        <input type="text" className="input-profile setting__input" name="email" placeholder='Добавьте email' value={input.email} onChange={inputHandler} />
        <input type="text" className="input-profile setting__input" name="phone" placeholder='Добавьте контактный номер телефона' value={input.phone} onChange={inputHandler} />
        <input type="password" className="input-profile setting__input" name="password" placeholder='Добавьте фамилию' value={input.password} onChange={inputHandler} />
        <button className="btn-secondary setting__btn" onClick={() => editClientHandler(id)}>Применить</button>
      </div>
    </div>
  )
}

export default ClientSettings
