import OrderItemPovar from "../../Order/OrderItem/OrderItemPovar"

const CurrentOrders = () => {
  return (
    <div className="profile__list">
      <h2 className="profile__title">Текущие заказы</h2>
      <OrderItemPovar
        key={'key1'}
        id={'id'}
        index={'index'}
        date={'20.20.2022'}
        address={'item.address'}
        title={'item.title'}
        text={'item.text'}
        numOfPeople={'item.numOfPeople'}
        price={'item.price'}
        status={'item.status'}
        nameClient={'item.Client.name'}
        emailClient={'item.Client.email'}
        avatar={'item.avatar'}
      />
    </div>
  )
}

export default CurrentOrders
