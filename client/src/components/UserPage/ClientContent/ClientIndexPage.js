import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getCurrentOrdersClient, getFinishedOrdersClient } from "../../../redux/actions/ordersAction";

import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Navigation } from "swiper";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from '../../../images/cooks/1.jpg'
import img2 from '../../../images/cooks/2.jpg'
import img3 from '../../../images/cooks/3.jpg'
import img4 from '../../../images/cooks/4.jpg'
import img5 from '../../../images/sliderImg/11.jpg'

const ClientIndexPage = () => {

  // const { id } = useSelector(state => state.user)
  // const dispatch = useDispatch();
  // const currentOrders = useSelector(state => state.ordersCurrentClient)
  // const finishedOrders = useSelector(state => state.ordersFinishedClient)
  // console.log('temp in clientindex ----->', finishedOrders);

  // useEffect(() => {
  //   // dispatch(getCurrentOrdersClient(id))
  //   dispatch(getFinishedOrdersClient(id))
  // }, []);


  return (
    <div className="col-70 profile__col-70">
      <div className="profileClient">
        <h2 className="profileClient__title">Лента полезных новостей</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={false}
          className="profileClient__swiper"
        >
          <SwiperSlide className="profileClient__slide">
            <div className="profileClient__block">
              <img src={img1} alt="" />
              <div className="profileClient__content">
                <strong>Готовим фирменный соус</strong>
                <span>Под различные блюда </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="profileClient__slide">
            <div className="profileClient__block">
              <img src={img2} alt="" />
              <div className="profileClient__content">
                <strong>Какая морская рыба полезнее всего</strong>
                <span>Польза морской рыбы</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="profileClient__slide">
            <div className="profileClient__block">
              <img src={img3} alt="" />
              <div className="profileClient__content">
                <strong>Перга</strong>
                <span>Продукт пчеловодства</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="profileClient__slide">
            <div className="profileClient__block">
              <img src={img4} alt="" />
              <div className="profileClient__content">
                <strong>Идеальные бортики</strong>
                <span>Основа для чизкейга</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide></SwiperSlide>


        </Swiper>
      </div>








    </div>
  )
}

export default ClientIndexPage
