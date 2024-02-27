const Joi = require("joi");

const addcatagary = {
  body: Joi.object().keys({
    catagaryName: Joi.string().required().trim(),
    admin: Joi.string().required().trim(),
  }),
};

module.exports = {
    addcatagary,
};
