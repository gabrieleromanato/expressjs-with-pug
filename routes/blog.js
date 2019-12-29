'use strict';

const express = require('express');
const router = express.Router();
const data = require('../data');

router.get('/:slug', (req, res, next) => {
    const { slug } = req.params;
    const single = data.find(post => { return post.slug === slug; });
    res.render('single', {
        title: `${single.title} | Blog`,
        post: single
    });
});

module.exports = router;