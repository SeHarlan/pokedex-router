import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PokeDetail from './PokeDetail.js';
import Search from './Search.js';
// import Paging from './Paging.js'
import { getPokedex } from './poke-api.js';

export default class App extends Component {
    state = {
      search: this.props.match.params.search,
      searchInput: '',
      pokedex: []
    }

    async componentDidMount() {
        const data = await getPokedex();
        this.setState({pokedex: data.body.results})
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        //pass in submitted search, pageeee
        const data = await getPokedex(this.state.searchInput)
        
        this.setState({pokedex: data.body.results})
    }

    handleSearchText = e => {
        this.setState({searchInput: e.target.value})
    }
    

    render() {
      

        const pokeNodes = this.state.pokedex
            .map(item => 
              <Link to={`/Detail/${item.pokemon}`}>
                  <PokeDetail item={item} key={item._id} />
              </Link>
              )
      return <section>
        <Search handleSubmit={this.handleSubmit} handleSearchText={this.handleSearchText} searchInput={this.state.searchInput} />

        {/* <Paging currentPage={stateProps.page} totalResults={stateProps.totalResults} perPage={stateProps.perPage}/> */}

          <ul className="pokedex">
            {pokeNodes}
          </ul>
          
      </section>
    }
  }


  