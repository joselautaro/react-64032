import React, { useState } from 'react'
import {MdAddCircle} from 'react-icons/md'
import {IoMdRemoveCircleOutline} from 'react-icons/io'

export const Counter =  () =>{

    // Ejemplo 1

    const botonPresionado = () =>{
        console.log("Estas son las veces que el botón ha sido presionado")
    }

    // Ejemplo 2
    // hora en ese caso, toma el estado actual y lo renderiza y modifica en pantalla
    // setHora toma el estado y se lo comunica a hora
    const [hora, setHora] = useState("")

    const mostrarHora = () =>{
        const date = new Date()
        const horaLocal = date.toLocaleTimeString()
        setHora(horaLocal)
    }

    // Ejemplo 3

    const [isWhite, setIsWhite] = useState(true)
    const [isBlack, setIsBlack] = useState(false)

    const handleWhite = () =>{
        setIsWhite(true)
        setIsBlack(false)
    }

    const handleBlack = () =>{
        setIsBlack(true)
        setIsWhite(false)
    }

    // Counter

    const [counter, setCounter] = useState(0)

    const handleAdd = () =>{
        setCounter(counter +1)
    }
    const handleRemove = () =>{
        if(counter > 0){
            setCounter(counter-1)
        }
    }

    return(
        <>
            <h3>Mis estados</h3>
            <hr />

            <button onClick={botonPresionado}>Apretame y mirá la consola</button>

            <hr />
            <p>{hora}</p>
            <button onClick={mostrarHora}>Mostrar hora</button>

            <hr />

            <div style={{
                backgroundColor: isWhite
                ? 'white': 'black', 
                color: isBlack 
                ?  'white': 'black'
                
            }}>
                <h2>Color Cambiante</h2>
                <button onClick={handleWhite}>Blanco</button>
                <button onClick={handleBlack}>Negro</button>
            </div>
            <hr />

            <h3>{counter}</h3>
            <button style={{margin: '5px'}} onClick={handleAdd}><MdAddCircle/></button>
            <button onClick={handleRemove}><IoMdRemoveCircleOutline/></button>
        </>
    )
}