import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
import './styles.css';
CounterApp


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
         
        {/*<CounterApp value={897} />*/}
        <FirstApp title="Hola, Soy Milk"/>
    </React.StrictMode>
)