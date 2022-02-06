import * as TYPE from '../types/types'
import axios from 'axios'

export const allCoordsOrders = value => ({
  type: TYPE.GET_COORDS_ORDERS,
  payload: value
})


export const getAllCoordsOrders = strSearch => dispatch => {
  axios(`https://geocode-maps.yandex.ru/1.x/?apikey=5a0ef838-8ef3-4449-8f30-5a93bdf47ddd&geocode=${strSearch}&format=json`)
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

// dispatch(allCoordsOrders()

