import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { getСlient } from '../../../redux/actions/clientAC';
import { getPovar } from '../../../redux/actions/cookAC'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const SignUp = () => {

  const [inputs, setInputs] = useState({ name: '', email: '', password: '' })
  const [role, setRole] = useState('client')
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setRole(event.target.value)
  };
  const inputHandler = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newUser = {
      name: inputs.name,
      email: inputs.email,
      password: inputs.password,
      role
    }
    setInputs({ name: '', email: '', password: '' })

    if (newUser.role === 'client') {
      return dispatch(getСlient(newUser))
    } else if (newUser.role === 'cook') {
      return dispatch(getPovar(newUser))
    }

  }


  return (
    <form onSubmit={submitHandler} className="signin">
      <div className="logo signin__logo">
        <strong className="logo__text"><i>COME<br></br>& <br></br>COOK</i></strong>
      </div>
      <div className="signin__content">
        <h2>Регистрация</h2>
        <input type="text" onChange={inputHandler} name='name' value={inputs.name} className="signin__login" placeholder="Введите имя" />

        <input type="email" onChange={inputHandler} name='email' value={inputs.email} className="signin__login" placeholder="Введите email" />
        <input type="password" onChange={inputHandler} name='password' value={inputs.password} className="signin__password" placeholder="Введите пароль" />

        {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Выберите роль</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            label="Выберите роль"
            onChange={handleChange}
          >
            <MenuItem value="client">Клиент</MenuItem>
            <MenuItem value="cook">Повар</MenuItem>
          </Select>
        </FormControl> */}

        <select name="" id="" onChange={handleChange} className="select">
          <option value="client">Клиент</option>
          <option value="cook">Повар</option>
        </select>
        {/* <select onChange={(e) => setRole(e.target.value)} >

          <option value="client">Клиент</option>
          <option value="cook">Повар</option>

        </select> */}


        <button type="submit">Зарегистрироваться</button>

      </div>
    </form>
  )
}

export default SignUp
