const express = require('express');
const path = require('path');

const router = express.Router();

const adminData = require('./admin');

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    const products = adminData.products;
    res.render('shop', {pageTitle:'Shop', path:'/', prods: products, title: 'My shop'});
});

module.exports = router;