const Joi = require('joi');

const userValidationSchema = require('../../validators/userValidators/new-user-validator');
const ErrorHandler = require('../../error/ErrorHandler');

module.exports = (req, res, next) => {

    try {
        const user = req.body;

        const {error} = Joi.validate(user, userValidationSchema);

        if (error){

            return next(new ErrorHandler(error.details[0].message,400))
        }

        console.log('________________________________');
        console.log(error.details[0].message);
        console.log('________________________________');

        next()

    } catch (e) {
        res.status(400).json(e.message);
    }

};
