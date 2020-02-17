import React, { Component } from 'react';

export default class Search extends Component {

    
    render() {
        return <form onSubmit={this.props.handleSubmit} className="search">
            <label for="search">Search: </label>
            <input type="text" id="search" name="search" onChange={this.props.handleSearchText} value={this.props.searchInput} />
            
            <button>Find My Pokemon!</button>

        </form>
        
    }
}