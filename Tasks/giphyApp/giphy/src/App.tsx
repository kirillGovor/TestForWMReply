import React, { Component } from 'react';
import './App.css';
import _ from 'lodash'
import List from './components/List/List'
import Search from './components/Search/Search'
import Menu from './components/Menu/Menu'


class App extends Component {



  render() {
   
      return (
        <div >
          <Menu/>
          <h5>Powered by GIPHY</h5>
          <Search />
          <List/>


        </div>
      );
    }
  }


export default App;



