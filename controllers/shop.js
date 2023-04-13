const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res) => {
    Product.fetchAll().then((p) => {
        res.render('shop/product-list', { pageTitle: 'Shop', path: '/products', prods: p });
    });
};

exports.getProduct = (req, res) => {
    Product.findById(req.params.productId).then(product => {
        res.render('shop/product-detail', { title: product.title, image: product.imageUrl, description: product.description, price: product.price, productId: product.id });
    });
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll().then((p) => {
        res.render('shop/index', { pageTitle: 'Shop', path: '/', prods: p });
    });
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart', { pageTitle: 'Cart', path: '/cart' });
}

exports.postCart = (req, res, next) => {
    Product.findById(req.body.productId).then(product => {
        Cart.addProduct(product.id, product.price);
        res.render('shop/cart');
    });

}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', { pageTitle: 'Checkout', path: '/checkout' });
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', { pageTitle: 'Orders', path: '/orders' });
}