const Joi = require("joi");

const registerValidation = (body) => {
  const schema = {
    name: Joi.string().required().max(50),
    email: Joi.string().min(6).email().required(),
    gender: Joi.string().required(),
    sem: Joi.string().required(),
    branch: Joi.string().required(),
    weight: Joi.number().required(),
    bloodtype: Joi.string().required(),
    healthcon: Joi.string().required(),
  };

  return Joi.validate(body, schema);
};

module.exports.registerValidation = registerValidation;
