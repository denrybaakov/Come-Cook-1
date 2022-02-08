

import ios from './img/ios.svg'
import gPlay from './img/gplay.svg'

const BenefitsMain = () => {
  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits__row">
          <div className="benefits__row benefits__row--img"></div>
          <div className="benefits__content">
            <h2 className="title benefits__title">Наши<br></br><i>преимущества</i></h2>
            <p className="subtitle benefits__subtitle">У нас их много. Просто лень перечислять. </p>
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
