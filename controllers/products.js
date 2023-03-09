const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {pageTitle: 'Add product', path: '/add-product'});
};

exports.postAddProduct = (req, res, next) => {
    const prod = new Product(req.body.title);
    prod.save();
    res.redirect('/');
};

exports.getProducts = (req, res) => {
    res.render('shop', {pageTitle:'Shop', path:'/', prods: Product.fetchAll(), title: 'My shop'});
};
