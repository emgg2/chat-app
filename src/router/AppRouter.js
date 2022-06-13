import React from 'react';
import {
    Routes, 
    Route,
    
  } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { ChatPage } from '../pages/ChatPage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
//import { AuthRouter } from './AuthRouter';


export const AppRouter = () => {
  return (
        <div>
            <Routes>               
                <Route index element={ <HomePage /> } />  
                <Route path='auth'>
                  <Route index element={ <LoginPage />} />
                  <Route path="login" element={ <LoginPage />} />
                  <Route path="register" element={ <RegisterPage />} />
                  <Route path="*" element={<LoginPage />} />                              
                </Route>  
                <Route exact path='chat' element={ <ChatPage /> } />  
                <Route path="*" element={<HomePage />} />                                  
            </Routes>
        </div>
  )
}
