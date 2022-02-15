import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import Main from './components/MainPage/Main';
import OrderPage from './components/Order/OrderPage/OrderPage';
import AuthUser from './components/ProtectedAuth/AuthUser';
import ProtectedAuth from './components/ProtectedAuth/ProtectedAuth';
import SignIn from './components/Registration/SignIn/SignIn'
import SignUp from './components/Registration/SignUp/SignUp';
import Tests from './components/Tests/Tests';
import ClientIndex from './components/UserPage/ClientIndex/ClientIndex';
import PovarPage from './components/UserPage/UserContent/PovarPage';
import UserIndex from './components/UserPage/UserIndex/UserIndex';
import { checkUser } from './redux/actions/userAC';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUser())
  })

  return (
    <>
      <Routes>
        <Route path='/' element={
          <Main />
        } />

        <Route path='/userpage' element={
          <AuthUser />
        } />

        <Route path='/client' element={
          <ProtectedAuth>
            <ClientIndex />
          </ProtectedAuth>
        } />

        <Route path='/auth/login' element={
          <ProtectedAuth>
            <SignIn />
          </ProtectedAuth>
        } />


        <Route path='/auth/register' element={
          <ProtectedAuth>
            <SignUp />
          </ProtectedAuth>

        } />

        <Route path='/orders/:id' element={

          <OrderPage />
        } />


        <Route path='/povars/:id' element={
          <PovarPage />
        } />

        <Route path='/test' element={<Tests />}></Route>
        <Route path='/chat' element={<Tests />}></Route>

      </Routes>
    </>
  );
}

export default App;
