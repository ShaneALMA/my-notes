import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'

const Signup = () => {
  
  const { signupUser } = useContext(UserContext)
  const navigate = useNavigate()
  const { register, handleSubmit, formState: {errors}, getValues, setError } = useForm({
    defaultValues: {
      email: 'shane@test.com'
    }
  })
  const onSubmit = async(data) => {
    try {
      await signupUser(data.email, data.password);
      console.log("Usuario creado");
      navigate("/");
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('email', {
            message: 'usuario ya registrado'
          })
          break;
        default:
          console.log('ocurrió un error en el servidor')
      }
    }
  }
  
  return (
    <>
      <h1>
        Signup
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="ingrese email" {...register('email',{
          required: {
            value: true,
            message: 'campo obligatorio'
          },
          pattern: {
            value: /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,15}/,
            message: 'formato email incorrecto'
          }
        })} />
        {
          errors.email && <p>{errors.email.message}</p>
        }
        <input type="password" placeholder="ingrese contraseña" {...register('password',{
            minLength: {
              value: 6,
              message: 'mínimo 6 caracteres'
            },
            validate: {
              trim: v => {
                if(!v.trim())
                  return 'no seas 🤡, escribe algo'
                return true
              }
            }
          })} 
        />
        {
          errors.password && <p>{errors.password.message}</p>
        }
        <input type="password" placeholder="repetir contraseña" {...register('repassword', {
          validate: {
            equals: v => v === getValues('password') || 'las contraseñas no coinciden'
          }
        })} />
        {
          errors.repassword && <p>{errors.repassword.message}</p>
        }
        <button type="submit">
          REGISTRAR
        </button>
      </form>
    </>
  )
}

export default Signup
