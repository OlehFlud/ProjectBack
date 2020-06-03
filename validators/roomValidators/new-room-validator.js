const Joi = require('joi');

module.exports = Joi.object().keys({

    price:Joi.number().integer().min(1).max(500000).required(),
    square:Joi.number().integer().min(1).max(300).required(),
    amount: Joi.number().integer().min(2).max(60),
    nameRoom: Joi.string().trim().min(2).max(60).required().allow('AX-12'),
    about: Joi.string().trim().min(2).max(60),
    park: Joi.number().integer().min(2).max(60)
});
