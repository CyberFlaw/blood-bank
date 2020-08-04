const Joi = require("joi");

const registerValidation = (body) => {
  const schema = {
    branch: Joi.string().required(),
    bloodtype: Joi.string().required(),
  };

  return Joi.validate(body, schema);
};

module.exports.registerValidation = registerValidation;
