import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Homepage/Home'
import VolunteerPage from './components/Volunteer/VolunteerPage'
import Voluntario from './components/Homepage/Voluntario'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='Inicio' element={<Home />} />
            <Route path='Convocatoria' element={<Voluntario />} />
            <Route path='Voluntario' element={<Voluntario  />} />
            <Route path='Login' element={<VolunteerPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
