'use strict';

const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const homeRoutes = require('./routes');
const blogRoutes = require('./routes/blog');

app.disable('x-powered-by');
app.set('view engine', 'pug');

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/', homeRoutes);
app.use('/blog', blogRoutes);


app.listen(port);