import { useState } from 'react'
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import Home from './components/Homepage/Home'
import Voluntario from './components/Homepage/Voluntario'
import Menu from './components/navigation/Menu'
import Convocatoria from './components/Homepage/Convocatoria'
import Login from './components/Homepage/login'
import Registro from './components/Homepage/Registro'

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
      </Routes>
      
    </div>
  )
}

export default App
