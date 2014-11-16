$(function () {
    GetCategories.execute(createCategoryThumbs);

    // Handle click on category thumbs
    $('body').on('click', '.category-thumb', function (event) {

        var category = $(this).attr('data-category-label');

        GetProducts.execute(function (products) {
            var productsInCategory = [];

            for (var productCount = 0; productCount < products.length; productCount++) {
                var product = products[productCount];

                if (product.categories.indexOf(category) !== -1) {
                    productsInCategory.push(product);
                }
            }

            createProductThumbs(productsInCategory);
        });

    });
});