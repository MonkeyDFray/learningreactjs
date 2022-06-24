import React, { useState, useEffect, useRef } from 'react';
import delay from './helpers/delay';
function Pokemon ({name, avatar}) {
    return (
        <div>
            <img src={avatar} alt={name} />
            <figcaption>{name}</figcaption>
        </div>
    )
}
export function PokemonsHooks () {
    const [pokemons, setPokemons] = useState([]),
          urlPokemons = useRef('https://pokeapi.co/api/v2/pokemon/')
    useEffect(() => { 
       console.log('Use Effect se monta por primera vez pokeapis')
       const getPokemons = async (url) => {
        let res = await fetch(url),
            json = await res.json()
            for(let el of json.results){
                let _res = await fetch(el.url),
                    _json = await _res.json(),
                    newPokemon = {
                        id: _json.id,
                        name: _json.name,
                        avatar: _json.sprites.front_default
                    }
                await delay(1000)    
                setPokemons( pokemnons => [...pokemnons, newPokemon])
            }
       }
       getPokemons(urlPokemons.current)
    }, [])
    return (
        <div>
            <h2>
                Petición con FETCH con componentes funcionales
            </h2>
            {pokemons.length < 20 ? <h3>Cargando...</h3> : pokemons.map(el => <Pokemon key={el.id} name={el.name} avatar={el.avatar}/>)}
        </div>
    )
}