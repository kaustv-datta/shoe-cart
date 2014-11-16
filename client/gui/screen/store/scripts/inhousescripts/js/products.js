function createProductThumbs (products) {

    var $container = $('#product-container');
    var thumbs = '';

    $container.empty();

    for (var productCount = 0; productCount < products.length; productCount++) {
        var product = products[productCount];

        thumbs += '<div class="mix product-thumb">' +
            '<img class="thumb-img" src="../img/categories/' + product.img + '.png" />' +
            '</div>';
    }

    $container.append(thumbs);
    $container.mixItUp();
}