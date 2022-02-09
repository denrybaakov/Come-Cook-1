import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getCurrentOrdersPovar, getFinishedOrdersPovar, getNewOrdersPovar } from "../../../redux/actions/ordersAction";

const Calendar = () => {

  const dispatch = useDispatch();
  const { id } = useSelector(state => state.user)

  const newOrders = useSelector(state => state.ordersNewPovar)
  const currentOrders = useSelector(state => state.ordersCurrentPovar)
  const finishedOrders = useSelector(state => state.ordersFinishedPovar)


  // console.log('temp in calendar ----->', finishedOrders);





  useEffect(() => {
    // dispatch(getNewOrdersPovar())
    // dispatch(getCurrentOrdersPovar(id))
    // dispatch(getFinishedOrdersPovar(id))
  }, []);







  return (
    <div className="col-70 profile__col-70">
      <h2 className="profile__title">Календарь </h2>
      здесь календарь
    </div>
  )
}

export default Calendar
