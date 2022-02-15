import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFinishedOrdersPovar } from "../../../redux/actions/ordersAction";
import OrderItemPovar from "../../Order/OrderItem/OrderItemPovar"

const CompletedOrders = () => {
  const allOrders = useSelector(state => state.ordersFinishedPovar);
  const { id } = useSelector(state => state.user)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFinishedOrdersPovar(id))
  }, [])
  
  return (
    <div className="">
      <h2 className="profile__title">Завершенные заказы</h2>
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

export default CompletedOrders
