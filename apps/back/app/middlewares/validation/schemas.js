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
    })
  
  }; 
  module.exports = schemas;