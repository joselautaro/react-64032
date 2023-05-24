import React from 'react'

export const ItemList = ({productos=[]}) => {
  return (
    <div className='container'>
        <h3>Nuestros productos</h3>
        <hr />
        {
            productos.map((item) => (
                <>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <img src={item.photo} alt="" />
                <button className='btn btn-success'>Comprar</button>
                </>
            ))
        }
    </div>
  )
}
