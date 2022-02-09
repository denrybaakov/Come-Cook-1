import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
import ClientIndex from '../UserPage/ClientIndex/ClientIndex';
import UserIndex from '../UserPage/UserIndex/UserIndex';

const AuthUser = ({ children }) => {
  const user = useSelector(state => state.user);
  let location = useLocation();
  if (!user?.id) {
    // return <Navigate to="/auth/login" state={{ from: location }} replace />;
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  if (user?.role === 'client') {
    return <ClientIndex />
  }

  if (user?.role === 'cook') {
    return <UserIndex />;
  }
}

export default AuthUser;
