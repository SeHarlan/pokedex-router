import React, { Component } from 'react';
import { getPokeDetail } from './poke-api.js';

import PokeDetail from './PokeDetail.js';

export default class Detail extends Component {
    state = { pokemon: {}}

    async componentDidMount() {
        
        const data = await getPokeDetail(this.props.match.params.pokemon);
        if(data.body.results) {
            this.setState({pokemon: data.body.results[0]})
        }
    }
    render() {
        return <PokeDetail item={this.state.pokemon} />
    }
}
