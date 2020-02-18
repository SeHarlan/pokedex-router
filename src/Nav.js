import React, { Component } from 'react'

import {
    Link
} from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <ul className="nav">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/PokeList">PokeDudes</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
            </ul>
        )
    }
}
