const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {pageTitle: 'Add product', path: '/add-product'});
};

exports.postAddProduct = (req, res, next) => {
    const prod = new Product(req.body.title);
    prod.save().then(() => {
        res.redirect('/');
    });
};

exports.getProducts = (req, res) => {
    Product.fetchAll().then((p) => {
        res.render('shop', {pageTitle: 'Shop', path: '/', prods: p});
    });
};
