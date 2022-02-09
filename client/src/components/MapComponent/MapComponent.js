import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderItem } from "../../redux/actions/orderIDAction";
import { getOrders } from "../../redux/actions/ordersAction";

export default function MapComponent() {
  let ymaps = window.ymaps;
  let myMap;
  let placemarkCollections = {};
  let placemarkList = {};

  let allOrders = useSelector(state => state.orders);
  // console.log('all orders ---> ',allOrders);
  let dispatch = useDispatch();

  // let orders = allOrders.map(el => el.address)
  // console.log('orders ---->', orders);

  
  useEffect(() => {
    dispatch(getOrders())
    if (allOrders.length)
    ymaps.ready(init)
  }, [allOrders.length])

  // let mapp = document.getElementsByClassName('ymaps-2-1-79-events-pane ymaps-2-1-79-user-selection-none')
  // console.log(mapp);


  function init() {

    // Создаем карту
    myMap = new ymaps.Map("map", {
      center: [55.76, 37.64],
      zoom: 10,
      controls: [
        'zoomControl'
      ],
      zoomMargin: [20]
    });

       
    for (let i = 0; i < allOrders.length; i++) {

      let date = allOrders[i].date;
      let address = allOrders[i].address;
      let title = allOrders[i].title;
      let text = allOrders[i].text;
      let id = allOrders[i].id;

      // Создаём коллекцию меток для города
      let cityCollection = new ymaps.GeoObjectCollection();
      let geocoder = ymaps.geocode(allOrders[i].address)

      geocoder.then(
        // eslint-disable-next-line no-loop-func
        function (res) {
          let coordinates = res.geoObjects.get(0).geometry.getCoordinates()
          let placemark = new ymaps.Placemark(
            coordinates, {
            'hintContent': `${address}`,
            'balloonContent': [
              `<h1>${date}</br>${address}</br></br>${title}</br>${text}</br></br><a href="http://localhost:3000/orders/${id}">Перейти на страницу заказа</a></h1>`,
            ]
          },
          )
          if (!placemarkList[i]) placemarkList[i] = {};
          placemarkList[i] = placemark;
          // Добавляем метку в коллекцию
          cityCollection.add(placemark);
        }
      )

      placemarkCollections[i] = cityCollection;

      // Добавляем коллекцию на карту
      myMap.geoObjects.add(cityCollection);

    }
  }

  return (

    <div className="profile__map" style={{ width: '600px', height: '350px', borderRadius: '7px' }} id="map"></div>


  )
}


