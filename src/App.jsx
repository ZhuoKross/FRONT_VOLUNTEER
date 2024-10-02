import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import Home from './components/Homepage/Home'
import Menu from './components/navigation/Menu'
import Login from './components/Homepage/login'
import Registro from './components/Homepage/Registro'
import IngresarEvento from './components/Homepage/ingresarEvento'
import CrearConvo from './components/Homepage/CrearConvo'
import SkeletonConvocatoria from './components/Homepage/SkeletonConvocatoria';
import Convocatoria from './components/Homepage/Convocatoria'




function App() {
  return (
    <div className='App h-screen'>
    <Menu/>
    <Routes>
    <Route path="/" element={<Home />} exact /> 
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Convocatoria' element={<Convocatoria/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Registro' element={<Registro/>}/>
      <Route path='/IngresarEvento' element={<IngresarEvento/>}/>
      <Route path='CrearConvo' element={<CrearConvo/>}/>
      <Route path='/verConvocatoria' element={<SkeletonConvocatoria/>}/>
    </Routes>
    
  </div>
  );
}

export default App;
