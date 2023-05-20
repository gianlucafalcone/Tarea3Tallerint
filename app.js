
'use strict';
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const routes = require('./src/routes');
const db = require('./src/models')
const PORT = process.env.PORT || 3000;


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


routes(app);

db.sequelize.sync().then(() => {
    app.listen(process.env.PORT, () => { 
      console.log(`Running on http://localhost:${process.env.PORT}`);
    });
});

module.exports = app;