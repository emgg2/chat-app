import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div>           
      <h1>This is the home page</h1>
      <Link to="/">HOME</Link>
      <Link to="chat">CHAT</Link>
      <Link to="/auth/login">LOGIN</Link>
      <Link to="/auth/register">REGISTER</Link>
    </div>
  )
}
