import React from 'react'
import { Link } from 'react-router-dom'

function Default() {
  return (
    <>
        <Link to={'/register'}>register</Link>
        <Link to={'/LogIn'}>logIn</Link>
        <Link to={'/home'}>home</Link>
    </>
  )
}

export default Default