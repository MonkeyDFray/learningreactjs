import React, { useState, useEffect } from 'react';
import delay from './helpers/delay';
function ComponenteRegular (props) {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    console.log(count)
    console.log(count2)
    useEffect(() => {
        async function updateStates () {
            console.log('Actualizando variables de estado desde el hook inicial')
            for (let i = 0; i < 3; i++){
                await delay(5000)
                setCount( count => count + 25)
            }
        }
        console.log('Se ejecuta una vez, cuando se renderiza el componente')
        updateStates()
        return () => {
            console.log('Se ejecuta cuando el componente se desmonta 1')
        }
    }, [])
    useEffect(() => {
        console.log('Se ejecuta siempre que se actualiza el estado del el componente')
        return () => {
            console.log('Se ejecuta cuando el componente se desmonta 2')
        }
    })
    useEffect( () => {
        console.log('Se ejecuta cuando un elemento específico del estado a cambiado')
        return () => {
            console.log('Se ejecuta cuando el componente se desmonta 3')
        }
    }, [count])
    return (
        <div>
            {console.log('Elmento renderizado')}
            <h3>{count>=75?<span> Count: {count}</span>:null}</h3>
            <h3>Count_2: {count2}</h3>
            <h3>{props.message}</h3>
            <nav>
                <label htmlFor="">Contador: </label>
                <button onClick={() => setCount(count => count + 1)}>Sumar</button>
                <button onClick={() => setCount(count => count - 1)}>Restar</button>
            </nav>
            <nav>
                <label htmlFor="">Contador 2: </label>
                <button onClick={() => setCount2(count2 => count2 + 1)}>Sumar</button>
                <button onClick={() => setCount2(count2 => count2 - 1)}>Restar</button>
            </nav>
        </div>
    )
}
function PruebasPropias () {
    const [showComponenteRegular, setShowComponenteRegular] = useState(false)
    return (
        <div>
            {console.log('Elemento renderizado')}
            <h2>Aquí voy a hacer mis pruebas propias</h2>
            {showComponenteRegular?<ComponenteRegular message={"Este es un mensaje para el componente regular"}/>:null}
            <button onClick={() => setShowComponenteRegular(showComponenteRegular => !showComponenteRegular)}>Aparecer/Desaparecer</button>
        </div>
    )
}
export {PruebasPropias}
// El elemento se renderiza.
// En el UseState ya están creados y/o actualizados los elementos de estado antes de que se trabaje UseEffect.
// Todos los useEfect se ejecutan la primera vez que el componente se renderiza.
// El useEffect con un [] vacío se ejecuta una sola vez, cuando el componente se renderiza por primera vez, de igual forma el return de este hook se ejecuta cuando el componente se desmonta.
// El useEffect sin un [] se ejecuta siempre que las variables de estado del componente cambian o se le pasan nuevas propiedades, el return de este hook corre antes de que el código principal del mismo vuelva a ejecutarse.
// El useEffect con [a,b,c] variables internas se ejecuta siempre que una de estas variables ha cambiado, el return de este hook se ejecuta antes que el código principal del mismo.


//1)El elemento se renderiza con la variables de estado
//2)El return de los useEfect se aplica
//3)El código principal del useEffect se ejecuta