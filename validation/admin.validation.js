const joi = require("joi");

const addadmin = {
  body: joi.object().keys({
    firstName: joi.string().required().trim(),
    lastName: joi.string().required().trim(),
    email: joi.string().required().trim(),
    password: joi.string().required().trim(),
  }),
};

module.exports = {
    addadmin,
};
