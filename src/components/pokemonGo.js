import React from "react"
import "./pokemonGo.css";


class Pokemon extends React.Component {
    render() {
        const pokemonName = this.props.pokemon.name;
        const stylePictureInjection = {
            backgroundImage: `url(${this.props.pokemon.imageUrl}`
        };
        return (
            <div className="pokemon">
                <div className="pokemon-picture" style={stylePictureInjection}></div>
                <div className="pokemon-description">
                    {pokemonName}
                </div>
            </div>
        );
    };
}
export default Pokemon;