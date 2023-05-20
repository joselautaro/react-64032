import React, { useState, useEffect } from 'react'
import { pedirProductos } from '../../helpers/pedirProductos'
import './ProductList.css'



export const ProductList = () => {
    const [loading, setLoading] = useState(false)

    const [items, setItems] = useState([])

    useEffect(() => {
        setLoading(true)
        pedirProductos()
            .then((res) => {
                setItems(res)
            })
            .catch((error) => {
                console.log("Tiene un error", error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])


    return (
        <>

            {
                loading
                    ?
                    (
                        <p>Cargando...</p>
                    )
                    :
                    (
                        <div className='card'>
                            {items.map((item) => (
                                <div className='subcard'>
                                    <h4 key={item.id}>
                                        <img src={item.photo} alt={item.photo} />
                                        <p>{item.name}</p>
                                        <p>{item.description}</p>
                                        <button className='btn btn-success'>Comprar</button>
                                    </h4>
                                </div>
                            ))}
                        </div>
                    )
            }
        </>
    )
}
