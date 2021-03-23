const Category = require('../models/category');

const categoryController = {
  getCategories: async (request, response) => {
    const { type } = request.params;
    const query = {
      where: {
        type,
      },
    };

    if (type === 'kitchen') {
      query.order = [['name', 'ASC']];
    }

    try {
      const categories = await Category.findAll(query);

      response.status(200).json(categories);
    } catch (error) {
      response.status(500);
    }
  },
};

module.exports = categoryController;
