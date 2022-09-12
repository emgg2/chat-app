import React, { createContext, useCallback, useState } from "react";
import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";

export const AuthContext = createContext();

const initialState = {
    uid: null, 
    checking: true, 
    logged: false, 
    name: null, 
    email: null
};


export const AuthProvider = ({ children }) => {
    const [ auth, setAuth ] = useState(initialState); 

    const login = async (email, password) => {

        const resp = await fetchWithoutToken('login', { email, password }, 'POST');

        if( resp.ok ) {
            localStorage.setItem('token', resp.token);
            const { user } = resp;
            setAuth({
                uid: user.uid, 
                checking: false, 
                logged: true, 
                name: user.name, 
                email: user.email
            });
           
        }
        return resp.ok;
    }

    const register = async (name, email, password) => {
        
        const resp = await fetchWithoutToken('login/new', {email, password, name}, 'POST');
        if( resp.ok ) {
            localStorage.setItem('token', resp.token);
            const { user } = resp;
            setAuth({
                uid: user.uid, 
                checking: false, 
                logged: true, 
                name: user.name, 
                email: user.email
            });
            
        }
        return resp;
        
    }

    const checkToken = useCallback( async () => {

        const token =  localStorage.getItem('token');
        //token doesnt exist
        if(!token) {
             setAuth({
                checking: false, 
                logged: false, 
            });
            return false;
        }

        const resp = await fetchWithToken('login/renewToken');
        if( resp.ok ) {
            localStorage.setItem('token', resp.token);
            const { user } = resp;
            setAuth({
                uid: user.uid, 
                checking: false, 
                logged: true, 
                name: user.name, 
                email: user.email
            });
            return true;
            
        } else {
            setAuth ({
                checking: false, 
                logged: false, 
            });
            return false;
        }

    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        setAuth({           
            checking: false, 
            logged: false           
        });

    }
  return (
    <AuthContext.Provider value={{
        auth,
        login,
        register, 
        checkToken, 
        logout
    }}>
        { children }
    </AuthContext.Provider>
  )
}
