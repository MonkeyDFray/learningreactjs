import React, { Component } from 'react';
class Reloj extends Component {
    componentWillUnmount (){
        console.log(2, 'El componente ha sido eliminado del DOM')
    }
    render() {
        return (
             <h3>{this.props.hora}</h3>
        );
    }
}
export class CicloDeVida extends Component {
    state = {
        hora: new Date().toLocaleTimeString(),
        showHour: false
    }
    timeId = null
    tick = () => {
        this.timeId = setInterval(() => {
            this.setState({hora: new Date().toLocaleTimeString()})
        }, 1000)
    }
    iniciar = () => { 
        this.tick()
        this.setState({
            showHour: true
        })
    }
    detener = () => {
        clearInterval(this.timeId)
        this.setState({
            showHour: false
        })
    }
    componentDidMount (){
        // console.log(0, 'Componente montado al DOM')
    }
    componentDidUpdate (prevPro, prevState){
        // console.log(1, 'El componente se ha actualizado')
    }
    render () {
        // console.log(3, 'El componente se dibuja o redibuja')
        return (
            <div>
                <h2>Ciclo de vida de los componentes de Clase</h2>
                {this.state.showHour?<Reloj hora={this.state.hora} />:<h3>Da click en iniciar para ver la hora</h3>}
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.detener}>Detener</button>
            </div>
        )
    }
}