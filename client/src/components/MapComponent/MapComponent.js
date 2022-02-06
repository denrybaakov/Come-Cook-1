// api key - 5a0ef838-8ef3-4449-8f30-5a93bdf47ddd
import React, { useEffect, useState } from 'react';


export default function MapComponent({ input }) {

  console.log('input from map ---->', input);
  let ymaps = window.ymaps;

  // const [myLocation, setmyLocation] = useState(getMyAdress())
  // console.log(myLocation);

  // async function getMyAdress() {
  //   navigator.geolocation.getCurrentPosition(async (geoData) => {
  //     const { longitude, latitude } = geoData.coords;
  //     setmyLocation([latitude, longitude])
  //   });
  // };

  ymaps.ready(init);
  function init() {
    let myMap = new ymaps.Map("map", {
      center: [55.76, 37.64],
      zoom: 10
    });
  }

  return (
    <div>
      <div style={{ width: '600px', height: '580px', borderRadius: '7px' }} id="map" ></div>
    </div>
  );
}


// const url = encodeURI(`https://geocode-maps.yandex.ru/1.x/?apikey=5a0ef838-8ef3-4449-8f30-5a93bdf47ddd&geocode=${input.city},+${fullStreet}+улица,+дом+${input.building}&format=json`)
