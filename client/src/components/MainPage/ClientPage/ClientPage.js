
// import videoFood from './video/food.mp4'
import imgUser1 from './img/user1.jpg'
import imgUser2 from './img/user2.jpg'
import imgUser3 from './img/user3.jpg'
import imgUser4 from './img/user4.jpg'
import imgUser5 from './img/user5.jpg'
import imgUser6 from './img/user6.jpg'
import imgUser7 from './img/user8.jpg'
import imgUser8 from './img/user111.png'
import imgUser9 from './img/user222.jpeg'

const ClientPage = () => {
  return (
    <section className="client">

      <h2>Что говорят о Нас?</h2>

      <div className="external">
        <div className="horizontal-scroll-wrapper">
          <div className="img-wrapper slower">
            <a href="!#" target="_blank" rel="noopener" classNameName='client__text'>
              <img src={imgUser1} alt="User1" />
              <p>Это один из лучших сервисов в мире. Поэтому я и хочу его купить. </p>
            </a>
          </div>

          <div className="img-wrapper faster">
            <a href="!#" target="_blank" rel="noopener" classNameName='client__text'>
              <img src={imgUser9} alt="" />
              <p>Если Билл настроен серьезно, то 10% от сделки как преподавателю мои.</p>
            </a>
          </div>

          <div className="img-wrapper slower vertical">
            <a href="!#" target="_blank" rel="noopener" classNameName='client__text'>
              <img src={imgUser3} alt="" />
              <p>А мне просто нравится заказывать раба из этого сервиса</p>
            </a>
          </div>

          <div className="img-wrapper slower slower-down">
            <a href="!#" target="_blank" rel="noopener" classNameName='client__text'>
              <img src={imgUser4} alt="" />
              <p>За эту инновационную идею, такую премию дадут...</p>
            </a>
          </div>

          <div className="img-wrapper">
            <a href="!#" target="_blank" rel="noopener" classNameName='client__text'>
              <img src={imgUser5} alt="" />
              <p></p>
            </a>
          </div>

          <div className="img-wrapper slower">
            <a href="!#" target="_blank" rel="noopener">
              <img src={imgUser6} alt="" />
            </a>
          </div>

          <div className="img-wrapper faster1">
            <a href="!#" target="_blank" rel="noopener">
              <img src={imgUser7} alt="" />
            </a>
          </div>

          <div className="img-wrapper slower last">
            <a href="!#" target="_blank" rel="noopener">
              <img src={imgUser2} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientPage
