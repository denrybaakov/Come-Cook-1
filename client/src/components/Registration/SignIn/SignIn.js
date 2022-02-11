import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signinClient } from '../../../redux/actions/clientAC';
import { signInCook } from '../../../redux/actions/cookAC';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const SignIn = () => {

  const [inputs, setInputs] = useState({ email: '', password: '' })
  const [role, setRole] = useState('client')
  const [age, setAge] = useState('Выберите роль');
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleChange = (event) => {
    // setAge(event.target.value);
    setRole(event.target.value)
  };

  const submitHandler = (e) => {
    e.preventDefault()
    const loginUser = {
      email: inputs.email,
      password: inputs.password,
      role
    }
    setInputs({ name: '', email: '', password: '' })

    if (loginUser.role === 'client') {
      return dispatch(signinClient(loginUser))
    } else if (loginUser.role === 'cook') {
      return dispatch(signInCook(loginUser))
    }
    dispatch(signinClient(inputs))
  };

  return (

    <form onSubmit={submitHandler} className="signin">
      <div className="logo signin__logo signin__logo">
        <strong className="logo__text"><i>COME<br></br>& <br></br>COOK</i></strong>
      </div>
      <div className="signin__content">
        <h2>Вход в личный кабинет</h2>
        <input onChange={inputHandler} name='email' value={inputs.email} type="email" className="signin__login" placeholder="Введите email" />
        <input onChange={inputHandler} name='password' value={inputs.password} type="password" className="signin__password" placeholder="Введите пароль" />
        <select name="" id="" onChange={handleChange} className="select">
          <option value="client">Клиент</option>
          <option value="cook">Повар</option>
        </select>

        <button type="submit">войти</button>
      </div>
    </form>
  )
}

export default SignIn
