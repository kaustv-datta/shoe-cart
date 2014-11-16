GetCategories = {

    execute: function (callback) {

        $.ajax({
            url: 'http://localhost:3000/categories',
            dataType: 'jsonp',
            success: function (data) {
                ApplicationContext.categories = data;

                if (callback) {
                    callback(data);
                }
            }
        });

    }

};