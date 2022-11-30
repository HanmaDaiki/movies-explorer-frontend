import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
  const element = props.loggedIn ? <Component {...props} /> : <Navigate to="/" />
    
  return (
    <>
      { element }
    </>
  );
}

export default ProtectedRoute;
