import React from 'react';
import ReactDOM from 'react-dom/client';
//import HooksApp from './HooksApp';
//import {CounterApp} from './01-useState/CounterApp'
//import CounterWhitCustomHook from "./01-useState/CounterWhitCustomHook";
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import {FormWithCustomeHook} from './02-useEffect/FormWithCustomeHook'
//import {MultipleCustomHooks} from "./03-examples/MultipleCustomHooks";
import './index.css';

//import { FocusScreen } from './04-useRef/FocusScreen';
import { Layout } from './05-useLayoutEffect/Layout';

ReactDOM.createRoot(document.getElementById('root') ).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
)
