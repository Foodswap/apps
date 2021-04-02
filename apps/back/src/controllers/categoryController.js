const Category = require('../models/category');

const categoryController = {
  /**
   * GET /v1/categories/{type}
   *
   * @summary Get Category by type
   * @tags Category
   *
   * @param {string} type.path - type of Category
   *
   * @return {AuthorDto} 200 - success response - application/json
   * @return {ErrorDto} 404 - bad request response
   * @return {ErrorDto} 500 - error on server
   *
   * @example response - 200 - a category by kitchen type returns by api
   * {
   *   "id": "1",
   *   "type": "kitchen",
   *   "name": "Asiatique"
   * }
   * @example response - 200 - a category by dish type returns by api
   * {
   *   "id": "2",
   *   "type": "dish",
   *   "name": "Plat"
   * }
   * @example response - 404 - an error of bad request
   * {
   *   "error": 404,
   *   "message": "Category not found"
   * }
   * @example response - 500 - an error on server
   * {
   *   "error": 500,
   *   "message": "Internal server error"
   * }
   */

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
