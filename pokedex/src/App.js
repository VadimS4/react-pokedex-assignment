import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from 'react-router-dom';
import './App.css';
import List from './components/List';
import Detail from './components/Detail';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokemons : [],
      filteredPokemons: [],
      selectedPokemon: []
    }
  }

  componentWillMount = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=150")
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        pokemons: json,
        filteredPokemons: json
      })
    })
    .catch(err => console.log(err))
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
            <Route exact path="/" render={(props) => <List {...props} pokemons={this.state.pokemons} onButtonClick={this.onButtonClick}/>} />
            <Route path={`/${this.state.selectedPokemon.name}`} render={(props) => <Detail {...props} selectedPokemon={this.state.selectedPokemon}/>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;