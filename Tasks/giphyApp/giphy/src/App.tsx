import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';
import List from './components/List/List';
import Search from './components/Search/Search';
import Menu from './components/Menu/Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Stickers from './components/List/Stickers';
import Trending from './components/List/Giphs';
import Searched from './components/Search/Searched';
import Saved from './components/List/Saved'
class App extends Component {


  render() {

    return (
      <Router>
        <Switch>
        </Switch>
        <Menu />
        <Search inputValue={""} />
        <Route exact path="/" component={List}></Route>
        <Route exact path="/stickers" component={Stickers}></Route>
        <Route exact path="/trending" component={Trending}></Route>
        <Route exact path="/saved" component={Saved}></Route>
        <Route exact path="/search/:string" component={Searched}></Route>
      </Router>
    );
  }
}

export default App;