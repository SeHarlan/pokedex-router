import React, { Component } from 'react';

export default class Search extends Component {

    
    render() {
        return <form onSubmit={this.props.handleSubmit} className="search">
            <label for="search">Search: </label>
            <input type="text" id="search" name="search" onChange={this.props.handleSearchText} value={this.props.searchInput} />
            
            <button>Find My Pokemon!</button>
            
            <div className="radio">
                <label><input type="radio" name="search-type" value="pokemon" onClick={this.props.handleOption}></input> Name</label>
                <label><input type="radio" name="search-type" value="type" onClick={this.props.handleOption}></input>Type</label>
                <label><input type="radio" name="search-type" value="ability" onClick={this.props.handleOption}></input>Ability</label>
            </div>
        </form>
        
    }
}