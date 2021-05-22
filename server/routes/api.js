'use strict';
const express = require('express');
const labRouter = require('./lab_information')

let apiRouter = express.Router()
    .use('/', labRouter)

module.exports = apiRouter;