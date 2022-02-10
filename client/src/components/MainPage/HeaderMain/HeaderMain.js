
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import logo from './img/indexLogo.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import { userLogout } from "../../../redux/actions/userAC"
import logo2 from './logo2.png'

const HeaderMain = () => {
  const user = useSelector(state => state.user)

  const dispatch = useDispatch()
  const logoutHandler = (e) => {
    e.preventDefault()
    dispatch(userLogout())
  }

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__block-link">
          {/* <a href="!#" className="header__link">Главная</a>
          <a href="!#" className="header__link">Вторая страница</a>
          <a href="!#" className="header__link">Цены</a> */}
          <strong className="logo__text header"><i>COME & COOK</i></strong>
        </div>

        <div className="header__login">
          {user?.id ?
            <>
              <Link to="/userpage" className="header__link">Мой профиль</Link>
              <a href="!#" className="header__link" onClick={logoutHandler} >Выйти</a>
            </>

            :
            <>
              <Link to={'/auth/register'} className="header__link" >Регистрация</Link>
              <Link to={'/auth/login'} className="header__link" >Войти</Link>
              {/* <Link><button onClick={logoutHandler}>выйти</button></Link> */}
            </>
          }

        </div>

      </nav>
      <Swiper
        spaceBetween={1}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="header__background"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header__background header__background--slide2"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header__background header__background--slide1"></div>
        </SwiperSlide>

      </Swiper>

      <div class="logo header__logo">
        <img src={logo} alt="" class="header__img" />
        <strong class="logo__text-content">Высокая кухня <br></br> у Вас дома</strong>
      </div>
    </header>
  )
}

export default HeaderMain
