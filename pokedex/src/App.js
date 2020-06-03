import React from 'react';
import { connect } from 'react-redux';
import { fetchPokemons, addPokemon } from './actions/appActions';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import List from './components/List';
import Detail from './components/Detail';
import './App.css';

class App extends React.Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     // pokemons : [],
  //     filteredPokemons: [],
  //     selectedPokemon: []
  //   }
  // }

  componentWillMount() {
    this.props.getPokemons()
  }

  onButtonClick = (pokemon) => {
    this.props.getPokemonDetails(pokemon.name)
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={() => <List onButtonClick={this.onButtonClick} />}/>
            <Route path={`/${this.props.selectedPokemon.name}`} render={() => <Detail />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pokemons: state.appReducer.pokemons,
    selectedPokemon: state.appReducer.selectedPokemon
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPokemons: () => {(fetchPokemons(dispatch))},
    getPokemonDetails: (pokemon) => {(addPokemon(dispatch, pokemon))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);