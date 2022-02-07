
import { useState } from "react"

import avatar from '../img/avatar.png'

import ClientIndexPage from "../ClientContent/ClientIndexPage"
import ClientMainOrder from "./ClientMainOrder"
import ClientSearch from "./ClientSearch"
import ClientMessage from "./ClientMessage"
import ClientSettings from "./ClientSetting"

const ClientIndex = () => {

  const [linkPage, setLinkPage] = useState(false)

  const changeLink = e => {
    e.preventDefault()
    const { link } = e.target.dataset
    switch (link) {
      case 'index':
        return setLinkPage(<ClientIndexPage />)
      case 'search':
        return setLinkPage(<ClientSearch />)
      case 'message':
        return setLinkPage(<ClientMessage />)
      case 'settings':
        return setLinkPage(<ClientSettings />)
      case 'mainOrder':
        return setLinkPage(<ClientMainOrder />)
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
              <span className="profile__name">Киану Риз</span>
              <span>kiany@riz.com</span>
            </div>
            <nav className="profile__nav">
              <a href="!#" data-link="index" onClick={changeLink}>Главная</a>
              <a href="!#" data-link="mainOrder" onClick={changeLink}>Заказы</a>
              <a href="!#" data-link="search" onClick={changeLink}>Поиск</a>
              <a href="!#" data-link="message" onClick={changeLink}>Сообщения</a>
              <a href="!#" data-link="settings" onClick={changeLink}>Настройки</a>
              <a href="!#">Выход</a>
            </nav>
          </div>

          {linkPage ? linkPage : <ClientIndexPage />}

        </div>
      </div>
    </section>
  )
}

export default ClientIndex
