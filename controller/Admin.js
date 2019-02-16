const Product = require('../models/product');
const Cart = require('../models/cart');

exports.GetAddProduct = (req, res, next) => {
    res.render('Admin/add-product',
        {
            TitlePage: 'Add Product',
            Path: '/admin/add-product',

        });
}
exports.PostAddProduct = (req, res, next) => {
    const Title = req.body.title;
    const ImageURL = req.body.imageURL;
    const Price = req.body.Price;
    const Description= req.body.Description;

    console.log(Title,ImageURL,Price,Description);    
    let pro_duct = new Product(Title,ImageURL,Price,Description);
    pro_duct.save();
    res.redirect('/');
}
exports.GetAdminProducts = (req, res, next) => {

    Product.fetchAll(product => {
        res.render('Admin/products',
            {
                TitlePage: 'Admin Products',
                Path: '/admin/products',
                prods: product
            }
        );
    });
}

