import { useState } from 'react'
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import Home from './components/Homepage/Home'
import Voluntario from './components/Homepage/Voluntario'
import Menu from './components/navigation/Menu'
import Convocatoria from './components/Homepage/Convocatoria'
import Login from './components/Homepage/login'
import Registro from './components/Homepage/Registro'
import IngresarEvento from './components/Homepage/ingresarEvento'
import CrearConvo from './components/Homepage/CrearConvo'
import Vermas from './components/Homepage/vermas'



//const Home=() : Element => <Home/>

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Menu/>
      <Routes>
      <Route path="/" element={<Home />} exact /> 
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Convocatoria' element={<Convocatoria/>}/>
        <Route path='/Voluntario' element={<Voluntario/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Registro' element={<Registro/>}/>
        <Route path='/IngresarEvento' element={<IngresarEvento/>}/>
        <Route path='CrearConvo' element={<CrearConvo/>}/>
        <Route path='Vermas' element={<Vermas/>}/>
      </Routes>
      
    </div>
  )
}

export default App
