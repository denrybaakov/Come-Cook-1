import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPovarPage } from '../../../redux/actions/povarIDAction';


import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

import avatar2 from '../../UserPage/img/avatar.png'



export default function PovarPage({ id, name, surname, email, about, phone, experience, servicePrice, likes_id, avatar }) {

  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch();

  const getPovarHandler = (id) => {
    dispatch(getPovarPage(id));
  }

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const pathAvatar = `http://localhost:3001${avatar}`

  return (
    <>
      <div className="povarList">
        <Accordion expanded={expanded === id} onChange={handleChange(id)} sx={{ marginBottom: '0.7rem' }}>
          <AccordionSummary
            className='order__block'
          >
            <Typography sx={{ width: '75%', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
              <span className="profile__order-img">
                <img src={avatar ? pathAvatar : avatar2} alt="avatar" />
              </span> { }   {name} - {surname} - {email}
            </Typography>
            <Typography sx={{ color: 'text.secondary', width: '20%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>{ } </Typography>
          </AccordionSummary>
          <AccordionDetails className='order__subblock'>
            <Typography >
              <div className="order__content">
                <span className="order__date">О поваре: {about ? about : 'Пользователь не добавил информацию о себе'} </span>
                <span className="order__date">Опыт: {experience ? experience : 'Пользователь не добавил информацию о себе'} лет </span>
                <span className="order__address">Средний чек повара: {servicePrice ? servicePrice : 'Пользователь не добавил информацию о себе'} рублей</span>
                <span className="order__people">Телефон: {phone ? phone : 'Пользователь не добавил информацию о себе'}</span>
              </div>
              <div className="order__group-btn">
                <Link to={`/povars/${id}`}>
                  <button className="btn-order edit" onClick={() => getPovarHandler(id)}>Перейти на страницу повара</button>
                </Link>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* <div>{name}</div>
      <div>{surname}</div>
      <div>{email}</div>
      <div>{about}</div>
      <div>{phone}</div>
      <div>{experience}</div>
      <div>{servicePrice}</div>
      <div>{avatar}</div> */}

    </>
  );
}
