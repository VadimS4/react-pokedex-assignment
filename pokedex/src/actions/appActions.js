export const fetchPokemons = (dispatch) => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=150")
    .then(resp => resp.json())
    .then(json => {
        dispatch ({
            type: 'FETCH_POKEMONS',
            payload: json
        })
    })
    .catch(err => console.log(err))
}

export const addPokemon = (dispatch, pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(resp => resp.json())
    .then(json => {
        dispatch ({
            type: 'ADD_POKEMON',
            payload: json
        })
    })
    .catch(err => console.log(err))
}

// export const fetchPokemon = (dispatch) => {
//     fetch()
// }