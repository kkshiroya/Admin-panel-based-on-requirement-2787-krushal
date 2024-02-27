const { menuSchema } = require("../models");

const getMenu = () => {
  return menuSchema.find();
};

const addMenu = (body) => {
  return menuSchema.create(body);
};

const deleteMenu = (id) => {
  return menuSchema.findByIdAndelete(id);
};

const updateMenu = (id, body) => {
  return menuSchema.findByIdAndUpdate(id, { $set: body });
};

module.exports = {
  getMenu,addMenu,updateMenu,deleteMenu,
};
