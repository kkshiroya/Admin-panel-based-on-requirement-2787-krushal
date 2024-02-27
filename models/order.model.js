const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  time: {
    type: String,
    require: true,
  },
  Bill: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  item: {
    type: String,
    require: true,
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"userSchema",
  },
  catagary:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"catagarySchema",
  }
});
const order = mongoose.model("orderScehma", orderSchema);
module.exports = order;
