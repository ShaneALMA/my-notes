import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()
  
  const handleSubmit = e => {
    e.preventDefault()
    console.log('submitting...')
    setUser(true)
    navigate('/')
  }
  
  return (
    <>
      <h1>
        Login
      </h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="ingrese email" />
        <input type="password" placeholder="ingrese contraseña" />
        <button type="submit">
          INGRESAR
        </button>
      </form>
    </>
  )
}

export default Login
