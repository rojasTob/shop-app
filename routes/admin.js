const express = require('express');
const path = require('path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    products.push({title: req.body.title});
    res.redirect('/')
});

exports.router = router;
exports.products = products;
