

const SignIn = () => {
  return (
    <section className="signin">
      <div className="logo signin__logo">
        &
        <strong className="logo__text"><i>COME<br></br>COOK</i></strong>
      </div>
      <div className="signin__content">
        <h2>Вход</h2>
        <input type="email" className="signin__login" placeholder="Введите email" />
        <input type="password" className="signin__password" placeholder="Введите пароль" />
        <button type="submit">Сохранить</button>
      </div>
    </section>
  )
}

export default SignIn
