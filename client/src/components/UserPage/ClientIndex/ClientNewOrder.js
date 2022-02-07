import OrderForm from "../../Order/OrderForm/OrderForm"



const ClientNewOrder = () => {
  return (
    <div className="col-70 profile__col-70">
      <h2 className="profile__title">Новый заказ и поменять</h2>

      {/* <OrderList /> */}
      <OrderForm />
    </div>
  )
}

export default ClientNewOrder
