import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./poke.css"

export const PokeApi = () => {

    const [pokemon, setPokemon] = useState("")

    const [id, setId] = useState(1)

    const [ busqueda, setBusqueda ] = useState("")

    useEffect(() =>{
        setPokemon("")
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) =>{
                const data = response.data;
                setPokemon({
                    numero: data.id,
                    nombre: data.name,
                    img: data.sprites.front_default
                })
            })
            .catch((error) =>{
                console.log(error)
            })
    }, [id])



    const handleAnterior = () =>{
        id > 1 && setId(id -1)
    }

    const handleSiguiente = () =>{
        setId(id +1)
    }

    const handleInputChange = (e) =>{
        setBusqueda(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(busqueda.length > 2){
            setPokemon("")
            axios.get(`https://pokeapi.co/api/v2/pokemon/${busqueda}`)
            .then((response) =>{
                const data = response.data;
                setPokemon({
                    nombre: data.name,
                    img: data.sprites.front_default,
                })
                setId(data.id)
            })
            .catch((error) =>{
                console.log(error)
            })
        }

    }


    return (
        <div className='container'>
            
            <h2>Mis pokemones</h2>
            
            {
                !pokemon ?(
                    <h3>Cargando...</h3>
                ):(
                    <>
                    <h3>{pokemon.numero}</h3>
                    <h3>{pokemon.nombre}</h3>
                    <img src={pokemon.img} alt="" />
                    </>
                )
            }
            <hr />
            <div className='button'>
                <button className='btn btn-primary' onClick={handleAnterior}>
                    Anterior
                </button>
                <button className='btn btn-success' onClick={handleSiguiente}>
                    Siguiente
                </button>

            </div>
            <div>
                <form className='form' onSubmit={handleSubmit}>
                    <input type="text"
                        className='form-control'
                        autofocus
                        onChange={handleInputChange}
                    />
                </form>
            </div>
        </div>
    )
}
