let helpFunctions = {}
helpFunctions.createList = function (arr){
    let li = ''
    arr.forEach( elm => li += `<li>${elm}</li>`)
    return li
}
export default helpFunctions