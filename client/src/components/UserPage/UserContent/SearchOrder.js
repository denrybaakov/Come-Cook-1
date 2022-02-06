import MapComponent from "../../MapComponent/MapComponent"
import OrderList from "../../Order/OrderList/OrderList"


const SearchOrder = () => {
  return (
    <div className="col-70 profile__col-70">
      <h2 className="profile__title">Поиск Заказов</h2>
      {/* <MapComponent /> */}
      <OrderList />
    </div>
  )
}

export default SearchOrder
