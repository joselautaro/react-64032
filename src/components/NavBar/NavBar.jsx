import React from 'react'
import { Link } from 'react-router-dom'
import { Cart } from '../Cart/Cart'
import './nav.css'

export const NavBar = () => {
  return (
    <div className='menu'>
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/counter">Contador</Link>
        <Link className='link' to="/segundo">Segundo Componente</Link>
        <Link className='link' to="/form">Formulario</Link>
        <Link className='link' to="/cart"><Cart/></Link>
    </div>
  )
}
