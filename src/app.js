const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const indexRouter = require('./routes/index');
const apiRouter = require('./routes/apiRoutes');
const errorHandler = require('./middlewares/errorHandler');


const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/static', express.static(path.join(__dirname, '..', 'public')));


app.use('/', indexRouter);
app.use('/api', apiRouter);


app.use(errorHandler);


module.exports = app;