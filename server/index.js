var http = require('http'),
    express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    Category = require('./models/categories'),
    Product = require('./models/products');

mongoose.connect('mongodb://localhost/zivame');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {

    console.log('Successfully connected to database.');

    var app = express();

    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');

    // Fetch all categories
    app.get('/categories', function (req, res) {
    console.log('/categories');
        Category.find({}, function (err, categories) {
            if (err) {
                console.log('Error');
            } else {
                res.jsonp(categories);
            }
        });

    });

    // Fetch all products
    app.get('/products', function (req, res) {
        console.log('/products');
        Product.find({}, function (err, products) {
            if (err) {
                console.log('Error');
            } else {
                res.jsonp(products);
            }
        });

    });

    // Default - fetch all categories
    app.get('/', function (req, res) {

        Category.find({}, function (err, categories) {
            if (err) {
                console.log('Error');
            } else {
                res.json(categories);
            }
        });

    });

    app.use(function (req,res) {
        res.render('404', {url:req.url});
    });

    // Error handling
    http.createServer(app).listen(app.get('port'), function(){
        console.log('Express server listening on port ' + app.get('port'));
    });

});