import ios from './img/ios.svg'
import gPlay from './img/gplay.svg'

const BenefitsMain = () => {
  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits__row">
          <div className="benefits__row benefits__row--img"></div>
          <div className="benefits__content">
            <h2 className="title benefits__title">Как<br></br><i>мы работаем?</i></h2>
            <p className="subtitle benefits__subtitle">Вы размещает заявку с описанием тех блюд, которые вы хотели бы поесть, указываете дату, место, количество персон и сумму денег, которые Вы готовы заплатить.</p>
            <p className="subtitle benefits__subtitle">Вашу заявку видят Повара на сайте</p>
            <p className="subtitle benefits__subtitle">Повар делает отклик</p>
            <p className="subtitle benefits__subtitle">Вы обговориваете детали</p>
            <p className="subtitle benefits__subtitle">Повар приезжает к Вам на мероприятие</p>
            <div className="benefits__btns">
              <img src={ios} alt="Ios" />
              <img src={gPlay} alt="PLay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsMain
