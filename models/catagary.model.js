const mongoose = require("mongoose");

const catagarySchema = new mongoose.Schema({
    catagaryName: {
        type: String,
        require: true,
    },
    admin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"adminSchema",
    }
});

const catagary = mongoose.model("catagarySchema", catagarySchema);
module.exports = catagary;
