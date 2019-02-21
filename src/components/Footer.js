import React, { Component } from 'react';

export default class Footer extends Component {
  
  handleChange(e)
  {
  	var title=e.target.value;
  	this.props.changeTitle(title);
  }
  render() {
    return (
      <div>{this.props.title}
       <input value={this.props.title} onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}