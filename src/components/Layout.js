import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router,Switch,Route,hashHistory,Link } from "react-router-dom"


export default class App extends Component {
  
  helloWorld(){
    return "hello world !"
  }

  constructor()
  {
    super()
    this.state={"name":"will","title":"TITLE"}
  }
  changeTitle(title)
  {
    this.setState({title:title});
  }
  render() {
    setTimeout(()=>{
      this.setState({name:"Bob"});
    },1000)
    var list=[<Header />,<Header />,<Header />];
    return (
      <div className="App">
      {this.helloWorld()}
      {this.state.name}
      {list}
      <Footer changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
      <Link to="archive">archive</Link>
      <Link to="about">about</Link>
      </div>
    );
  }
}