import React, { useContext, useEffect } from 'react';
import {
    Routes, 
    Route,
    
  } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { ChatPage } from '../pages/ChatPage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage'; 

import { AuthContext } from '../auth/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';



export const AppRouter = () => {


  const {auth, checkToken } = useContext(AuthContext);

  useEffect( () =>{
    checkToken();
  }, [checkToken])

  if (auth.checking) {
    return <h1>Espere un momento</h1>
  }

  return (
        <div>
            <Routes>               
                <Route index element={ <HomePage /> } />                  
                <Route path='auth'>
                  <Route index path="login" element={ 
                      <PublicRoute isLogged={ auth.logged } >
                        <LoginPage /> 
                      </PublicRoute>                      
                    }  />                  
                  <Route path="login" element={ 
                      <PublicRoute isLogged={ auth.logged }>
                        <LoginPage />
                        </PublicRoute>
                      } />
                  <Route path="register" element={ 
                      <PublicRoute isLogged={ auth.logged }>
                        <RegisterPage />
                      </PublicRoute>
                    } />
                  <Route path="*" element={
                      <PublicRoute isLogged={ auth.logged }>
                        <LoginPage />
                      </PublicRoute>
                    } />                         

                </Route>  
                <Route exact path='chat' element={
                      <PrivateRoute isLogged={ auth.logged } >
                          <ChatPage /> 
                      </PrivateRoute>                   
                   } />  
                <Route path="*" element={
                      <PrivateRoute isLogged={ auth.logged } >
                          <HomePage />
                      </PrivateRoute>
                  } />                                  
            </Routes>
        </div>
  )
}
