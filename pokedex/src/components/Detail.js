import React from 'react';
import { connect } from 'react-redux';
import '../styling/detail.css';

class Detail extends React.Component {
    render() {
        console.log(this.props.selectedPokemon)
        return (
            <div className="detail">
                <h1>{this.props.selectedPokemon.name}</h1>
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