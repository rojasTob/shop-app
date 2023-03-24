const Product = require('../models/product');

exports.getProducts = (req, res) => {
    Product.fetchAll().then((p) => {
        res.render('shop/product-list', {pageTitle: 'Shop', path: '/products', prods: p});
    });
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll().then((p) => {
        res.render('shop/index', {pageTitle: 'Shop', path: '/', prods: p});
    });
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {pageTitle:'Cart', path:'/cart'});
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {pageTitle:'Checkout', path:'/checkout'});
}
