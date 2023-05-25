import { CartScreen } from './components/CartScreen/CartScreen'
import { Counter } from './components/Counter/Counter'
import { Form } from './components/Form/Form'
import { MiSegundoComponente } from './components/MiSegundoComponente/MiSegundoComponente'
import { NavBar } from './components/NavBar/NavBar'
import { ProductList } from './components/ProductList/ProductList'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


function App() {

  return (
    <>
      <Router>
      <NavBar/>
        <Routes>
          {/* <Route path='/menu' element={<NavBar/>}/> */}
          <Route path='/' element={<ProductList/>}/>
          <Route path='/productos/:categoryId' element={<ProductList/>}/>
          <Route path='/counter' element={<Counter/>}/>
          <Route path='/segundo' element={<MiSegundoComponente/>}/>
          <Route path='/cart' element={<CartScreen/>}/>
          <Route path='/form' element={<Form/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
