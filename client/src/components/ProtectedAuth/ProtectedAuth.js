import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';

const ProtectedAuth = ({ children }) => {
  const user = useSelector(state => state.user);
  let location = useLocation();
  if (user?.id) {
    return <Navigate to="/userpage" state={{ from: location }} replace />;
  }
  return children;
}

export default ProtectedAuth;
