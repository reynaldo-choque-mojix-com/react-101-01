import React from "react"
import "./pokemonGo.css";


class Pokemon extends React.Component {
    handleClick = () => {
        this.props.selectPokemon(this.props.pokemon);
    }

    render() {
        const pokemonName = this.props.pokemon.name;
        const stylePictureInjection = {
            backgroundImage: `url(${this.props.pokemon.imageUrl}`,
            backgroundSize: 'contain',
            backgroundRepeat  : 'no-repeat',
            backgroundPosition: 'center'
        };
        return (
            <div className="pokemon" onClick={this.handleClick}>
                <div className="pokemon-picture" style={stylePictureInjection}></div>
                <div className="pokemon-description">
                    {pokemonName}
                </div>
            </div>
        );
    };
}
export default Pokemon;