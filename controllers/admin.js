const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {pageTitle: 'Add product', path: '/admin/add-product'});
};

exports.postAddProduct = (req, res, next) => {
    const prod = new Product(req.body.title, req.body.imageUrl, req.body.description, req.body.price);
    prod.save().then(() => {
        res.redirect('/');
    });
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll().then((p) => {
        res.render('admin/products', {pageTitle: 'Admin products', path: '/admin/products', prods: p});
    });
}