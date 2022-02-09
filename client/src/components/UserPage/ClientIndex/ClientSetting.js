import { useState } from "react"
import { useSelector } from "react-redux"

const ClientSettings = () => {

  // const [input, setInput] = useState({ avatar, name, about, surname, email, phone, password })

  // const inputHandler = (e) => {
  //   setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
  // }

  // const dispatch = useDispatch();

  return (
    <div className="col-70 profile__col-70">
      <h2 className="profile__title">Настройки</h2>
      <div className="setting">
        <input type="text" className="input-profile setting__input" name="avatar"  />
        <input type="text" className="input-profile setting__input" name="name"  />
        <input type="text" className="input-profile setting__input" name="about"  />
        <input type="text" className="input-profile setting__input" name="surname"  />
        <input type="text" className="input-profile setting__input" name="email"   />
        <input type="text" className="input-profile setting__input" name="phone"  />
        <input type="password" className="input-profile setting__input" name="password"  />
        <button className="btn-secondary setting__btn">Применить</button>
      </div>
    </div>
  )
}

export default ClientSettings
