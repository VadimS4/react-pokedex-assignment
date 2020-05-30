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
      pokemons : [
        "bulbasaur",
        "ivysaur",
        "venusaur",
        "charmander",
        "charmeleon",
        "charizard",
        "squirtle",
        "wartortle",
        "blastoise",
        "caterpie",
        "metapod",
        "butterfree",
        "weedle",
        "kakuna",
        "beedrill",
        "pidgey",
        "pidgeotto",
        "pidgeot",
        "rattata",
        "raticate"
      ]
    }
  }


  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/">
              <List pokemons={this.state.pokemons}/>
            </Route>
            <Route path="/pokemon">
              <Detail />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
