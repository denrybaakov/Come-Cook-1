import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import avatar from '../img/avatar.png'
import { userLogout } from "../../../redux/actions/userAC"
import ClientIndexPage from "../ClientContent/ClientIndexPage"
import ClientMainOrder from "./ClientMainOrder"
import ClientSearch from "./ClientSearch"
import ClientMessage from "./ClientMessage"
import ClientSettings from "./ClientSetting"
import ModalAvatarClient from '../../Modal/ModalAvatarClient'
import { getOneClient } from '../../../redux/actions/clientAC'
import { Link } from 'react-router-dom'

const ClientIndex = () => {
  const [linkPage, setLinkPage] = useState(false)
  const { id, name, email } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(getOneClient(id))
  }, [])

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

  const [file, setFile] = useState('')
  const [filename, setFilename] = useState('Choose File')
  const [uploadedFile, setUploadedFile] = useState({})

  const client = useSelector(state => state.user)
  const dispatch = useDispatch()

  const logoutHandler = (e) => {
    dispatch(userLogout())
  }

  const pathAvatar = `http://localhost:3001${client.avatar}`

  console.log(client);
  return (

    <section className="profile">
      <div className="container">
        <div className="row profile__row">
          <div className="col-30 profile__col-30">

            <div className="profile__avatar">
              <img src={client.avatar ? pathAvatar : avatar} alt="cv" className="profile__img2" />
              {/* <ModalAvatar /> */}
              <ModalAvatarClient />
            </div>

            <div className="profile__text">
              <span className="profile__name">{name}</span>
              <span>{email}</span>
              <span>Статус : Клиент</span>
            </div>

            <nav className="profile__nav">
              <a href="!#" data-link="index" onClick={changeLink}>Главная</a>
              <a href="!#" data-link="mainOrder" onClick={changeLink}>Заказы</a>
              <a href="!#" data-link="search" onClick={changeLink}>Поиск</a>
              <a href="!#" data-link="settings" onClick={changeLink}>Настройки</a>
              <Link to="/" onClick={logoutHandler}>Выход</Link>
            </nav>
          </div>

          {linkPage ? linkPage : <ClientIndexPage />}
        </div>
      </div>
    </section>
  )
}

export default ClientIndex
