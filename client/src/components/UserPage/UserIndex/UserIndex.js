
import { Link } from 'react-router-dom'

import { useState } from 'react'

import SearchOrder from '../UserContent/SearchOrder'
import IndexPage from '../UserContent/IndexPage'
import CurrentOrders from '../UserContent/CurrentOrders'
import CompletedOrders from '../UserContent/CompletedOrders'
import Calendar from '../UserContent/Calendar'
import MessagePage from '../UserContent/Message'
import Settings from '../UserContent/Settings'

import avatar from './img/avatar.png'

const UserIndex = () => {

  const [linkPage, setLinkPage] = useState(false)

  const changeLink = e => {
    e.preventDefault()
    const { link } = e.target.dataset
    switch (link) {
      case 'index':
        return setLinkPage(<IndexPage />)
      case 'searchOrder':
        return setLinkPage(<SearchOrder />)
      case 'currentOrders':
        return setLinkPage(<CurrentOrders />)
      case 'completedOrders':
        return setLinkPage(<CompletedOrders />)
      case 'calendar':
        return setLinkPage(<Calendar />)
      case 'message':
        return setLinkPage(<MessagePage />)
      case 'settings':
        return setLinkPage(<Settings />)
      default:
        return false
    }

  }



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
              <a href="!#" data-link="index" onClick={changeLink}>Главная</a>
              <a href="!#" data-link="searchOrder" onClick={changeLink}>Поиск заказов</a>
              <a href="!#" data-link="currentOrders" onClick={changeLink}>Текущие заказы</a>
              <a href="!#" data-link="completedOrders" onClick={changeLink}>Выполненные заказы</a>
              <a href="!#" data-link="calendar" onClick={changeLink}>Календарь</a>
              <a href="!#" data-link="message" onClick={changeLink}>Сообщения</a>
              <a href="!#" data-link="settings" onClick={changeLink}>Настройки</a>
            </nav>
          </div>
          {linkPage ? linkPage : <IndexPage />}

        </div>
      </div>
    </section>
  )
}

export default UserIndex
