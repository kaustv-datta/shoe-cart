var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    mainImg: String,
    otherImg: Array,
    categories: Array,
    price: Number,
    specialPrice: Number,
    descr: String,
    sizes: Array
});
var Product = mongoose.model('Product', productSchema);

module.exports = Product;