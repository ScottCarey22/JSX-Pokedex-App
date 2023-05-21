import React from 'react'
import "./Pokecard.css"

const API = 'https://raw.githubusercontent.com/' +
    'PokeAPI/sprites/master/sprites/pokemon/';

// a single pokemon card

const Pokecard = (props) => {
    let imgSrc = `${API}${props.id}.png`;

    return (
        <div className='Pokecard'>
            <div className='Pokecard-title'>{props.name}</div>
            <img className="Pokecard-img" src={imgSrc} />
            <div className="Pokecard-data">Type:  {props.type}</div>
            <div className="pokecard-data">Exp: {props.exp}</div>
        </div>
    );
}

export default Pokecard;