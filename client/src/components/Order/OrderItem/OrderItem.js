import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function OrderItem({ date, address, title, text, numOfPeople, price, id, status_id, povar_id, client_id }) {

  return (
    <div>
      <span>
        {date}, {address}, {title}, {text}, количество людей - {numOfPeople}, цена - {price}
        <Link to={`/orders/${id}`}>
          <button>the knopka</button>
        </Link>
      </span>
    </div>
  );
}
