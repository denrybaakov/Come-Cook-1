import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import img1 from '../../../images/cuisineImages/armenian.png'
import img2 from '../../../images/cuisineImages/belorus.png'
import img3 from '../../../images/cuisineImages/ukrain.png'
import img4 from '../../../images/cuisineImages/georgian.png'

import img5 from '../../../images/cuisineImages/korean.png'
import img6 from '../../../images/cuisineImages/thai.png'
import img7 from '../../../images/cuisineImages/vietnam.png'
import img8 from '../../../images/cuisineImages/hongkong.png'

import img9 from '../../../images/cuisineImages/british.png'
import img10 from '../../../images/cuisineImages/french.png'
import img11 from '../../../images/cuisineImages/italian.png'
import img12 from '../../../images/cuisineImages/spain.png'

import img13 from '../../../images/cuisineImages/turkish.png'
import img14 from '../../../images/cuisineImages/arabic.png'
import img15 from '../../../images/cuisineImages/indian.png'


const SliderPage = () => {
  return (
    <section className="sliderPage">
      <div className="container">
        <h2 className="title sliderPage__title">Самые<i className="title preview__select"> популярные блюда</i> </h2>
        <div className="sliderPage__boxes">
          <div className="sliderPage__box">
            <h3 className="title sliderPage__box-title">Блюда СНГ</h3>
            <Swiper
              effect={"cube"}
              grabCursor={false}
              cubeEffect={{
                shadow: false,
                slideShadows: false,
                shadowOffset: 20,
                shadowScale: 0.24,
              }}
              pagination={false}
              modules={[EffectCube, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={img1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img4} />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="sliderPage__box">
            <h3 className="title sliderPage__box-title">Азиатская кухня</h3>
            <Swiper
              effect={"cube"}
              grabCursor={true}
              cubeEffect={{
                shadow: false,
                slideShadows: false,
                shadowOffset: 20,
                shadowScale: 0.24,
              }}
              pagination={false}
              modules={[EffectCube, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={img5} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img6} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img7} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img8} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="sliderPage__boxes">
          <div className="sliderPage__box">
            <h3 className="title sliderPage__box-title">Европейская кухня</h3>
            <Swiper
              effect={"cube"}
              grabCursor={true}
              cubeEffect={{
                shadow: false,
                slideShadows: false,
                shadowOffset: 20,
                shadowScale: 0.24,
              }}
              pagination={false}
              modules={[EffectCube, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={img9} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img10} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img11} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img12} />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="sliderPage__box">
            <h3 className="title sliderPage__box-title">Восточная кухня</h3>
            <Swiper
              effect={"cube"}
              grabCursor={true}
              cubeEffect={{
                shadow: false,
                slideShadows: false,
                shadowOffset: 20,
                shadowScale: 0.24,
              }}
              pagination={false}
              modules={[EffectCube, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={img14} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img13} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img15} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

      </div>
    </section>
  )
}

export default SliderPage
