import React, { useState, useEffect, useRef } from 'react';
import useFetch from './hooks/useFetch.jsx'
function Pokemon ({name, avatar}) {
    return (
        <div>
            <img src={avatar} alt={name} />
            <figcaption>{name}</figcaption>
        </div>
    )
}
function AreaPokemons () {
    const url = useRef('https://pokeapi.co/api/v2/pokemon/')
    const [pokemons, setPokemons] = useState([])
    let [pending, err, data] = useFetch(url.current)
    useEffect(() => {
        async function handleFetchResponse(data) {
            if(data != null){
                for(let el of data.results){
                    let res = await fetch(el.url)
                    let json = await res.json()
                    let newPokemon = {
                        name: json.name,
                        id: json.id,
                        avatar: json.sprites.front_default
                    }
                    setPokemons(pokemons => [...pokemons, newPokemon])
                }
            }
        } 
        handleFetchResponse(data)
        return () => {
            console.log('Pokemons borrados')
            setPokemons([])
        }
    }, [data])
    return (
        <div>
            <article>
                {pending?<h3>Intentado capturar los pokemons...</h3>:err?<h3>Hubo un error capturando los pokemon</h3>:pokemons.length<20?<h3>Dibujando pokemons...</h3>:pokemons.map( el => <Pokemon key={el.id} name={el.name} avatar={el.avatar} />)}
            </article>
        </div>
    )
}
function HookPersonalizado () {
    const [showPokemons, setShowPokemons] = useState(false)
    return (
        <div>
            <h2>Hooks Personalizados</h2>
            {showPokemons?<AreaPokemons />:null}
            <nav>
                <button onClick={() => setShowPokemons(true)}>Da click aquí para ver los pokemons</button>
                <br />
                <button onClick={() => setShowPokemons(false)}>Da click aquí para ocultar los pokemons</button>
            </nav>
        </div>
    )
}
export {HookPersonalizado}