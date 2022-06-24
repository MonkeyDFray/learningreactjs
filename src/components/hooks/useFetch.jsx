import { useState, useEffect } from 'react';
import delay from '../helpers/delay.js'
function useFetch (url) {
    const [data, setData] = useState(null)
    const [err, setErr] = useState(false)
    const [pending, setPending] = useState(true)

    useEffect( () => {
        delay(5000)
            .then( () => {
                fetch(url) 
                    .then( res => res.json())
                    .then( json => {
                        setData(json)
                        setPending(false)
                    })
                    .catch( err => {
                        setErr(err)
                        setPending(false)
                    })
            })
        return () => {
            console.log('Data fetch borrada')
            setData(null)
            setErr(false)
            setPending(true)
        }
    }, [url])

    return [pending, err, data]
}
export default useFetch
