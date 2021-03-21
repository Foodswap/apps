const Category = require('../models/category');

const categoryController = {

    getCategories: async (request, response) => {
        const type = request.params.type
        try {
            const categories = await Category.findAll({ 
                where: {
                    type:type
                }
            });

            response
                .status(200)
                .json(categories)
            ;
        } catch (error) {
            console.log(error);
            response.status(500);
        };


    }
};

module.exports = categoryController;