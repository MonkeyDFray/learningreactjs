import React, { Component } from 'react';
import data from './helpers/data.json'
function ElementoLink (props) {
    return <a href={props.link} target="_blank" rel="noreferrer">{props.message}</a>
}
function ElementoDeLista (props){
    let link_key = `link_${props.framework.id}`
    return (
        <li>{props.framework.name}, documentación <ElementoLink key={link_key} link={props.framework.web} message='aquí' /></li>
    )
}
export default class RenderizadoElementos extends Component {
    constructor(props){
        super(props);
        this.state = {
            seasons: ['Otoño', 'Primavera', 'Invierno', 'Verano',]
        }
    }
    render(){
        return (
            <div>
                <h2>
                    Renderizado de elementos
                </h2>
                <h3>
                    <ol>
                        {this.state.seasons.map( season => <li key={season}>{season}</li>)}
                    </ol>
                </h3>
                <h3>
                    Frameworks más usados
                </h3>
                <ul>
                    {data.frameworks.map( el => <ElementoDeLista key={'li_'+el.id} framework={el}/>)}
                </ul>
            </div>
        )
    }
}