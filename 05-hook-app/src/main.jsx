import React from 'react';
import ReactDOM from 'react-dom/client';
//import HooksApp from './HooksApp';
//import {CounterApp} from './01-useState/CounterApp'
//import CounterWhitCustomHook from "./01-useState/CounterWhitCustomHook";

import './index.css';
//import { SimpleForm } from './02-useEffect/SimpleForm';
import {FormWithCustomeHook} from './02-useEffect/FormWithCustomeHook'



ReactDOM.createRoot(document.getElementById('root') ).render(
  <React.StrictMode>
    <FormWithCustomeHook />
  </React.StrictMode>,
)
