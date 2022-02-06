import React from 'react';
import { useDispatch } from 'react-redux';

export default function OrderItem({date, address, title, text, numOfPeople, price, status_id, povar_id, client_id}) {

  return (
    <div>
      <span>
        {date}, {address}, {title}, {text}, количество людей - {numOfPeople}, цена - {price}
      </span>
    </div>
  );
}
