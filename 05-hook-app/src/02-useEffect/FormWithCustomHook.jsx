import { useEffect, useState } from "react"
import {Message}  from './Message'

export const SimpleForm = () => {
  
    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'analia@google.com'
    })

    const {username, email} = formState;

    const onInputChange = ( target ) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    useEffect ( () => {
        //console.log('useEffected called')
    }, [])
  
    useEffect ( () => {
        //console.log('useEffected called')
    }, [formState])

    useEffect ( () => {
       // console.log('useEffected called')
    }, [email])

    return (
    <>
        <h1>Formulario con Custom Hook </h1>
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
            type="email"
            className="form-control mt-2"
            placeholder="analia@google.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
         />
         {
            (username === 'strider2') && <Message />
         }
    </>
  )
}


