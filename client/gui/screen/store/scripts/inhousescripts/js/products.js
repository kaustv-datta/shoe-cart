function createProductThumbs (products) {

    var $container = $('#product-container');
    var thumbs = '';

    $container.mixItUp('destroy', true);
    $container.empty();

    for (var productCount = 0; productCount < products.length; productCount++) {
        var product = products[productCount];

        thumbs += '<div class="mix product-thumb">' +
            '<img class="thumb-img" src="../img/products/' + product.mainImg + '.png" />' +
            '</div>';
    }

    $container.append(thumbs);
    $container.mixItUp();
}