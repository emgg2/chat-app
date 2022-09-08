import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'

export const HomePage = () => {

  const { auth, logout  } = useContext(AuthContext);

  if ( auth.logged ) {
    return (
      <div>           
        <h1>This is the home page</h1>  
        <Link to="/">HOME</Link>
        <Link to="chat">CHAT</Link> 
        <button
          onClick={ logout } 
        >
          CLOSE SESSION
        </button>         
      </div>
    )  
  } else 
  {
    return (
      <div>           
        <h1>Login is required</h1>        
        <Link to="/auth/login">LOGIN</Link>
        <Link to="/auth/register">REGISTER</Link>
      </div>
    )
  }
  
}
