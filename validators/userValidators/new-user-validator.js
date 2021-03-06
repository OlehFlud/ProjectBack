const Joi = require('joi');

const {REGEX} = require('../../constant');

module.exports = Joi.object().keys({

    name: Joi.string().trim().alphanum().min(2).max(60),
    surname: Joi.string().trim().alphanum().min(2).max(60),
    email: Joi.string().regex(REGEX.EMAIL).required(),
    password: Joi.string().regex(REGEX.PASSWORD).required(),
    status_id: Joi.number(),
    role_id: Joi.number()
});
