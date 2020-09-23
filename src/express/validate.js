const Joi = require('joi');

exports.validateGenre = (genre) => {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(genre, schema);
}