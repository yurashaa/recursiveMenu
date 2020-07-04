module.exports = class ErrorHandler extends Error {
    constructor(message, statusCode, customStatusCode) {
        super(message);
        this.statusCode = statusCode;
        this.customStatusCode = customStatusCode;

        Error.captureStackTrace(this, this.constructor);
    }
};
