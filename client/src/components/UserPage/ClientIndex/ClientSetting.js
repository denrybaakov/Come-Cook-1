import { useSelector } from "react-redux"

const ClientSettings = () => {

  const { name, surname, email, password, about, phone, avatar } = useSelector(state => state.user)
  console.log(name);
  console.log(email);


  return (
    <div className="col-70 profile__col-70">
      <h2 className="profile__title">Настройки</h2>
      <div className="setting">
        <input type="text" className="input-profile setting__input" name="avatar" placeholder={`${avatar}`} />
        <input type="text" className="input-profile setting__input" name="name" placeholder={`${name}`} />
        <input type="text" className="input-profile setting__input" name="about" placeholder={`${about ?? "не заполнено"}`} />
        <input type="text" className="input-profile setting__input" name="surname" placeholder={`${surname ?? "не заполнено"} `} />
        <input type="text" className="input-profile setting__input" name="email" placeholder={`${email}`}  />
        <input type="text" className="input-profile setting__input" name="phone" placeholder={`${phone}`} />
        <input type="password" className="input-profile setting__input" name="password" placeholder={`${password}`} />
        <button className="btn-secondary setting__btn">Применить</button>
      </div>
    </div>
  )
}

export default ClientSettings
