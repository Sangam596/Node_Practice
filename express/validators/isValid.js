const Joi = require('Joi');

const isValid = (course) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    })
    return schema.validate(course);

}

module.exports=isValid;