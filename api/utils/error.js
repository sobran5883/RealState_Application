//custom error handler
//we have to create error, eg. if users passord in not long enough
export const errorHandler = (statusCode, message)=>{
    const error = new Error()     //we use js error constructor to create an error
    error.statusCode = statusCode
    error.message = message;
    return error;
}
