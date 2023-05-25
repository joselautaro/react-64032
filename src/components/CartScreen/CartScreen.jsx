import React from 'react'
import {BsTrash3} from 'react-icons/bs'
import { Link } from 'react-router-dom'


export const CartScreen = () => {
  return (
    <div className='container my-5'>

    <h3>Resumen de compra</h3>
    <hr />

    <div>
        <p>Producto: </p>
        <p>Precio: </p>
        <p>Cantidad: </p>
    </div>
    <button className="btn btn-danger m-2">
    <BsTrash3 />
    </button>
    <hr />
    <strong>Precio total: </strong>
    <hr />
    <button className='btn btn-danger m-2'>Vaciar carrito</button>
    <Link className="btn btn-success m-2">Terminar compra</Link>
    </div>
  )
}
