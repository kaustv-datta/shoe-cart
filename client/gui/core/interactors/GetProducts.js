GetProducts = {

    execute: function (callback) {

        $.ajax({
            url: 'http://localhost:3000/products',
            dataType: 'jsonp',
            success: function (data) {
                ApplicationContext.products = data;

                if (callback) {
                    callback(data);
                }
            },
            error: function () {
                console.log(arguments);
            }
        });

    }

};