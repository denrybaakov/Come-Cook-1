import { Routes, Route } from 'react-router-dom'
import Main from './components/MainPage/Main';
import SignIn from './components/Registration/SignIn/SignIn'
import SignUp from './components/Registration/SignUp/SignUp';
import UserIndex from './components/UserPage/UserIndex/UserIndex'
import ClientIndex from './components/UserPage/ClientIndex/ClientIndex';

function App() {
  return (

    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/auth/login' element={<SignIn />}></Route>
      <Route path='/auth/register' element={<SignUp />}></Route>
      <Route path='/povar' element={<UserIndex />}></Route>
      <Route path='/client' element={<ClientIndex />}></Route>
    </Routes>
  );
}

export default App;
