import React, { Component } from 'react';

export default class Search extends Component {

    state = { searchInput: '' }

    handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData(document.querySelector('form'));
        
        window.location.hash = formData.get('search');
    }

    handleSearchText = e => {
        this.setState({searchInput: e.target.value})
    }
    
    render() {
        return <form onSubmit={this.handleSubmit} className="search">
            <label for="search">Search: </label>
            <input type="text" id="search" name="search" onChange={this.handleSearchText} value={this.state.searchInput} />
            
            <button>Find My Pokemon!</button>

        </form>
        
    }
}