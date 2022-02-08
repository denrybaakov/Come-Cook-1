import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

const OrderItemPovar = ({ id, index, date, address, title, text, numOfPeople, price, status, nameClient, emailClient, avatar }) => {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    // пофиксить!!!!!!!!!!!!!!!!!!!!!!!!!!
    <Accordion expanded={expanded === id} onChange={handleChange(id)} sx={{ marginBottom: '0.7rem' }}>
      <AccordionSummary
        className='order__block'
        aria-controls={`panel1bh-content-${index}`}
        id={`panel1bh-header-${index}`}
      >
        <Typography sx={{ width: '75%', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
          <span className="profile__order-img">
            <img src={avatar} alt="avatar" />
          </span> {nameClient}   {title}
        </Typography>
        <Typography sx={{ color: 'text.secondary', width: '20%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>{price} руб.</Typography>
      </AccordionSummary>
      <AccordionDetails className='order__subblock'>
        <Typography >
          <div className="order__content">
            <span className="order__date">Почта клиента: {emailClient} </span>
            <span className="order__date">Дата: {date} </span>
            <span className="order__address">Адрес: {address}</span>
            <span className="order__people">Кол-во персон: {numOfPeople}</span>
            <p className="order__text">Описание: {text}</p>
            <p className="order__text">Статус: {status}</p>
          </div>
          <div className="order__group-btn">
            <Link to={`/orders/${id}`}>
              <button className="btn-order edit">Посмотреть</button>
            </Link>
            <button className="btn-order edit">Принять</button>
            {/* <button className="btn-order del"></button> */}
          </div>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default OrderItemPovar
