const {
    requestHeaders: {AUTHORIZATION},
    accessToken: {ACCESS_TOKEN},
    responceStatusCodes: {UNAUTHORIZED}
} = require('../../constants');
const {ErrorHandler, errors} = require('../../error');

module.exports = (req, res, next) => {
    const token = req.get(AUTHORIZATION);

    // ! ACCESS_TOKEN IS HARDCODED TO aa689372-bddd-11ea-b3de-0242ac130004
    if(token !== ACCESS_TOKEN)
        return next(new ErrorHandler(
            errors.UNAUTHORIZED.message,
            UNAUTHORIZED,
            errors.UNAUTHORIZED.customCode
        ));

    next();
};
