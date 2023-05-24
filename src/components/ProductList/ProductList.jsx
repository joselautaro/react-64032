import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pedirProductos } from '../../helpers/pedirProductos'
import './ProductList.css'
import { ItemList } from '../ItemList/ItemList'



export const ProductList = () => {

    const [loading, setLoading] = useState(false)

    const [items, setItems] = useState([])

    // Establecemos el parametros que vamos a utilizar

    const {categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        pedirProductos()
            .then((res) => {
                if(categoryId){
                    setItems( res.filter(prod => prod.category === categoryId) )
                }else{
                    setItems(res)
                }
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
                ?<div>Cargando...</div>
                :<ItemList productos={items}/>
            }
            </>
)}

                    // (
                    //     <div className='card'>
                    //         {items.map((item) => (
                    //             <div className='subcard'>
                    //                 <h4 key={item.id}>
                    //                     <img src={item.photo} alt={item.photo} />
                    //                     <p>{item.name}</p>
                    //                     <p>{item.description}</p>
                    //                     <button className='btn btn-success'>Comprar</button>
                    //                 </h4>
                    //             </div>
                    //         ))}
                    //     </div>
                    // )