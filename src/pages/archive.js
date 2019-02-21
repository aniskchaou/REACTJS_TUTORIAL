import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route,hashHistory,Link } from "react-router-dom"
export default class About extends Component {
  
  
  render() {
  	console.log(this.props.match.params.article)
    return (
    	<div>
      <h2>archive ({this.props.match.params.article})</h2>
      <Link to="about">about </Link>
      </div>
    );
  }
}