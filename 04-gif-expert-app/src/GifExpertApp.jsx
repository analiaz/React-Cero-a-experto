import React, { useState } from 'react'

const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon ball']);

    const onAddCategory = () => {
        setCategories([ ...categories, 'sailor moon']);
    }

  return (
    <>
       <h1>GifExpertApp</h1>
        <button onClick={ onAddCategory }>Agregar</button>
       <ol>
            {categories.map( category => {
                return <li key={ category }>{category}</li>
            } )}
       </ol>
    </>
  )
}

export default GifExpertApp

