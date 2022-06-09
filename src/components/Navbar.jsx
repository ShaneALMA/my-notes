import { useContext } from 'react'
import { NavLink } from "react-router-dom";

import { UserContext } from '../context/UserProvider'

const Navbar = () => {  
  const { user, signoutUser } = useContext(UserContext)
  
  const handleLogout = async() => {
    try {
      await signoutUser()
      console.log('usuario desconectado')
    } catch (error) {
      console.log(error)
    }
  }
  
  return(
    <div>
      {
        user ?
        (
          <>
            <NavLink to="/">
              Inicio | 
            </NavLink>
            <button
              onClick={handleLogout}>
              logout
            </button>
          </>
        ) :
        (
          <>
            <NavLink to="/login">
              Login | 
            </NavLink>
            <NavLink to="/signup">
              Signup
            </NavLink>
          </>
        )
      }
    </div>
  );
}

export default Navbar;