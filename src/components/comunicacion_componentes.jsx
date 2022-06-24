import React, { Component } from 'react';
const Hijo = ({message, modificarContador}) => <h3>{message}: <button onClick={modificarContador}>{message==='Sumar'?'+':'-'}</button></h3>
export class Padre extends Component {
    state = {
        contador: 0
    }
    // Incrementar contador
    incrementarContador = () => this.setState({contador: this.state.contador + 1})
    // Decrementar contador
    decrementarContador = () => this.setState({contador: this.state.contador - 1})
    render() {
        return (
            <>
                <h2>
                    Comunicación de componentes, contador: {this.state.contador}
                </h2>
                <Hijo modificarContador={this.incrementarContador} message='Sumar'/>
                <Hijo modificarContador={this.decrementarContador} message='Restar'/>
            </>
        )
    }
}