import React from 'react';
import PropTypes from 'prop-types'
function Propiedades (props) {
    return (
        <div>
            <h2>{props.default_prop}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? 'Verdadero' : 'Falso'}</li>
                <li>{props.arreglo.join(' - ')}</li>
                <li>{`${props.objeto.nombre} ${props.objeto.correo}`}</li>
                <li>{props.funcion(4)}</li>
                <li>{props.elemento}</li>
                <li>Arreglo elevado al cuadrado {props.arreglo.map(props.funcion).join(' - ')}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    )
}
Propiedades.defaultProps = {
    numero: 19
}
Propiedades.propTypes = {
    numero: PropTypes.number.isRequired
}
export default Propiedades 