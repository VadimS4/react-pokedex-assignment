import React from 'react';
import { connect } from 'react-redux';
import '../styling/list.css';

class List extends React.Component {

    handlePokemonClick = (pokemon) => {
        this.props.onButtonClick(pokemon)
        this.props.history.push(`/${pokemon.name}`)
    }

    render() {
        return (
            <div className="list">
                {!this.props.pokemons.results ? null :
                    <div className="title">
                        <h1>PokeDex</h1>
                        <ul>
                            {this.props.pokemons.results.map((pokemon, i) => (
                                <div className="pokemon" key={i}>
                                    <li>
                                        <h4 onClick={() => this.handlePokemonClick(pokemon)}> {pokemon.name}</h4>
                                    </li>
                                </div>
                            ))}
                        </ul>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.appReducer.pokemons
    }
}

export default connect(mapStateToProps)(List);