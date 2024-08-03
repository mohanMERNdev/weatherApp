// src/App.js

import React from 'react';
import WeatherService from './WeatherService';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <WeatherService />
      </div>
    );
  }
}

export default App;
