import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { signinClient } from '../../../redux/actions/clientAC';
import { signInCook } from '../../../redux/actions/cookAC';


const SignIn = () => {

  const [inputs, setInputs] = useState({ email: '', password: '' })
  const [role, setRole] = useState('client')

  let navigate = useNavigate();
  const dispatch = useDispatch();


  const inputHandler = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const loginUser = {
      email: inputs.email,
      password: inputs.password,
      role
    }
    // console.log(loginUser);
    setInputs({name:'', email:'', password:''})

    if(loginUser.role === 'client') {
      return dispatch(signinClient(loginUser, navigate))
    } else if(loginUser.role === 'cook') {
      return dispatch(signInCook(loginUser, navigate))
    }


    dispatch(signinClient(inputs))
  };

  return (

    <form onSubmit={submitHandler} className="signin">
      <div className="logo signin__logo">
        &
        <strong className="logo__text"><i>COME<br></br>COOK</i></strong>
      </div>
      <div className="signin__content">
        <h2>Вход</h2>
        <input onChange={inputHandler} name='email' value={inputs.email} type="email" className="signin__login" placeholder="Введите email" />
        <input onChange={inputHandler} name='password' value={inputs.password} type="password" className="signin__password" placeholder="Введите пароль" />

        <select onChange={(e) => setRole(e.target.value)} >

          <option value="client">Клиент</option>
          <option value="cook">Повар</option>

        </select>

        <button type="submit">войти</button>
      </div>
    </form>
  )
}

export default SignIn
