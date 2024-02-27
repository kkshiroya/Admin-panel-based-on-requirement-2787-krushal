const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  itemName: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  item:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"itemSchema",
  },
  catagary:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"catagarySchema",
  }
});
const menu = mongoose.model("menuSchema", menuSchema);
module.exports = menu;
