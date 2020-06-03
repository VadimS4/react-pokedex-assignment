import React from 'react';
import { connect } from 'react-redux';
import '../styling/detail.css';

class Detail extends React.Component {
    render() {
        console.log(this.props.selectedPokemon)
        return (
            <div className="detail">
                <img src={`${this.props.selectedPokemon.sprites.front_default}`} alt="sprite_img" className="img"></img>
                <div className="info">
                    <h1 className="name">{this.props.selectedPokemon.name}</h1>
                    <div className="small_details">
                        <h2>Pokemon Height: {this.props.selectedPokemon.height}</h2>
                        <h2>Pokemon Weight: {this.props.selectedPokemon.weight}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedPokemon: state.appReducer.selectedPokemon
    }
}

export default connect(mapStateToProps)(Detail);