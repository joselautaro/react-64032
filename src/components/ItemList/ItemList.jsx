import React from 'react'
import { Counter } from '../Counter/Counter'

export const ItemList = ({productos=[]}) => {
  return (
    <div className='container'>
        <h3>Nuestros productos</h3>
        <hr />
        {/* {
            productos.map((item) => (
                <>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <img src={item.photo} alt="" />
                <Counter/>
                <button className='btn btn-success'>Comprar</button>
                </>
            ))
        } */}
        {
          productos.map((item) => (
            <div className="card">
              <div className="card-body">
                <h5 className='card-title'>{item.name}</h5>
                <p className='card-text'>{item.description}</p>
                <img src={item.photo} alt={item.photo} />
                <Counter/>
                <button className='btn btn-success m-2'>Agregar al carrito</button>
              </div>
            </div>
          ))
        }
    </div>
  )
}
