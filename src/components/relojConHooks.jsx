import React, { useState, useEffect, useRef } from 'react';
function Reloj (props) {
    useEffect(() => {
      console.log('Componente hijo montado')
      return () => {
        console.log('Componente hijo desmontado')
      }
    }, [])
    return (
        <div>
            <h3>La hora es: {props.horaActual}</h3>
        </div>
    )
}
export function RelojHooks () {
    const [showReloj, setShowReloj] = useState(false),
          [hour, setHour] = useState(new Date().toLocaleTimeString()),
          previousHour = useRef(hour),
          timeId = useRef(null)
    useEffect(() => {
        console.log('Componente padre montado')
    }, [])
    useEffect(() => {
        if(showReloj === true) {
            console.log('TimeId seteado')
            timeId.current = setInterval(() => {setHour(new Date().toLocaleTimeString())}, 1000)
        }
        return () => {
            console.log('TimeId borrado')
            clearInterval(timeId.current)
        }
    }, [showReloj])
    useEffect(() => {
        console.log(`Componente padre actualizado, la hora era: ${previousHour.current}`)
        previousHour.current = hour
    }, [hour])
    return (
        <div>
            <h2>
                Reloj con Hooks
            </h2>
            {showReloj ? <Reloj horaActual={hour}/> : <h3>Da click en iniciar para poder ver el reloj</h3>}
            <button onClick={() => setShowReloj(true)}>Iniciar</button>
            <button onClick={() => setShowReloj(false)}>Detener</button>
        </div>
    )
}