import React, { useState } from 'react';
export function ContadorHooks (props) {
    const [contador, setContador] = useState(props.valorInicial),
          sumar = () => setContador(contador + 1),
          restar = () => setContador(contador - 1)
    return (
        <div>
            <h2>Contador con hooks useState: {contador}</h2>
            <nav>
                <button onClick={sumar}>+</button>  
                <button onClick={restar}>-</button> 
            </nav>
        </div>
    )
}
ContadorHooks.defaultProps = {
    valorInicial: 30
}