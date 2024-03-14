import Afroditi from './calendars/afroditi'
import { Routes, Route } from 'react-router-dom'
import Chris from './calendars/chris'
import Home from './calendars/home'
import Login from './authenticator/login'
import { AuthMiddleware } from './authenticator/authMiddleware'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          index
          path="/home"
          element={
            <AuthMiddleware>
              <Home />
            </AuthMiddleware>
          }
        />
        <Route
          path="/afroditi"
          element={
            <AuthMiddleware>
              <Afroditi />
            </AuthMiddleware>
          }
        />
        <Route
          path="/chris"
          element={
            <AuthMiddleware>
              <Chris />
            </AuthMiddleware>
          }
        />
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
