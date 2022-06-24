import React, { Component } from 'react';
function Pokemon ({pokemon}){
    return (
        <div>
            <img src={pokemon.avatar} alt={pokemon.name} />
            <figcaption>{pokemon.name}</figcaption>
        </div>
    )
}
export class AjaxApis extends Component {
    state = {
        pokemons : []
    }
    componentDidMount () {
        let url = 'https://pokeapi.co/api/v2/pokemon/'
        fetch(url)
            .then(res => res.json())
            .then(json => {
                json.results.forEach( el => {
                    fetch(el.url)
                        .then(_res => _res.json())
                        .then(_json => {
                            let newPokemon = {
                                id: _json.id,
                                name: _json.name,
                                avatar: _json.sprites.front_default
                            },
                                pokemons = [...this.state.pokemons, newPokemon]
                            this.setState({pokemons})
                        })
                })
            })
    }
    render (){
        return (
        <div>
            <h2>
                 Peticiones asincronas en componentes de clase
            </h2>
            {this.state.pokemons.length < 20 ? <h3>Cargando...</h3> : this.state.pokemons.map( el => <Pokemon key={el.id} pokemon={el}/>)}
        </div>
        )
    }
}