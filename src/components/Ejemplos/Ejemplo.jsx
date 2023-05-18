// import { MiSegundoComponente } from './components/MiSegundoComponente/MiSegundoComponente'

// Ejemplo 2
  // const nombreUno = "Lautaro"
  


  // Ejemplo 3
  // const nombreDos = "Andrea"
  // const edad = 30
  // const pais = "Argentina"

  // const propsObjeto = {
  //   nombreDos,
  //   edad,
  //   pais
  // }

  // Ejemplo N°3 con desestructuración

  // const persona = {
  //   name: 'Goku',
  //   age: 30
  // }

  // const saludo = 'Hola'
  

   {/* Ejemplo 1 */}
        {/* <MiSegundoComponente bienvenida='Hola Mundo'/> */}



        {/* Ejemplo 2 */}
        {/* <MiSegundoComponente nombreUno={nombreUno}/> */}

        {/* Ejmplo 3 */}
        {/* <MiSegundoComponente {...propsObjeto}/> */}


        {/* Ejemplos con destructuring o desestructuracion de datos */}
        {/* <MiSegundoComponente nombreUno={nombreUno}/> */}

        {/* Ejemplo destruc N°2 */}
        {/* <MiSegundoComponente {...propsObjeto}/> */}

        {/* Ejemplo destruc N°3 */}
        {/* <MiSegundoComponente persona={persona} saludo={saludo}/> */}

         // Ejemplo 1

    // const botonPresionado = () =>{
    //     console.log("Estas son las veces que el botón ha sido presionado")
    // }

    // Ejemplo 2
    // hora en ese caso, toma el estado actual y lo renderiza y modifica en pantalla
    // setHora toma el estado y se lo comunica a hora
    // const [hora, setHora] = useState("")

    // const mostrarHora = () =>{
    //     const date = new Date()
    //     const horaLocal = date.toLocaleTimeString()
    //     setHora(horaLocal)
    // }

    // // Ejemplo 3

    // const [isWhite, setIsWhite] = useState(true)
    // const [isBlack, setIsBlack] = useState(false)

    // const handleWhite = () =>{
    //     setIsWhite(true)
    //     setIsBlack(false)
    // }

    // const handleBlack = () =>{
    //     setIsBlack(true)
    //     setIsWhite(false)
    // }

    // <h3>Mis estados</h3>
    // <hr />

    // <button onClick={botonPresionado}>Apretame y mirá la consola</button>

    // <hr />
    // <p>{hora}</p>
    // <button onClick={mostrarHora}>Mostrar hora</button>

    // <hr />

    // <div style={{
    //     backgroundColor: isWhite
    //     ? 'white': 'black', 
    //     color: isBlack 
    //     ?  'white': 'black'
        
    // }}>
    //     <h2>Color Cambiante</h2>
    //     <button onClick={handleWhite}>Blanco</button>
    //     <button onClick={handleBlack}>Negro</button>
    // </div>
    // <hr />
