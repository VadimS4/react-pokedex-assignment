import React from 'react';
import '../styling/detail.css';

const Detail = (props) => {
    console.log(props)
    return(
        <div className="detail">
            <h1>{props.selectedPokemon.name}</h1>
        </div>
    )
}

export default Detail;