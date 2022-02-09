import MapComponent from "../../MapComponent/MapComponent"
import OrderForm from "../../Order/OrderForm/OrderForm"
import OrderList from "../../Order/OrderList/OrderList"


const SearchOrder = () => {
  return (
    <div className="col-70 profile__col-70">
      <h2 className="profile__title">Поиск Заказов</h2>
      {/* search */}
      <OrderList />
    </div>
  )
}

export default SearchOrder
