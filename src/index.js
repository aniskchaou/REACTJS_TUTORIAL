import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Layout from './components/Layout';
import About from './pages/about';
import Archive from './pages/archive';
//import {Router,Route,IndexRoute} from "react-router";
import { BrowserRouter as Router,Switch,Route,hashHistory,Link } from "react-router-dom"
//import { Router , Route, Link,Switch} from "react-router-dom"
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<Layout />, document.getElementById('root'));

ReactDOM.render(<Router>  
<div>	
<Route exact path="/app" component={Layout}/> 
<Route exact path="/about" component={About}/> 
<Route exact path="/archive/:article"  name="archive" component={Archive}/> 
</div>
</Router>, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
