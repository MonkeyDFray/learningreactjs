import React, { Component }from "react";
function EstadoAHijo (props){
    return (
        <div>
            <h3>
                {props.contadorHijo}
            </h3>
        </div>
    )
}
class Estado extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contador: 0
        }
        // setInterval( () => this.setState({
        //     contador: this.state.contador + 1
        // }), 1000)
    }
    render(){
        return (
            <div>
                <h2>Estado de clase: {this.state.contador}</h2>
                <EstadoAHijo contadorHijo={this.state.contador}/>
            </div>
        )
    }
}
export default Estado
