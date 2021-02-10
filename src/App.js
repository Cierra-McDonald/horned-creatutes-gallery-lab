import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Images from './data.js'
import MyHeader from './Components/Header';
import MyImageList from './Components/ImageList';

class App extends React.Component {

  render() {
    
  return (
    <div className="App">
      <Router>
        < MyHeader/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        < MyImageList/>
      </Router>
    </div>
  );
  }
}

export default App;

