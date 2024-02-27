const joi = require("joi");

const additem = {
  body: joi.object().keys({
    itemName: joi.string().required().trim(),
    itemPrice: joi.string().required().trim(),
    itemDescription: joi.string().required().trim(),
    catagaryName: joi.string().required(),
  }),
};

module.exports = {
    additem,
};
