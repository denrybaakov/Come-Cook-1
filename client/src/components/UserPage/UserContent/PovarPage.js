import React from 'react';
import { useSelector } from 'react-redux';

export default function PovarPage() {

  const povar = useSelector(state => state.povarID)
  console.log('povar page ---->', povar);

  return (
    <>
    <div>{povar.name}</div>
    <div>{povar.avatar}</div>
    <div>{povar.email}</div>
    <div>{povar.phone}</div>
    <div>{povar.servicePrice}</div>
    <div>{povar.surname}</div>
    <div>{povar.name}</div>
    <div>{povar.name}</div>
    <div>{povar.name}</div>
    </>
  );
}
