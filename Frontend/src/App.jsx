import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router'
import WelcomePage from './Components/WelcomePage'
import RegisterPage from './Components/Auth/RegisterPage'
import LoginPage from './Components/Auth/LoginPage'

function App() {

  return (
    <Router>
      <Routes>
      <Route path='/' element={<WelcomePage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default App
