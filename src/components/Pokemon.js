import React, {useState, useEffect} from "react";
import axios from 'axios';

const Pokemon = (props) => {
    const [pokeNames, setPokeNames] = useState(0);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
            // .then(response => response.json())
            .then(response => {setPokeNames({pokemons: response.results})})
    }, [clicked]);


    const onClick = e => {
        clicked ?
        setClicked(false):
        setClicked(true)
    }

    return (
        <div>
            <button onClick={ onClick } type="button" >Fetch Pokemon</button>

            {pokeNames.pokemons ? pokeNames.pokemons.map((pokemon, index) => {
                return(<ul> <li key={index}> {pokemon.name}</li></ul>)
            }):null}
        </div>
    );
}
export default Pokemon;