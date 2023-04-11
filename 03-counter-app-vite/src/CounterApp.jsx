import {useState} from 'react'
import PropTypes from 'prop-types';


export const CounterApp = ( {value} ) => {

    const [ counter, setCounter ] = useState( value );

    const handleAdd = (event) => {
        setCounter( counter + 1); 
    }    

    const handleMin = (event) => {
        setCounter( counter - 1); 
    }    

    const handleReset = (event) => {
        setCounter( value ); 
    }    


    return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleMin}>-1</button>
      <button onClick={handleReset}>reset</button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}
