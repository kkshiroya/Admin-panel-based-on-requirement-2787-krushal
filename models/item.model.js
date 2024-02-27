const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        require: true,
    },
    itemPrice: {
        type: String,
        require: true,
    },
    itemDescription: {
        type: String,
        require: true,
    },  
    catagary:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"catagarySchema",
    }
});

const item = mongoose .model("itemSchema", itemSchema);
module.exports = item;