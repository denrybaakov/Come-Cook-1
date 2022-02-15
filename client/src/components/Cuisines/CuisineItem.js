import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

export default function CuisineItem({ name, img }) {
  const cuisines = useSelector(state => state.cuisines);
  console.log('cuisines --->', cuisines);

  return (
    <div>CuisineItem</div>
  )
}

