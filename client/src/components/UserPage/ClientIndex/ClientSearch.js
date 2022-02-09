import PovarList from "../UserContent/PovarList"


const ClientSearch = () => {
 

  return (
    <div className="col-70 profile__col-70">

      <h2 className="profile__title">Поиск</h2>
      <p>Здесь будут все заказы</p>
      <input type="text" placeholder="search" />
      <PovarList />

    </div>
  )
}

export default ClientSearch
