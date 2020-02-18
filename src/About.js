import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class About extends Component {
    render() {
        return (
            <div>
                <p>Its a Pokedex babyyy!</p>
                <br />
                <p>Look at all your coooooool pokedudes <Link to="/PokeList">here</Link>
                </p>
            </div>
        )
    }
}
