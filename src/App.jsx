import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Homepage/Home'
import VolunteerPage from './components/Volunteer/VolunteerPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='Volunteering' element={<VolunteerPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
