import React, { useState, useEffect } from 'react';
function ScrollUseEffect() {
    //Definir Estado
    const [scrollY, setScrollY] = useState(window.pageYOffset),
          [alert, setAlert] = useState(false),
          [alertMessage, setAlertMessage] = useState('')

    //Métodos, manejadores de eventos
    function detectarCambio () {
        if(window.pageYOffset < 2700) setAlert(true)
        else setAlert(false)
        setScrollY(window.pageYOffset)
    }

    //ComponentDidMount
    useEffect(() => {
      console.log('Elemento montado')
      window.addEventListener('scroll', detectarCambio)
      //ComponentWillUnmount
      return function cleanUp (){
        console.log('El componente se va a desmontar')
        window.removeEventListener('scroll', detectarCambio)
      }
    }, [])

    //ComponentDidUpdate
    useEffect(() => {
        console.log('Movimiento del Scroll')   
    }, [scrollY])

    useEffect(() =>{
         alert ? setAlertMessage('No te vayas') : setAlertMessage('Aquí estás bien')
    }, [alert])

    //Render
    return(
        <div>
            <h2>Scroll Y elemento funcional</h2>
            <h3>Movimiento del Scroll en Y: {scrollY}</h3>
            <h6>{alertMessage}</h6>
        </div>
    )
}
export function EnableScroll () {
    const [enable, setEnable] = useState(false),
    enableScrollComponent = () => setEnable(true),
    disableScrollComponent = () => setEnable(false)
    return (
        <div>
            {enable ? <ScrollUseEffect /> : <h3>Da click en permitir para ver el scroll efect</h3>}
            <button onClick={enableScrollComponent}>Permitir</button>
            <button onClick={disableScrollComponent}>No permitir</button>
        </div>
    )
}