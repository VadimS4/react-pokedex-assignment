import React from 'react';
import '../styling/list.css';

const List = (props) => {
    console.log(props.pokemons)
    return(
        <div className="list">
            <div className="title">
                <h1>PokeDex</h1>
            </div>
        </div>
    )
}

export default List;