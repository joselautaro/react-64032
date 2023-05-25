import React, { useState } from 'react'
import {MdAddCircle} from 'react-icons/md'
import {IoMdRemoveCircleOutline} from 'react-icons/io'

export const Counter =  () =>{

   

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
            <h3>{counter}</h3>
            <button className='btn btn-info' style={{margin: '5px'}} onClick={handleAdd}><MdAddCircle/></button>
            <button className='btn btn-info' onClick={handleRemove}><IoMdRemoveCircleOutline/></button>
        </>
    )
}