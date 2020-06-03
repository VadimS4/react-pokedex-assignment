import React from 'react';
import { connect } from 'react-redux';
import { fetchPokemons } from './actions/appActions';
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
    this.setState({
      selectedPokemon: pokemon
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={(props) => <List {...props} onButtonClick={this.onButtonClick}/>} />
            <Route path={'/pokemon'} render={(props) => <Detail {...props} selectedPokemon={this.state.selectedPokemon}/>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pokemons: state.appReducer.pokemons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPokemons: () => {(fetchPokemons(dispatch))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);