
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import { Link } from 'react-router-dom'

const PovarPreview = () => {
  return (
    <section className="povarPreview">
      <Swiper
        spaceBetween={1}
        onSlideChange={() => { }}
        onSwiper={(swiper) => { }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="povarPreview__background"></div>
        </SwiperSlide>


      </Swiper>
      <div className="povarPreview__text">
        <h2>COME & COOK - <br></br>ШЕФ-ПОВАР <i><br></br>готовит на твоей&nbsp;кухне ... и </i>ТОЛЬКО ДЛЯ ТЕБЯ</h2>
        <Link to="/auth/register">
        <button className="btn-secondary">Регистрация</button>
        </Link>
      </div>

    </section>
  )
}

export default PovarPreview
