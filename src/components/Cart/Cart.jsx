import React from 'react'
import './cart.css'
import {BiCartDownload} from 'react-icons/bi'

export const Cart = () => {
  return (
    <>
    {/* <h1>No hay productos agregados</h1> */}
    <BiCartDownload className='cart'/>
    <span>0</span>
    </>
  )
}
