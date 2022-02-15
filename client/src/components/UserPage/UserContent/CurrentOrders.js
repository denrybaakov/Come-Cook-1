import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentOrdersPovar } from "../../../redux/actions/ordersAction";
import OrderItemPovar from "../../Order/OrderItem/OrderItemPovar"

const CurrentOrders = () => {
  const allOrders = useSelector(state => state.ordersCurrentPovar);
  const { id } = useSelector(state => state.user)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentOrdersPovar(id))
  }, [])

  return (
    <div className="profile__list">
      <h2 className="profile__title">Текущие заказы</h2>
      {
        allOrders.map((item, index) => <OrderItemPovar
          key={item.id}
          id={item.id}
          index={index}
          date={item.date}
          address={item.address}
          title={item.title}
          text={item.text}
          numOfPeople={item.numOfPeople}
          price={item.price}
          status={item.status}
          nameClient={item.Client.name}
          emailClient={item.Client.email}
          avatar={item.Client.avatar}
        />)
      }
    </div>
  )
}

export default CurrentOrders
