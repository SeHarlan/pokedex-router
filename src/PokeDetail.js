import React, { Component } from 'react';

export default class PokeDetail extends Component {
    render() {

      return <li className="poke-item" style={{borderColor: this.props.item.color_1 }} >
          <h3>{this.props.item.pokemon}</h3>
          <div>
            <span className="type" style={{backgroundColor:this.props.item.color_1}}>{this.props.item.type_1}</span>
            <span>HP: {this.props.item.hp}</span>
          </div>
          <img src={this.props.item.url_image} alt={this.props.item.pokemon} />
          <div>
            <span>A: {this.props.item.attack}</span>
            <span>D: {this.props.item.defense}</span>
          </div>
      </li>
    }
  }