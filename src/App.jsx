import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
// Components
import { Navbar } from './Navbar.jsx'
import { Footer } from './Footer.jsx'
// Pages
import HomePage from './pages/home/Page.jsx'

function App() {

  return (
    <div className='app'>
      <Navbar />
      
      <Routes>
        <Route path='*' element={<HomePage />} /> 
        <Route path='/' element={<HomePage />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
