import React from 'react';
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';


import "./global.css"
import App from './App';
import {ResultContextProvider} from './components/contexts/ResultContextProvider';

ReactDom.render(
<ResultContextProvider>
<Router>
    <App/>
</Router>
</ResultContextProvider>
, 
document.getElementById('root'))

