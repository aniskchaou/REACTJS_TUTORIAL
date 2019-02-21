import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route,hashHistory,Link } from "react-router-dom"
export default class About extends Component {
  
  
  render() {
    return (
      <div>
      <h2>about</h2>
      <Link to="archive">archive</Link>
      </div>
    );
  }
}