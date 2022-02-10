
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

import gosha from '../../../images/clients/gosha.png'
import ilona from '../../../images/clients/ilona.jpeg'
import jyli from '../../../images/clients/jyli.jpeg'
import artem from '../../../images/clients/artem.jpeg'
import kiril from '../../../images/clients/kirill.jpeg'

const ClientPage = () => {
  return (
    <section className="client">

      <h2>Что говорят о Нас?</h2>

      <div className="external">
        <div className="horizontal-scroll-wrapper">
          <div className="img-wrapper slower">
            <a href="!#" target="_blank" rel="noopener" className='client__text'>
              <img src={gosha} alt="User1" />
              <p>Отличный проект</p>
            </a>
          </div>

          <div className="img-wrapper faster">
            <a href="!#" target="_blank" rel="noopener" className='client__text'>
              <img src={imgUser9} alt="" />
              <p >Люблю начосы. Здесь можно найти повара который готовит отличные начосы.</p>
            </a>
          </div>

          <div className="img-wrapper slower vertical">
            <a href="!#" target="_blank" rel="noopener" className='client__text'>
              <img src={ilona} alt="" />
              <p>Крутяк!</p>
            </a>
          </div>

          <div className="img-wrapper slower slower-down">
            <a href="!#" target="_blank" rel="noopener" className='client__text'>
              <img src={jyli} alt="" />
              <p>Повара знают свое дело. Очень вкусные блюда готовят</p>
            </a>
          </div>

          <div className="img-wrapper">
            <a href="!#" target="_blank" rel="noopener" className='client__text'>
              <img src={artem} alt="" />
              <p>Какой-то мужик! Какой-то проект!</p>
            </a>
          </div>

          <div className="img-wrapper slower">
            <a href="!#" target="_blank" rel="noopener" className='client__text'>
              <img src={kiril} alt="" />
              <p></p>
            </a>
          </div>

          <div className="img-wrapper faster1">
            <a href="!#" target="_blank" rel="noopener" className='client__text'>
              <img src={imgUser7} alt="" />
              <p>Что здесь вообще происходит????</p>
            </a>
          </div>

          <div className="img-wrapper slower last">
            <a href="!#" target="_blank" rel="noopener" className='client__text'>
              <img src={imgUser4} alt="" />
              <p>За эту инновационную идею, такую премию дадут...</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientPage
