# Samaritan Frontend Developer Assignment

## Description
Create an app that simulates a mini pokedex using [The open Pokemon API](https://pokeapi.co/). You are going to build 2 views; a list view and a detail view.

Make sure to use git a Source Code Version Manager and keep your commits small with clear commit messages(For reference, the requirements listed below could each be considered a commit.). You can use any git hosting service. Make sure the repository is public so we can clone/fork it. 


## Prerequisites
1. [React](https://reactjs.org/docs/getting-started.html)
2. [ReactRouter](https://reacttraining.com/react-router/web/guides/quick-start)
3. [Redux](https://redux.js.org/introduction/getting-started)
4. [JS fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
  * fetch uses [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Requirements and Development Goals
1. Create a list view with hard coded pokémon names. Feel free to use any pokémon.(api/v2/pokemon will show you available pokémon names)
2. Implement a filter search bar above of the pokémon list to filter your pokémon by name
3. Style the List view
4. Setup `ReactRouter` with a root route that renders the List view.
5. Add another Route that points to `/:pokémon_name` and renders a Detail view.
  * Make sure List view and Detail View use seperate Components
6. Allow clicking a pokémon name to load the Detail view for that pokémon.
7. Connect the List view to [The open Pokemon API](https://pokeapi.co/api/v2/pokemon) using `fetch`
  * Change hard coded list into fetch response.
  * You should automatically have the first 20 pokémon, ensure you get all the pokémon available.
8. Setup `Redux`
  * Setup a redux action that will fetch the first 151 pokémon, loop through the pokémon and fetch detail info from Pokemon API(https://pokeapi.co/api/v2/pokemon/:pokémon_name), and finally cache each pokémon's details in redux state.
  * You'll want to have an addPokemon() action that adds pokémon details to a list
9. Connect Detail view to the cached redux pokémon
  * You'll want to have a getPokemon(pokémon_name) action that gets pokémon details from the redux list
10. Style the Detail view
11. Add a sprite image above each pokémon name in the List view.

