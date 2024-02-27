const Joi = require("joi");

const addOrder = {
  body: Joi.object().keys({
    time: Joi.string().required().trim(),
    Bill: Joi.string().required().trim(),
    address: Joi.string().required().trim(),
    item: Joi.string().required().trim(),
    catagary: Joi.string().required(),
    user: Joi.string().required(),

  }),
};
module.exports = {
  addOrder,
};
