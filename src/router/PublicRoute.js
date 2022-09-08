import React from 'react';
import {
    Navigate    
  } from 'react-router-dom';


export const PublicRoute = ({
    isLogged,
    redirectPath = '/',
    children
}) => {    
  
    if(isLogged) {
        return ( <Navigate to={redirectPath} replace /> );
    }
    return children;
}