
import { Link } from 'react-router-dom'

import { useState } from 'react'

import SearchOrder from '../UserContent/SearchOrder'
import IndexPage from '../UserContent/IndexPage'
import CurrentOrders from '../UserContent/CurrentOrders'
import CompletedOrders from '../UserContent/CompletedOrders'
import Calendar from '../UserContent/Calendar'
import MessagePage from '../UserContent/Message'
import Settings from '../UserContent/Settings'

import avatar from '../img/avatar.png'
import MainOrder from '../UserContent/MainOrder'

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
      case 'mainOrder':
        return setLinkPage(<MainOrder />)
      default:
        return false
    }
  }

  // сделать фиксированным меню лист! 


  return (
    <section className="profile">
      <div className="container">
        <div className="row profile__row">
          <div className="col-30 profile__col-30">
            <div className="profile__avatar">
              <img src={avatar} alt="cv" className="profile__img2" />
            </div>
            <div className="profile__text">
              <span className="profile__name">Леонардо да Винчи</span>
              <span>zevs@zevs.com</span>
            </div>
            <nav className="profile__nav">
              <a href="!#" data-link="index" onClick={changeLink}>Главная</a>
              <a href="!#" data-link="mainOrder" onClick={changeLink}>Мои заказы</a>
              {/* <a href="!#" data-link="searchOrder" onClick={changeLink}>Поиск заказов</a>
              <a href="!#" data-link="currentOrders" onClick={changeLink}>Текущие заказы</a>
              <a href="!#" data-link="completedOrders" onClick={changeLink}>Выполненные заказы</a> */}
              <a href="!#" data-link="calendar" onClick={changeLink}>Календарь</a>
              <a href="!#" data-link="message" onClick={changeLink}>Сообщения</a>
              <a href="!#" data-link="settings" onClick={changeLink}>Настройки</a>
              <a href="!#"  >Выход</a>
            </nav>
          </div>


          {linkPage ? linkPage : <IndexPage />}

        </div>
      </div>
    </section>
  )
}

export default UserIndex
