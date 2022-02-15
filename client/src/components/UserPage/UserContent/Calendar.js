import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import {  getNewOrdersPovar } from "../../../redux/actions/ordersAction";

const Calendar = () => {

  const dispatch = useDispatch();
  const { id } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(getNewOrdersPovar())
  }, []);

  return (
    <div className="col-70 profile__col-70">
      <h2 className="profile__title">Календарь </h2>
      здесь календарь
    </div>
  )
}

export default Calendar
