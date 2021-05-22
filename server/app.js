const { StatusCodes } = require('http-status-codes');
const express = require('express')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet')

var apiRouter = require('./routes/api');
//const cors = require('cors');


const app = express()
app.use(logger('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet())


app.use('/', apiRouter);


// Error function
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        return res.status(StatusCodes.UNAUTHORIZED).send('Invalid authentication token');
    }
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    return res.sendStatus(err.status || 500);
});

module.exports = app;
    


