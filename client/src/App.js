import { Routes, Route } from 'react-router-dom'
import Main from './components/MainPage/Main';
import SignIn from './components/Registration/SignIn/SignIn'
import SignUp from './components/Registration/SignUp/SignUp';
import UserIndex from './components/UserPage/UserIndex/UserIndex'

function App() {
  return (

    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/auth/login' element={<SignIn />}></Route>
      <Route path='/auth/register' element={<SignUp />}></Route>
      <Route path='/profile' element={<UserIndex />}></Route>
    </Routes>
  );
}

export default App;
