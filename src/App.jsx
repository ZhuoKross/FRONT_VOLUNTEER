import {  Routes, Route} from 'react-router-dom'
import Home from './components/Homepage/Home'
import Login from './components/Homepage/login'
import Registro from './components/Homepage/Registro'
import IngresarEvento from './components/Homepage/IngresarEvento';
import CrearConvo from './components/Homepage/CrearConvo';
import SkeletonConvocatoria from './components/Homepage/SkeletonConvocatoria';
import Convocatoria from './components/Homepage/Convocatoria'
import UserProfile from './components/User/UserProfile'
import Layout from './components/Layout/Layout'



function App() {
  return (
    <div className='App h-screen'>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/Convocatoria' element={<Convocatoria />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Registro' element={<Registro />} /> 
          <Route path='/verConvocatoria' element={<SkeletonConvocatoria />} />
        </Route>
        
        <Route path='/Profile/*' element={<UserProfile />}>
          <Route path='IngresarEvento' element={<IngresarEvento />} />
          <Route path='CrearConvocatoria' element={<CrearConvo />} />
        </Route>
          
        
      </Routes>

    </div>
  );
}

export default App;
