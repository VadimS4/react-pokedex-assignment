const initialState = {
    pokemons: []
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
        // case 'FETCH_POKEMON': {
        //     console.log('fetching')
        //     return {
        //         ...state,
        //         selectedPokemon: action.payload
        //     }
        // }
        default:
            return state;
    }
}

export default appReducer;