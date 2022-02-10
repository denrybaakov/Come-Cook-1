

import profile2 from './img/nibiru.png'
import { Link } from 'react-router-dom'

import ivlev from '../../../images/povars/ivlev.jpg'
import poly from '../../../images/povars/poly.jpg'
import masha from '../../../images/povars/masha.jpg'
import dud from './../../../images/povars/2.png'
import rd from '../../../images/povars/3.jpg'
import jenya from '../../../images/povars/5.jpg'



const PovarPage = () => {

  return (
    <section className="preview">
      <div className="container">
        <h2 className="title preview__title">
          Питайтесь только от  <i className="title preview__select">лучших поваров в городе</i>
        </h2>
        <p className="subtitle preview__subtitle">Сервис <i className="text-logo"><i>Come&Cook</i></i> открывает новые  </p>

        <div className="row preview__row">

          <a className="row__item preview__row__item" href="!#">
            <span className="row__item--title preview__row__item--title">Антон</span>
            <span className="row__item--ganre preview__row__item--ganre">Главный Шеф-повар</span>
            <div className="row__item-img preview__row__item-img">
              <img src={profile2} alt="Preview" />
            </div>
          </a>

          <a className="row__item preview__row__item" href="!#">
            <span className="row__item--title preview__row__item--title">Ивлев</span>
            <span className="row__item--ganre preview__row__item--ganre">Ученик Антона</span>
            <div className="row__item-img preview__row__item-img">
              <img src={ivlev} alt="Preview" />
            </div>
          </a>

          <a className="row__item preview__row__item" href="!#">
            <span className="row__item--title preview__row__item--title">Полина</span>
            <span className="row__item--ganre preview__row__item--ganre">Специалист по Итальянской кухне</span>
            <div className="row__item-img preview__row__item-img">
              <img src={poly} alt="Preview" />
            </div>
          </a>

          <a className="row__item preview__row__item" href="!#">
            <span className="row__item--title preview__row__item--title">Маша</span>
            <span className="row__item--ganre preview__row__item--ganre">Специалист по слепой готовке</span>
            <div className="row__item-img preview__row__item-img">
              <img src={masha} alt="Preview" />
            </div>
          </a>

          <a className="row__item preview__row__item" href="!#">
            <span className="row__item--title preview__row__item--title">Начинающий повар</span>
            <span className="row__item--ganre preview__row__item--ganre">0 фаза</span>
            <div className="row__item-img preview__row__item-img">
              <img src={jenya} alt="Preview" />
            </div>
          </a>

          <a className="row__item preview__row__item" href="!#">
            <span className="row__item--title preview__row__item--title">Начинающий Повар </span>
            <span className="row__item--ganre preview__row__item--ganre"> 1 фаза</span>
            <div className="row__item-img preview__row__item-img">
              <img src={rd} alt="Preview" />
            </div>
          </a>


        </div>

        <div className="preview__footer">
          <Link to="/auth/register">
            <button className="btn-secondary">Присоединиться</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PovarPage
