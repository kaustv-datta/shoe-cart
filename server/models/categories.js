var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
    label: String,
    img: String
});
var Category = mongoose.model('Category', categorySchema);

module.exports = Category;