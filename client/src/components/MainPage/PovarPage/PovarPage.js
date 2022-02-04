
import profile from './img/profile1.jpg'


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
            <span className="row__item--title preview__row__item--title">Гермес</span>
            <span className="row__item--ganre preview__row__item--ganre">Шеф-повар</span>
            <div className="row__item-img preview__row__item-img">
              <img src={profile} alt="Preview" />
            </div>
          </a>

          <a className="row__item preview__row__item" href="!#">
            <span className="row__item--title preview__row__item--title">Апполон</span>
            <span className="row__item--ganre preview__row__item--ganre">Шеф-повар</span>
            <div className="row__item-img preview__row__item-img">
              <img src={profile} alt="Preview" />
            </div>
          </a>

          <a className="row__item preview__row__item" href="!#">
            <span className="row__item--title preview__row__item--title">Зевс</span>
            <span className="row__item--ganre preview__row__item--ganre">Шеф-повар шеф-поваров</span>
            <div className="row__item-img preview__row__item-img">
              <img src={profile} alt="Preview" />
            </div>
          </a>

          <a className="row__item preview__row__item" href="!#">
            <span className="row__item--title preview__row__item--title">Посейдон</span>
            <span className="row__item--ganre preview__row__item--ganre">Шеф-повар</span>
            <div className="row__item-img preview__row__item-img">
              <img src={profile} alt="Preview" />
            </div>
          </a>

          <a className="row__item preview__row__item" href="!#">
            <span className="row__item--title preview__row__item--title">Аид</span>
            <span className="row__item--ganre preview__row__item--ganre">Повар</span>
            <div className="row__item-img preview__row__item-img">
              <img src={profile} alt="Preview" />
            </div>
          </a>

          <a className="row__item preview__row__item" href="!#">
            <span className="row__item--title preview__row__item--title">Ра</span>
            <span className="row__item--ganre preview__row__item--ganre">Повар</span>
            <div className="row__item-img preview__row__item-img">
              <img src={profile} alt="Preview" />
            </div>
          </a>


        </div>

        <div className="preview__footer">
          <button className="btn-secondary">Присоединиться</button>
        </div>
      </div>
    </section>
  )
}

export default PovarPage
