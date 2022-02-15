import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFinishedOrdersClient } from "../../../redux/actions/ordersAction";
import OrderItem from "../../Order/OrderItem/OrderItem"

const ClientCompletedOrders = () => {
  const allOrders = useSelector(state => state.ordersFinishedClient);
  const {id} = useSelector(state => state.user)
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFinishedOrdersClient(id))
  }, [])

  return (
    <div className="">
      <h2 className="profile__title">Завершенные заказы</h2>
      {
        allOrders.map((item, index) => <OrderItem
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
        />)
      }
    </div>
  )
}

export default ClientCompletedOrders
