let helpFunctions = {}

    helpFunctions.createElementsList = arr => arr.map( (el, i) => <li key={i}>{el}</li>)
    
export default helpFunctions
