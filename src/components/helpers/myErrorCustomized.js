class ErrorObject extends Error {
    constructor(object){
        super()
        this._error = object
    }
}
export default ErrorObject