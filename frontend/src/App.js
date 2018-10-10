import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount = () => {
    fetch("http://localhost:3000/api/v1/notes")
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
      })
  }

  render() {
    return (
      <div> Hello </div>
    );
  }
}

export default App;
