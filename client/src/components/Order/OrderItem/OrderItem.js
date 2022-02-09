import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { getOrderItem } from '../../../redux/actions/orderIDAction';
import { deleteOrders } from '../../../redux/actions/ordersAction';
import ChatClient from '../../Chat/ChatClient';
import ModalChat from '../../Modal/Modal';
import ModalEdit from '../../Modal/ModalEdit';

const OrderItem = ({ id, index, date, address, title, text, numOfPeople, price, status_id, povar_id, client_id }) => {

  const dispatch = useDispatch();

  const [expanded, setExpanded] = React.useState(false);

  const { role } = useSelector(state => state.user)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getOrderHandler = (id) => {
    dispatch(getOrderItem(id));
  }

  const deleteHandler = (id) => {
    dispatch(deleteOrders(id));
  }

  // console.log(role, 'roleID');

  return (
    // пофиксить!!!!!!!!!!!!!!!!!!!!!!!!!!
    <Accordion expanded={expanded === id} onChange={handleChange(id)}>
      <AccordionSummary
        className='order__block'
        aria-controls={`panel1bh-content-${index}`}
        id={`panel1bh-header-${index}`}
      >
        <Typography sx={{ width: '75%', flexShrink: 0 }}>
          {title}
        </Typography>
        <Typography sx={{ color: 'text.secondary', width: '20%' }}>{price} руб.</Typography>
      </AccordionSummary>
      <AccordionDetails className='order__subblock'>
        <Typography >
          <div className="order__content">
            <span className="order__date">Дата: {date} </span>
            <span className="order__address">Адрес: {address}</span>
            <span className="order__people">Кол-во персон: {numOfPeople}</span>
            <p className="order__text">Описание: {text}</p>
          </div>
          <div className="order__group-btn">

            {/* {role === 'client' ? <button className="btn-order" onClick={showModal()}>Вывести модалку с сообщениями</button> : null} */}
            {role === 'client' ? <ModalEdit id={id} index={index} date={date} address={address} title={title} text={text} numOfPeople={numOfPeople} price={price} /> : null}

            <Link to={`/orders/${id}`}>
              <button className="btn-order edit" onClick={() => getOrderHandler(id)}>Открыть</button>
            </Link>

            {/* <button className="btn-order edit">Редактировать</button> */}
            <button className="btn-order del" onClick={() => deleteHandler(id)}>Отклонить</button>
          </div>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default OrderItem
