'use strict';

const express = require('express');
const logger = require('./logger').logger;

// Constants
const PORT = 3008;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    logger.debug({ req: req.originalUrl, method: req.method }, 'Received a Request');
    logger.info({ req: req.originalUrl, method: req.method, resStatus: res.statusCode }, 'Sending Response');
    logger.error('There was no Error');
    res.send('Welcome Tarun Family to Fargate world!!! !Running Internal Application!!..\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
