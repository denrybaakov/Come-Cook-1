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
        <PovarList />
      </div>

    </div>
  )
}

export default ClientSearch
