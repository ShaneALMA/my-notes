import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './routes/Home'
import Login from './routes/Login'
import Signup from './routes/Signup'

import { UserContext } from './context/UserProvider'

const App = () => {
  
  const { user } = useContext(UserContext)
  
  if(user === false)
    return <p>Checking User...</p>
  
  return (
    <>
      <Navbar />
      <h1>
        APP
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
