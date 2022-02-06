import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
// import { allRestaurants } from "../../redux/actions/restaurant.action";
// import { allRestByCoord } from "../../redux/actions/rests.action";
// import { getOrders } from '../../redux/actions/ordersAction'
// import { getAllCoordsOrders } from '../../redux/actions/allCoordsOrdersAction'
// import 'react-toastify/dist/ReactToastify.css';

const MapComponent = () => {
  let ymaps = window.ymaps;
  const dispatch = useDispatch()

  const coordinates = useSelector(state => state.restaurant)

  const [myLocation, setmyLocation] = useState(getMyAdress())

  // вычисляем геопозицию по IP
  async function getMyAdress() {
    navigator.geolocation.getCurrentPosition(async (geoData) => {
      const { longitude, latitude } = geoData.coords;
      setmyLocation([latitude, longitude])
    });
  };

  // useEffect(() => {
  //   // dispatch(getAllCoordsOrders())
  //   ymaps.ready(init)
  // }, [])

  //подключаем карты
  function init() {
    let myMap = new ymaps.Map("map", {
      center: [55.7066426, 37.5973765],
      zoom: 10,
      controls: ['zoomControl'],
      behaviors: ['drag', 'scrollZoom']
    })
    // Создадим объекты на основе JSON-описания геометрий.
    let objects = ymaps?.geoQuery([55.760178, 37.618575]).addToMap(myMap)

    objects.searchInside(myMap)
      // И затем добавим найденные объекты на карту.
      .addToMap(myMap);

    // objects._objects.forEach(el => el.events.add('click', (e) => {
    //   dispatch(allRestByCoord([el.geometry._coordinates])) // показывает ресторан по клику
    // }))
    // myMap.events.add('boundschange', function () {
    //   // После каждого сдвига карты будем смотреть, какие объекты попадают в видимую область.
    //   let visibleObjects = objects.searchInside(myMap).addToMap(myMap);
    //   const coord = visibleObjects._objects.map(el => el.geometry._coordinates)
    //   // Оставшиеся объекты будем удалять с карты.
    //   objects.remove(visibleObjects).removeFromMap(myMap);
    //   dispatch(allRestByCoord(coord))
    // });
  }

  console.log(window);

  ymaps.ready(init)

  return (
    <div className="main__map ymaps-layers-pane">
      <div style={{ width: '600px', height: '580px', borderRadius: '7px' }} id="map" />
    </div>
  )
}

export default MapComponent
