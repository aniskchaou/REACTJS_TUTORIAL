import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  helloWorld(){
    return "hello world !"
  }

  constructor()
  {
    super()
    this.name="will"
  }
  render() {
    return (
      <div className="App">
      {this.helloWorld()}
      {this.name}
      </div>
    );
  }
}

export default App;
