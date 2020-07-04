const express = require('express');
const morgan = require('morgan');

const {PORT} = require('./config');
const router = require('./routes');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    next();
});

app.use(express.json());
app.use(express.urlencoded());
app.use(router);
app.use(morgan('dev'));

app.listen(PORT, () => {
    console.log(`${PORT} is working...`);
});
