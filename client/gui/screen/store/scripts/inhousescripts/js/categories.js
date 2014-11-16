function createCategoryThumbs (categories) {

    var $container = $('#product-container');
    var thumbs = '';

    $container.empty();

    for (var categoryCount = 0; categoryCount < categories.length; categoryCount++) {
        var category = categories[categoryCount];

        thumbs += '<div class="mix category-thumb" data-category-label="' + category.label + '">' +
                '<img class="thumb-img" src="../img/categories/' + category.img + '.png" />' +
            '</div>';
    }

    $container.append(thumbs);
    $container.mixItUp();
}