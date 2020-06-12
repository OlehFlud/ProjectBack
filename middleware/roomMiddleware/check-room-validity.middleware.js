const Joi = require('joi');

const roomValidationSchema = require('../../validators/roomValidators/new-room-validator');
const ErrorHandler = require('../../error/ErrorHandler');

module.exports = (req, res, next) => {

    try {
        const room = req.body;
        const{error} = Joi.validate(room,roomValidationSchema);

        if (error){
            return next(new ErrorHandler(error.details[0].message,400))
        }

        // console.log('_______________________________');
        // console.log(error.details[0].message);
        // console.log('_______________________________');

        next()
    }   catch (e) {

        res.status(400).json(e.message);
    }

};
