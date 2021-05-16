'use strict';
const express = require('express');
const labRouter = require('./lab_information')

let apiRouter = express.Router()
    .use('/lab', labRouter)

module.exports = apiRouter;