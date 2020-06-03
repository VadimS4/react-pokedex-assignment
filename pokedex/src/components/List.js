import React from 'react';
import { withRouter } from 'react-router';
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
                <div className="top-section">
                    <div className="title">
                        <h1>PokeDex</h1>
                    </div>
                    <div className="searchBar">
                        <form className="inputForm">
                            <input
                                type="text"
                                className="search"
                                placeholder="Enter A Pokemon Name..."
                            >
                            </input>
                        </form>
                    </div>
                </div>
                <div className="bottom-section">
                    {!this.props.pokemons.results ? null :
                        <ul className="ul">
                            {this.props.pokemons.results.map((pokemon, i) => (
                                <div className="pokemon" key={i}>
                                    <li>
                                        <div className="card">
                                            <h2>Pokemon Name: {pokemon.name}</h2>
                                            <h4 className="details" onClick={() => this.handlePokemonClick(pokemon)}>More Details</h4>
                                        </div>
                                    </li>
                                </div>
                            ))}
                        </ul>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.appReducer.pokemons
    }
}

export default withRouter(connect(mapStateToProps)(List));