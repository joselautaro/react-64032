import React from 'react'

export const MiSegundoComponente = ({persona, saludo}) =>{

    const {name, age} = persona;

    return(

        <>
        {/* Ejemplos sin desestructuracion */}
        <h1>Soy el segundo componente</h1>
        {/* <h2> {props.bienvenida} </h2> */}
        {/* <h2>{props.nombreUno}</h2> */}

        {/* <div>Mi nombre es: {props.nombreDos}</div>
        <div>Tengo: {props.edad} años</div>
        <div>Y actualmente vivo en {props.pais}</div> */}

        {/* Ejemplo con desestructuracion N°1*/}
        {/* <h2>Hola, {nombreUno}</h2> */}

        {/* Ejemplo con desestructuracion N°2*/}
        {/* <h2>Bienvenida, {nombreDos}</h2>
        <h2>Tu edad es, {edad}</h2>
        <h2>Proveniente de {pais}</h2> */}

        {/* Ejemplo con desestructuracion N°3*/}
        <div>
            <p>{saludo}, {name}</p>
            <p>Tu tienes {age} años</p>
        </div>
        </>

    )
}