const { Router } = require('express');

const menuRouter = require('./menu');

const router = Router();

router.use('/menu', menuRouter);

router.use('*', (err, req, res, next) => {
    const {message, statusCode, customStatusCode} = err;

    res.status(statusCode).json({message, customStatusCode});
});

module.exports = router;
