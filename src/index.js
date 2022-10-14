
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Counter} from "./Counter"
import { EsPrimo } from './EsPrimo';
// import './index.css';
//import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<>
  <Counter />
  <br></br>
  <EsPrimo />
</>
);
