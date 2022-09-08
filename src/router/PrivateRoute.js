import React from 'react';
import {
    Navigate    
  } from 'react-router-dom';


export const PrivateRoute = ({
    isLogged,
    redirectPath = '/auth/login',
    children
}) => {    
  
    if(!isLogged) {
        return ( <Navigate to={redirectPath} replace /> );
    }
    return children;
  
}
