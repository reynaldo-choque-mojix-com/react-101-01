import React, { Component } from 'react';
import './App.css';
import Pokemon from './components/pokemonGo';
import Marker from './components/marker';
import GoogleMapReact from 'google-map-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPokemon: [],
      allPokemon: [],
      selectedPokemon: null,
      search: ""
    };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/reynaldo-choque-mojix-com/react-101-01/development/data/pokemon_list.json"
      )
      .then( res => res.json())
      .then( data => {
        this.setState({
          listPokemon: data, 
          allPokemon: data,
          selectedPokemon: null,
          search: ""
        });
      })
    
  }

  selectPokemon = (pokemon) => {
    console.log("sent", pokemon);
    this.setState({
      selectedPokemon: pokemon
    });
  }

  handleSearch = (event) => {
    console.log(event.target.value);
    this.setState({
      search: event.target.value,
      listPokemon: this.state.allPokemon.filter(
        (pokemon) => new RegExp(event.target.value, "i").exec(pokemon.name)
      )
    });
  }

  render() {
    let center = {
      lat: -46.4897,
      lng: -68.1193
    };
    if(this.state.selectedPokemon) {
      console.log("changing coordinates");
      center = {
        lat: this.state.selectedPokemon.latitute,
        lng: this.state.selectedPokemon.longitude
      };
    }
    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <input
              type="text"
              placeholder= "Search available pokemon in your country.."
              value={this.state.search}
              onChange={this.handleSearch}
            />
          </div>
          <div className="pokemon-list">
            {
              this.state.listPokemon.map( (pokemon) => {
                return <Pokemon 
                  key={pokemon.name} 
                  pokemon={pokemon} 
                  selectPokemon={this.selectPokemon}
                />;
              })
            }
          </div>
        </div>
        <div className="map">
        
        <GoogleMapReact
          center={center}
          zoom={14}
        >

          {
            this.state.listPokemon.map( (pokemon) => {
              return <Marker key={pokemon.name} lat={pokemon.latitute} lng={pokemon.longitude} text={pokemon.name}/>;
            })
          }
          
        </GoogleMapReact>

        </div>
      </div>
    );
  }
}

export default App;
