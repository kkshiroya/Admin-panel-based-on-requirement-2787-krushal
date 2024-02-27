const { itemSchema } = require("../models");

const getitem = () => {
  return itemSchema.find();
};

const additem = (body) => {
  return itemSchema.create(body);
};

const deleteitem = (id) => {
  return itemSchema.findByIdAndelete(id);
};

const updateitem = (id, body) => {
  return itemSchema.findByIdAndUpdate(id, { $set: body });
};

module.exports = {
  getitem,additem,updateitem,deleteitem,
};
