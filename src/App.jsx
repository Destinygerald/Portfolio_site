import './App.css'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
// Components
import { Navbar } from './Navbar.jsx'
import { Footer } from './Footer.jsx'
// Pages
import HomePage from './pages/home/Page.jsx'
import { useEffect } from 'react'

function App() {

  const { state } = useLocation();
  const navigate = useNavigate()
  const { targetId } = state || {};

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView();
    }
  }, [targetId]);

  useEffect(() => {
    navigate("/", { state: { targetId: 'page-top' } });

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView();
    }
  }, [])

  return (
    <div className='app'>
      <Navbar />
      
      <Routes>
        <Route path='*' element={<HomePage />} /> 
        <Route path='/' element={<HomePage />} />
        <Route path='/fraij' Component={() => {
            window.location.href = 'https://weather-app-zwq8.onrender.com';
           return null;
          }} 
        />

        <Route path='/hutt' Component={() => {
            window.location.href = 'https://hutt.vercel.app';
           return null;
          }} 
        />

        <Route path='/grevt' Component={() => {
            window.location.href = 'https://grevt.onrender.com';
           return null;
          }} 
        />

        <Route path='/jetlog' Component={() => {
            window.location.href = 'https://jetlog.vercel.app';
           return null;
          }} 
        />

      </Routes>

      <Footer />

    </div>
  )
}

export default App
