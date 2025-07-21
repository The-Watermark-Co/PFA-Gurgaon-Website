import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Volunteer from './pages/Volunteer'
import Donate from './pages/Donate'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/volunteer" element={<Volunteer />} />
      <Route path="/donate" element={<Donate />} />
    </Routes>
    </>
  )
}

export default App
