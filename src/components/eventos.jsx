import React, { Component } from 'react';
export class EventoES6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        }
        this.sumar = this.sumar.bind(this)
        this.restar = this.restar.bind(this)
    }
    sumar (e){
        this.setState({
            contador: this.state.contador + 1
        })
    }
    restar (e){
        this.setState({
            contador: this.state.contador - 1
        })
    }
    render(){
        return (
            <div>
                <h2>
                    Eventos en componentes de clase ES6
                </h2>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
            </div>
        )
    }
}
//Propierties initializer
export class EventoES7 extends Component {
    state = {
        contador: 0
    }
    sumar = () => {
        this.setState({contador: this.state.contador + 1})
    }
    restar = () => {
        this.setState({contador: this.state.contador - 1})
    }
    render () {
        return (
            <div>
                <h2>
                Eventos en componentes de clase ES7
                </h2>
                <h3>
                    {this.state.contador}
                </h3>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
            </div>
        )
    }
}
//Mas sobre eventos
// function Boton (props) {
//     return <button onClick={props.myOnClick}>Botón hecho componente</button>
// }
// const Boton = props => <button onClick={props.myOnClick}>Botón hecho componente</button>
const Boton = ({myOnClick}) => <button onClick={myOnClick}> Boton hecho componente </button>

export class MasSobreEventos extends Component {
    handleSaludar = (e, message) => {
        console.log(e)
        console.log(e.nativeEvent)
        console.log(e.nativeEvent.target)
        console.log(e.target)
        console.log(message)
    }
    render() {
        return (
            <div>
                <h2>
                    Más sobre eventos
                </h2>
                <button onClick={e => this.handleSaludar(e, 'Esto es algo nuevo que aprendí lol')}>Saludar</button>
                {/* Evento personalizado */}
                {/* Esto no es correcto <Boton onClick={e => this.handleSaludar(e, 'Esto es desde el botón componente')}/> */}
                <Boton myOnClick={e => this.handleSaludar(e, 'Esto es desde el botón componente')}/>
            </div>
        )
    }
}