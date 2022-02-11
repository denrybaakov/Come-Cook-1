import axios from 'axios'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../../redux/actions/userAC'
import { useState } from 'react'
import { checkUser } from '../../../redux/actions/userAC'
import SearchOrder from '../UserContent/SearchOrder'
import IndexPage from '../UserContent/IndexPage'
import CurrentOrders from '../UserContent/CurrentOrders'
import CompletedOrders from '../UserContent/CompletedOrders'
import Calendar from '../UserContent/Calendar'
import MessagePage from '../UserContent/Message'
import Settings from '../UserContent/Settings'
import OrderPage from '../../Order/OrderPage/OrderPage'
import avatar from '../img/avatar.png'
import MainOrder from '../UserContent/MainOrder'
import ModalAvatar from '../../Modal/Modal'

const UserIndex = () => {
  const [linkPage, setLinkPage] = useState(false)
  const povar = useSelector(state => state.user)
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

  const { name, email, role } = useSelector(state => state.user)
  const dispatch = useDispatch();
  const logoutHandler = (e) => {
    dispatch(userLogout())
  }


  const pathAvatar = `http://localhost:3001${povar.avatar}`

  return (
    <>
      <section className="profile">
        <div className="container">
          <div className="row profile__row">
            <div className="col-30 profile__col-30">
              <div className="profile__avatar">

                <img src={povar.avatar ? pathAvatar : avatar} className="profile__img2" alt='ds' />
                <ModalAvatar />
              </div>
              <div className="profile__text">
                <span className="profile__name">{name}</span>
                <span>{email}</span>
                <span>Статус: Повар</span>
              </div>
              <nav className="profile__nav">
                <a href="!#" data-link="index" onClick={changeLink}>Главная</a>
                <a href="!#" data-link="mainOrder" onClick={changeLink}>Мои заказы</a>
                {/* <a href="!#" data-link="searchOrder" onClick={changeLink}>Поиск заказов</a>
              <a href="!#" data-link="currentOrders" onClick={changeLink}>Текущие заказы</a>
              <a href="!#" data-link="completedOrders" onClick={changeLink}>Выполненные заказы</a> */}
                {/* <a href="!#" data-link="calendar" onClick={changeLink}>Календарь</a> */}
                {/* <a href="!#" data-link="message" onClick={changeLink}>Сообщения</a> */}
                <a href="!#" data-link="settings" onClick={changeLink}>Настройки</a>
                <Link to="/" onClick={logoutHandler}>Выход</Link>

                {/* <a href="/" onClick={logoutHandler}>Выход</a> */}


              </nav>
            </div>

            {linkPage ? linkPage : <IndexPage />}

          </div>
        </div>
      </section>

    </>


    // <section className="profile">
    //   <div className="container">
    //     <div className="row profile__row">
    //       <div className="col-30 profile__col-30">
    //         <div className="profile__avatar">
    //           <img src={avatar} alt="cv" className="profile__img2" />
    //         </div>
    //         <div className="profile__text">
    //           <span className="profile__name">Леонардо да Винчи</span>
    //           <span>zevs@zevs.com</span>
    //         </div>
    //         <nav className="profile__nav">
    //           <a href="!#" data-link="index" onClick={changeLink}>Главная</a>
    //           <a href="!#" data-link="mainOrder" onClick={changeLink}>Мои заказы</a>
    //           {/* <a href="!#" data-link="searchOrder" onClick={changeLink}>Поиск заказов</a>
    //           <a href="!#" data-link="currentOrders" onClick={changeLink}>Текущие заказы</a>
    //           <a href="!#" data-link="completedOrders" onClick={changeLink}>Выполненные заказы</a> */}
    //           <a href="!#" data-link="calendar" onClick={changeLink}>Календарь</a>
    //           <a href="!#" data-link="message" onClick={changeLink}>Сообщения</a>
    //           <a href="!#" data-link="settings" onClick={changeLink}>Настройки</a>
    //           <a href="!#"  >Выход</a>
    //         </nav>
    //       </div>


    //       {linkPage ? linkPage : <IndexPage />}

    //     </div>
    //   </div>
    // </section>



  )
}

export default UserIndex
