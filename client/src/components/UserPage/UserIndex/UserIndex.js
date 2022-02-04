
import { Link } from 'react-router-dom'

import avatar from './img/avatar.png'

const UserIndex = () => {

  return (
    <section className="profile">
      <div className="container">
        <div className="row profile__row">
          <div className="col-30 profile__col-30">
            <div className="profile__avatar">
              <img src={avatar} alt="cv" className="profile__img2" />
            </div>
            <div className="profile__text">
              <span className="profile__name">Зевс</span>
              <span>zevs@zevs.com</span>
            </div>
          </div>
          <div className="col-70 profile__col-70 transparent">
            <div className="profile__stats">
              <div className="profile__stats-item">
                <strong>30</strong>
                <span>Все заказы</span>
              </div>
              <div className="profile__stats-item">
                <strong>30</strong>
                <span>Текущие</span>
              </div>
              <div className="profile__stats-item">
                <strong>30</strong>
                <span>Выполненные</span>
              </div>
            </div>
          </div>
          <div className="col-30 profile__col-30">
            <h3 className="title profile__title">Меню</h3>
            <nav className="profile__nav">
              <Link to={'/profile'}>Главная</Link>
              <Link to={'/profile/search'}>Поиск заказов</Link>
              <Link to={'/profile/order'}>Текущие заказы</Link>
              <Link to={'/profile/completed'}>Выполненные заказы</Link>
              <Link to={'/profile/calendar'}>Календарь</Link>
              <Link to={'/profile/messages'}>Сообщения</Link>
              <Link to={'/profile/setting'}>Настройки</Link>
            </nav>
          </div>
          <div className="col-70 profile__col-70">
            <h2 className="profile__title">Добро пожаловать в личный кабинет</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserIndex
