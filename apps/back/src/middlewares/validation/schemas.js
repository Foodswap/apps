const Joi = require('joi');
const schemas = {
	signup: Joi.object().keys({
		username: Joi.string().min(3).max(200).required(),
		email: Joi.string().max(200).email().required(),
		password: Joi.string().min(3).max(200).required(),
		city: Joi.string().required()
	}),

	login: Joi.object().keys({
		email: Joi.string().max(200).email().required(),
		password: Joi.string().min(3).max(200).required()
	}),

	swaps: Joi.object().keys({
		requested_meal_id: Joi.required(),
		offered_meal_id: Joi.required()
	}),

	createMeal: Joi.object().keys({
		name: Joi.string().min(2).max(200).required(),
		description: Joi.string().min(2).required(),
		portion: Joi.required(),
		city: Joi.string().min(2).max(200).required(),
		online: Joi.required(),
		author_id: Joi.required(),
		ingredients: Joi.required(),
		categories: Joi.required()
	})
};
module.exports = schemas;
