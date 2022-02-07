import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
import Client  from '../UserPage/Client/Client'
import Povar from '../UserPage/Povar/Povar'

const AuthUser = ({ children }) => {
    const user = useSelector( state => state.user);
    let location = useLocation();
    console.log(user);
    
    if(!user?.id){
       return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }
    if (user?.role === 'client') {
      return <Client/>
    }

    if (user?.role === 'cook') {
      return <Povar/>;
    }
}

export default AuthUser;
