import { useState } from "react"
import PovarList from "../UserContent/PovarList"



const ClientSearch = () => {
  const [list, setList] = useState(false)

  const toggleList = () => {
    setList(true)
  }
  return (
    <div className="col-70 profile__col-70">

      <input type="text" className="input__search" placeholder="Поиск..." />

      <div className="povarCard">

        {/* {list ?  : (<div className="povarCard__main"><h3 className="povarCard__title">Пока список пуст</h3><button className="povarCard__btn" onClick={toggleList}>Показать всех</button></div>)} */}
        <PovarList />

      </div>
    </div>
  )
}

export default ClientSearch
