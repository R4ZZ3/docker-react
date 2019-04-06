import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi There you megacoder R4ZZ3!
            </p>  
            <center><img src="https://i.ytimg.com/vi/EJtDw1Aw7do/hqdefault.jpg"></img></center>
            <h1> R4ZZ3 on kingi </h1>
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
