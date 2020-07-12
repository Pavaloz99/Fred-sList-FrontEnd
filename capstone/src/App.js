import React from 'react';
import './App.css';
import Nav from './components/nav';
import Splash from './containers/Splash'
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Splash />
      </Router>
    </div>
  );
}

export default App;
