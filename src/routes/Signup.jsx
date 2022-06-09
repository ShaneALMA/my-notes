import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const { signupUser } = useContext(UserContext)
  
  const navigate = useNavigate()
  
  const handleSubmit = async(e) => {
    e.preventDefault()
    
    try {
      await signupUser(email, password);
      console.log("Usuario creado");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <>
      <h1>
        Signup
      </h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="ingrese email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="ingrese contraseña" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">
          REGISTRAR
        </button>
      </form>
    </>
  )
}

export default Signup
