const Author = require('./author');
const Category = require('./category');
const Ingredient = require('./ingredient');
const Meal = require('./meal');
const Swap = require('./swap');

Author.hasMany(Meal, {
    foreignKey: 'author_id',
    as: 'meals'
});

Meal.belongsTo(Author, {
    foreignKey: 'author_id',
    as: 'author'
});

Meal.hasMany(Swap, {
    foreignKey: 'requested_meal_id',
    as: 'swapsRequest'
});

Meal.hasMany(Swap, {
    foreignKey: 'offered_meal_id',
    as: 'swapsOffer'
});

Swap.belongsTo(Meal, {
    foreignKey: 'requested_meal_id',
    as: 'mealRequest'
});

Swap.belongsTo(Meal, {
    foreignKey: 'offered_meal_id',
    as: 'mealOffer'
});

Meal.belongsToMany(Category, {
    foreignKey: 'id_meal',
    otherKey: 'id_category',
    through: 'meal_category_associate',
    as: 'categories'
});

Category.belongsToMany(Meal, {
    foreignKey: 'id_category',
    otherKey: 'id_meal',
    through: 'meal_category_associate',
    as: 'meals'
});

Meal.belongsToMany(Ingredient, {
    foreignKey: 'id_meal',
    otherKey: 'id_ingredient',
    through: 'meal_ingredient_associate',
    as: 'ingredients',
    timestamps: false,
    hooks: true
});

Ingredient.belongsToMany(Meal, {
    foreignKey: 'id_ingredient',
    otherKey: 'id_meal',
    through: 'meal_ingredient_associate',
    as: 'meals',
    timestamps: false,
    hooks: true
});


module.exports = {
    Author,
    Category,
    Ingredient,
    Meal
};
