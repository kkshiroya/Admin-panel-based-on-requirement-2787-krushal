const { orderSchema } = require("../models");

const addOrder = (body) => {
  return orderSchema.create(body);
};
const getOrder = () => {
  return orderSchema.find().populate("userSchema");
};

const deleteOrder = (id) => {
  return orderSchema.findByIdAndDelete(id);
};
const updateOrder = (id,body) => {
  return orderSchema.findByIdAndUpdate(id,body);
};

module.exports = {
 addOrder,deleteOrder, updateOrder, getOrder,
 
};
