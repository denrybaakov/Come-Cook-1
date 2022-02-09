import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPovarPage } from '../../../redux/actions/povarIDAction';

export default function PovarPage({ id, name, surname, email, about, phone, experience, servicePrice, likes_id, avatar }) {
  
  const dispatch = useDispatch();

  const getPovarHandler = (id) => {
    dispatch(getPovarPage(id));
  }

  return (
    <>
      <div>{name}</div>
      <div>{surname}</div>
      <div>{email}</div>
      <div>{about}</div>
      <div>{phone}</div>
      <div>{experience}</div>
      <div>{servicePrice}</div>
      <div>{avatar}</div>
      <Link to={`/povars/${id}`}>
        <button className="btn-order edit" onClick={() => getPovarHandler(id)}>Перейти на страницу повара</button>
      </Link>
    </>
  );
}
