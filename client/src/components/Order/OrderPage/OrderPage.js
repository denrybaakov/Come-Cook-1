import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrderItem } from '../../../redux/actions/orderIDAction';
import { Link } from 'react-router-dom';
import ChatClient from '../../Chat/ChatClient';
import { updateOrder } from '../../../redux/actions/ordersAction';

export default function OrderPage() {
  const { clientAvatar, clientSurname, clientEmail, clientPhone, clientName, status, status_id, price, numOfPeople, text, title, address, date } = useSelector(state => state.orderID)
  const { role } = useSelector(state => state.user)
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOrderItem(id));
  }, [])

  const acceptHandler = () => {
    dispatch(updateOrder({ id }))
  }
  return (
    <section className="profile">
      <div className="container">
        <div className="row profile__row">
          <div className="col-100 profile__col-100">
            <Link to="/userpage">На главную</Link>

            <h1 className="orderId__title">{title}</h1>
            <div className="orderId">
              <div className="orderId__block-img">
                <img src={`http://localhost:3001${clientAvatar}`} alt="" />
                <span className="orderId__name">Имя: {clientName}</span>
                <span className="orderId__name">Фамилия: {clientSurname}</span>
                <span className="orderId__name">Почта: {clientEmail}</span>
                <span className="orderId__name">Телефон: {clientPhone ? clientPhone : 'Информация не заполнена'}</span>
              </div>
              <div className="orderId__info">
                <span className="orderId__description">Дата: {date}</span>
                <span className="orderId__description">Статус заказа: {status}</span>
                <span className="orderId__description">Кол-во персон: {numOfPeople}</span>
                <span className="orderId__description">Адрес: {address}</span>
                <span className="orderId__description">Комментарии: {text}</span>
                <span className="orderId__description">Цена: {price}</span>
              </div>

            </div>

            <ChatClient />
            {role === 'cook' ? <Link to="/userpage"><button className="btn-secondary orderId__btn" onClick={() => acceptHandler(id)}>Принять</button></Link> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
