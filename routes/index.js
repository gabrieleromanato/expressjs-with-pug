'use strict';

const express = require('express');
const router = express.Router();
const data = require('../data');

router.get('/', (req, res, next) => {
    const posts = data.slice(0, 3);
    res.render('index', {
        title: 'Blog | Home',
        posts
    });
});

module.exports = router;