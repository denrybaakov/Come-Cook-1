import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import {  useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editPovar} from "../../../redux/actions/cookAC";
import { getCuisines } from "../../../redux/actions/cuisinesAction";
import { checkUser } from "../../../redux/actions/userAC";
import CuisineItem from "../../Cuisines/CuisineItem";

const Settings = () => {
  const povar = useSelector(state => state.user)
  const { id } = useSelector(state => state.user)

  const [input, setInput] = useState({
    name: povar.name,
    surname: povar.surname,
    email: povar.email,
    phone: povar.phone,
    about: povar.about,
    experience: povar.experience,
    servicePrice: povar.servicePrice
  })

  const cuisines = useSelector(state => state.cuisines);
  console.log('cuisines --->', cuisines);

  useEffect(() => {
    dispatch(getCuisines())
  }, [])

  const dispatch = useDispatch();


  const inputHandler = (e) => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(editPovar({ id, ...input }))
    dispatch(checkUser())
  }

  return (

    <div className="col-70 profile__col-70">
      <form onSubmit={submitHandler}>
        <h2 className="profile__title">Настройки</h2>
        <div className="setting">
          <input type="text" onChange={inputHandler} className="input-profile setting__input" name="name" value={input.name} placeholder="Имя" />
          <input type="text" onChange={inputHandler} className="input-profile setting__input" name="surname" value={input.surname} placeholder="Фамилия" />
          <input type="text" onChange={inputHandler} className="input-profile setting__input" name="email" value={input.email} placeholder="Почта" />
          <input type="text" onChange={inputHandler} className="input-profile setting__input" name="phone" value={input.phone} placeholder="Телефон" />
          <input type="text" onChange={inputHandler} className="input-profile setting__input" name="experience" value={input.experience} placeholder="Опыт" />
          <input type="text" onChange={inputHandler} className="input-profile setting__input" name="servicePrice" value={input.servicePrice} placeholder="Средняя цена услуги" />


          <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Выберите кухню</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            // multiple
            label="Выберите кухню"
            onChange={inputHandler}
                      >
            {cuisines.map((cuisine) => {
              return (
                <MenuItem value={cuisine.id}>{cuisine.name}</MenuItem>
              )
            })}
          </Select>
        </FormControl>

          <textarea type="text" className="input-profile setting__input" name="about" value={input.about} placeholder="Обо мне" />

          <button className="btn-secondary setting__btn">Применить</button>
        </div>
      </form>
    </div>
  )
}

export default Settings
