import React, { Component } from 'react';
import Header from './components/header.js'
import Lista from './components/listas.js'
import Item from './components/item.js'

import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Item />
      </div>
    );
  }
}

export default App;
