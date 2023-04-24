import { useEffect } from "react"
import useForm from "../Hooks/useForm"


export const FormWithCustomeHook = () => {
  
    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: ' ',
        email: ' ',
        password: ''
    });

    //const { username, email, password} = formState;

    return (
    <>
        <h1>Formulario con custom Hook</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ onInputChange }
         />
        <input 
            type="email"
            className="form-control mt-2"
            placeholder="analia@google.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
         />
        <input 
            type="password"
            className="form-control mt-2"
            placeholder="contraseña"
            name="pasword"
            value={ password }
            onChange={ onInputChange }
         />

         <button onClick={ onResetForm } className="btn btn-primary"> Borrar </button>
    </>
  )
}


