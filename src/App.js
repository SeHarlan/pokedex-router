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

export const stateStart = {
  results: [],
  page: null,
  perPage: null,
  totalResults: null
}

export default class App extends Component {

  state = stateStart

  // async loadPokemon() {
  //     const pokemonData = await getPokedex();

  //     this.setState({
  //       results: pokemonData.body.results,
  //       page: 1,
  //       perPage: pokemonData.body.perPage,
  //       totalResults: pokemonData.body.count
  //     })
  // }

  // async componentDidMount() {
  //   await this.loadPokemon();
    

  //   window.addEventListener('hashchange', async () => {
  //     await this.loadPokemon();
  //   })
  // }

  render() {
    return (
      <Router>
          <div>
            <Nav />
            <Header />
            <Switch>
              <Route path='/PokeList' component={PokeList} />
                
              <Route path='/About' component={About} />
             
              <Route path='/Detail/:pokemon' component={Detail} /> 
               
              <Route path='/' component={Home} />
            </Switch>

          </div>
      </Router>
    )
  }
}
