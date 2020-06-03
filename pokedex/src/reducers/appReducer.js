const initialState = {
    pokemons: [],
    selectedPokemon: []
}

const appReducer = (state = initialState, action) => {
    console.log('reducer state:', state)
    console.log('reducer action:', action)
    switch(action.type) {
        case 'FETCH_POKEMONS': {
            console.log('fetching', action)
            return {
                ...state,
                pokemons: action.payload
            }
        }
        case 'ADD_POKEMON': {
            console.log('fetching', action)
            return {
                ...state,
                selectedPokemon: action.payload
            }
        }
        default:
            return state;
    }
}

export default appReducer;