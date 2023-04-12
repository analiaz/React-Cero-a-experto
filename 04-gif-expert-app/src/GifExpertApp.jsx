import React, { useState } from 'react'
import AddCategory from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon ball']);

    const onAddCategory = ( newCategory ) => {
       // console.log(categories);
       if (categories.includes(newCategory)) return;
        setCategories([ newCategory, ...categories]);
    }

  return (
    <>
       <h1>GifExpertApp</h1>

        <AddCategory 
            //setCategories={ setCategories }
            onNewCategory={ (value) => onAddCategory(value)}
        />

       <ol>
            {categories.map( category => {
                return <li key={ category }>{category}</li>
            } )}
       </ol>
    </>
  )
}

export default GifExpertApp

