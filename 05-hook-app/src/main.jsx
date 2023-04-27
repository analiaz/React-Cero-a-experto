import React from 'react';
import ReactDOM from 'react-dom/client';
//import HooksApp from './HooksApp';
//import {CounterApp} from './01-useState/CounterApp'
//import CounterWhitCustomHook from "./01-useState/CounterWhitCustomHook";
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import {FormWithCustomeHook} from './02-useEffect/FormWithCustomeHook'
//import {MultipleCustomHooks} from "./03-examples/MultipleCustomHooks";
import './index.css';

//import { Memorize } from './06-memos/memorize';
//import { MemoHook } from './06-memos/MemoHook';

//import { FocusScreen } from './04-useRef/FocusScreen';
//import { Layout } from './05-useLayoutEffect/Layout';
//import { CallbackHook } from './06-memos/CallbackHook';
//import { Padre } from './07-tarea-memo/Padre';
///import './08-useReducer/intro-reducer'

import { TodoApp } from './08-useReducer/TodoApp';


ReactDOM.createRoot(document.getElementById('root') ).render(
 // <React.StrictMode>
    <TodoApp /> 
//  </React.StrictMode>,
)
