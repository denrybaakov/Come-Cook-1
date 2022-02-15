import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getPovars } from '../../../redux/actions/povarsAction';
import PovarItem from "./PovarItem";

export default function PovarList() {

  const allPovars = useSelector(state => state.povars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPovars());
  }, [])

  return (
    <>
      <ul>
        <li>{allPovars.map(el => <PovarItem key={el.id} id={el.id} name={el.name} surname={el.surname} email={el.email} about={el.about} phone={el.phone} experience={el.experience} servicePrice={el.servicePrice} likes_id={el.likes_id} avatar={el.avatar} />)}</li>
      </ul>
    </>
  );
}
