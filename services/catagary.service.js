const { catagarySchema } = require("../models");

const getcatagary = () => {
  return catagarySchema.find();
};

const addcatagary = (body) => {
  return catagarySchema.create(body);
};

const deletecatagary = (id) => {
  return catagarySchema.findByIdAndelete(id);
};

const updatecatagary = (id, body) => {
  return catagarySchema.findByIdAndUpdate(id, { $set: body });
};

module.exports = {
  getcatagary,addcatagary,updatecatagary,deletecatagary,
};
