import Afroditi from './calendars/afroditi'
import { Routes, Route, Navigate } from 'react-router-dom'
import Chris from './calendars/chris'
import Home from './calendars/home'
import Login from './authenticator/login'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('logged_user') !== null)

  useEffect(() => {
    localStorage.setItem('logged_user', JSON.stringify(isLoggedIn))
  }, [isLoggedIn])

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route index path="/home" element={isLoggedIn ? <Home /> : <Navigate to='/' />} />
        <Route path="/afroditi" element={isLoggedIn ? <Afroditi /> : <Navigate to='/' />} />
        <Route path="/chris" element={isLoggedIn ? <Chris /> : <Navigate to='/' />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
