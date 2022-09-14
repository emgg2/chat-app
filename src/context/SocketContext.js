import React from 'react';
import { createContext, useContext, useEffect } from 'react';

import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from './chat/ChatContext';
import { useSocket } from '../hooks/useSocket'

import { types } from '../types/types';

export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    const { socket, online,  connectSocket, disconnectSocket } = useSocket('http://localhost:8080');
    const { auth } = useContext(AuthContext); 
    const { dispatch } = useContext(ChatContext);


    useEffect(() => {
      if( auth.logged ) {
          connectSocket();
      }     
    }, [ auth, connectSocket ])

    useEffect(() => {
        if( !auth.logged ) {
            disconnectSocket();
        }      
      }, [ auth, disconnectSocket ])
    
    //Listen changes connected users

    useEffect(() => {
        socket?.on('users-list', (users) => {
            dispatch({
                type: types.loadedUsers,
                payload: users

            })
        })
      }, [socket, dispatch])
      
    
    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}