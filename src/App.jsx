import './App.css'
import { Counter } from './components/Counter/Counter'
// import { MiSegundoComponente } from './components/MiSegundoComponente/MiSegundoComponente'

function App() {


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
  

  return (
    <>
      
        <h1>Mi primer componente</h1>

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
        <Counter/>
      
    </>
  )
}

export default App
