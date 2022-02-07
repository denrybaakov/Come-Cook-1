const ClientSettings = () => {
  return (
    <div className="col-70 profile__col-70">
      <h2 className="profile__title">Настройки</h2>
      <div className="setting">
        <input type="text" className="input-profile setting__input" name="name" placeholder="Имя" />
        <input type="text" className="input-profile setting__input" name="surname" placeholder="Фамилия" />
        <input type="text" className="input-profile setting__input" name="email" placeholder="Почта" />
        <input type="text" className="input-profile setting__input" name="phone" placeholder="Телефон" />
        <input type="password" className="input-profile setting__input" name="password" placeholder="Пароль" />
        <input type="text" className="input-profile setting__input" name="about" placeholder="Обо мне" />
        <input type="text" className="input-profile setting__input" name="avatar" placeholder="Картинка" />
        <button className="btn-secondary setting__btn">Применить</button>
      </div>
    </div>
  )
}

export default ClientSettings
