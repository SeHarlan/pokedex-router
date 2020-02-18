import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import './App.css';


import Header from './Header.js';
import PokeList from './PokeList.js';
import About from './About.js';
import Nav from './Nav.js';
import Detail from './Detail';
import Home from './Home';


export default class App extends Component {

  render() {
    return (
      <Router>
          <div>
            <Nav />
            <Header />
            <Switch>
              <Route path='/PokeList/:searchTerm?' component={PokeList} />
                
              <Route path='/About' component={About} />
             
              <Route path='/Detail/:pokemon' component={Detail} /> 
               
              <Route path='/' component={Home} />
            </Switch>

          </div>
      </Router>
    )
  }
}
