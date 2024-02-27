const { adminSchema } = require("../models");

const getadmin = () => {
  return adminSchema.find();
};

const addadmin = (body) => {
  return adminSchema.create(body);
};

const deleteadmin = (id) => {
  return adminSchema.findByIdAndelete(id);
};

const updateadmin = (id, body) => {
  return adminSchema.findByIdAndUpdate(id, { $set: body });
};

module.exports = {
  getadmin,addadmin,updateadmin,deleteadmin,
};
