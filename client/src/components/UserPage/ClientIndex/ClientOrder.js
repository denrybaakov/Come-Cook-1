import MapComponent from "../../MapComponent/MapComponent"
import OrderList from "../../Order/OrderList/OrderList"

const ClientOrder = () => {
  return (
    <div className="col-70 profile__col-70">
      <h2 className="profile__title">Заказы</h2>
      <p>Здесь будут все заказы</p>
      <OrderList />
    </div>
  )
}

export default ClientOrder
