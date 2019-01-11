import React, { Component } from 'react';
import './App.css';
import Pokemon from './components/pokemonGo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPokemon: []
    };
  }

  componentDidMount() {
    fetch("/src/data/pokemon_list.json")
      .then( res => {
        console.log("res");
      })
      .then( result => {
        console.log("this is", result);
      })
    
  }
  render() {
    const pokemon = {
      name: "Snorlax2",
      imageUrl: "https://media.makeameme.org/created/pokemon-url-shittest.jpg"
    };

    const listPokemon = [pokemon, pokemon, pokemon];
    return (
      <div className="app">
        <div className="main">
          <div className="pokemon-list">
            {
              this.state.listPokemon.map( (pokemon) => {
                return <Pokemon pokemon={pokemon} />;
              })
            }
          </div>
        </div>
        <div className="map">
        </div>
      </div>
    );
  }
}

export default App;
