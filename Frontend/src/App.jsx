import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import WelcomePage from './Components/WelcomePage'
import RegisterPage from './Components/Auth/RegisterPage'
import LoginPage from './Components/Auth/LoginPage'
import DashBoard from './Components/DashBoard'

function App() {

  return (
    <Router>
      <Routes>
      <Route path='/' element={<WelcomePage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/dashboard' element={<DashBoard />} />
      </Routes>
    </Router>
  )
}

export default App
