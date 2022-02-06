
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { clientLogout } from "../../../redux/actions/clientAC"
import logo2 from './logo2.png'


const HeaderMain = () => {
const client = useSelector(state => state.client)
const dispatch = useDispatch()
const logoutHandler = () => {
  dispatch(clientLogout())
}


  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__block-link">
          {/* <a href="!#" className="header__link">Главная</a>
          <a href="!#" className="header__link">Вторая страница</a>
          <a href="!#" className="header__link">Цены</a> */}
        </div>

        <div className="header__login">
          <Link to={'/auth/register'} className="header__link" >Регистрация2</Link>
          <Link to={'/auth/login'} className="header__link" >Войти</Link>
          
          {/* <Link><button onClick={logoutHandler}>выйти</button></Link> */}
          <button onClick={logoutHandler} >logout</button>
          

        </div>
      </nav>
      <div className="container">
        <div className="header__content">
          <div className="header__block">
            <div className="logo header__logo">
              &
              <strong className="logo__text"><i>COME<br></br>COOK</i></strong>
            </div>
            <h1 className="title header__title">
              <span className="title title__select">Шеф повар у вас дома</span>
            </h1>
            <button className="btn btn__primary">Попробовать</button>
          </div>
          <div className="header__person">
            <img src={logo2} alt="" />
          </div>
        </div>

      </div>
    </header>
  )
}

export default HeaderMain
