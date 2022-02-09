import OrderItem from "../../Order/OrderItem/OrderItem"

const ClientCompletedOrders = () => {
  return (
    <div className="">
      <h2 className="profile__title">Завершенные заказы</h2>
      <OrderItem
        key={"item.id"}
        id={"item.id"}
        index={"index"}
        date={"item.date"}
        address={"item.address"}
        title={"item.title"}
        text={"item.text"}
        numOfPeople={"item.numOfPeople"}
        price={"item.price"}
      />
      <OrderItem
        key={"item.id"}
        id={"item.id"}
        index={"index"}
        date={"item.date"}
        address={"item.address"}
        title={"item.title"}
        text={"item.text"}
        numOfPeople={"item.numOfPeople"}
        price={"item.price"}
      />
    </div>
  )
}

export default ClientCompletedOrders
