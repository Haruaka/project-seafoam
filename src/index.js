import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './App';
import About from './components/AboutComponent';
import Gallery from './components/GalleryComponent';



ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/portfolio" component={Gallery}/>
        </Switch>
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
