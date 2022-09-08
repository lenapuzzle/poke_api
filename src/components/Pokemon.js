import React, {useState, useEffect} from "react";

const Pokemon = (props) => {
    const [pokeNames, setPokeNames] = useState(0);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
            .then(response => response.json())
            .then(response => setPokeNames({pokemons: response.results}))
    }, []);

    // const [clicked, setClicked] = useState(false)

    // const onClick = e => {
    //     clicked?
    //     setClicked(false):
    //     setClicked(true)
    // }

    return (
        <div>
            <button /* onClick={ onClick } */ type="button" >Fetch Pokemon</button>

            {pokeNames.pokemons ? pokeNames.pokemons.map((pokemon, index) => {
                return(<ul> <li key={index}> {pokemon.name}</li></ul>)
            }):null}
        </div>
    );
}
export default Pokemon;