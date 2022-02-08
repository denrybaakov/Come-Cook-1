import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/actions/ordersAction";

export default function MapComponent() {
  let ymaps = window.ymaps;
  let myMap;
  let placemarkCollections = {};
  let placemarkList = {};

  let allOrders = useSelector(state => state.orders);
  // console.log('all orders ---> ',allOrders);
  let dispatch = useDispatch();

  let orders = allOrders.map(el => el.address)
  // console.log('orders ---->', orders);

  // let mapp = document.getElementsByClassName('ymaps-2-1-79-events-pane ymaps-2-1-79-user-selection-none')
  // console.log(mapp);
  
  useEffect(() => {
    dispatch(getOrders())
    if (orders.length)
    ymaps.ready(init)
  }, [orders.length])
  
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
       
    for (let i = 0; i < orders.length; i++) {

      // Создаём коллекцию меток для города
      let cityCollection = new ymaps.GeoObjectCollection();
      let geocoder = ymaps.geocode(orders[i])

      geocoder.then(
        // eslint-disable-next-line no-loop-func
        function (res) {
          let coordinates = res.geoObjects.get(0).geometry.getCoordinates()
          // console.log('geocoder ----->', geocoder, 'coordinates------>', coordinates);
          let placemark = new ymaps.Placemark(
            coordinates, {
            'hintContent': 'temp',
            'balloonContent': 'temp'
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
  
      <div style={{ width: '600px', height: '580px', borderRadius: '7px' }} id="map"></div>
 

  )
}


