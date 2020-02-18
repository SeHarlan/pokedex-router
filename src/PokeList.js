import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PokeDetail from './PokeDetail.js';
import Search from './Search.js';
import Paging from './Paging.js'
import { getPokedex } from './poke-api.js';

export default class App extends Component {
    state = {
      search: this.props.match.params.search,
      searchInput: '',
      pokedex: [],
      page: 1,
      perPage: null,
      totalResults: null,
      checkedOption: 'pokemon'
    }
 
    async updatePage(increment) {

        const currentPage = this.state.page;

        const newPage = currentPage + increment;
        const newData = await getPokedex(this.state.searchInput, newPage, this.state.checkedOption)
        this.setState({
          pokedex: newData.body.results,
          page: newPage,
          perPage: newData.body.perPage,
          totalResults: newData.body.count
        })
    }

 
    handlePrev = e => {
      e.preventDefault();
      this.updatePage(-1)
    }

    handleNext = e => {
      e.preventDefault();
      this.updatePage(1)
    }

    handleSubmit = async(e) => {
        e.preventDefault();        
        const newData = await getPokedex(this.state.searchInput, this.state.page, this.state.checkedOption)
        this.setState({
          pokedex: newData.body.results, page: 1,
          perPage: newData.body.perPage,
          totalResults: newData.body.count
        })
    }

    handleSearchText = e => {
        this.setState({searchInput: e.target.value})
    }

    handleOption = e => {
      this.setState({checkedOption: e.target.value});
    }

    async componentDidMount() {
      const data = await getPokedex();
      this.setState({
        pokedex: data.body.results,
        totalResults: data.body.count,
        perPage: data.body.perPage
      })
    }

    render() {
  
        const pokeNodes = this.state.pokedex
            .map(item => 
              <Link to={`/Detail/${item.pokemon}`}>
                  <PokeDetail item={item} key={item._id} />
              </Link>
              )
      return <section>
        <Search handleSubmit={this.handleSubmit} handleSearchText={this.handleSearchText} searchInput={this.state.searchInput} handleOption={this.handleOption} />

        <Paging currentPage={this.state.page} totalResults={this.state.totalResults} perPage={this.state.perPage} handleNext={this.handleNext} handlePrev={this.handlePrev} />

          <ul className="pokedex">
            {pokeNodes}
          </ul>
          
      </section>
    }
  }


  