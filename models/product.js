const mongoose = require("mongoose");

const {ObjectId} = mongoose.Schema;

const productScheme = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        trim: true,
        maxlength: 32,
    },
    description:{
        type: String,
        required: true,
        trim:true,
        maxlength:2000,
    },
    price:{
        type:Number,
        required: true,
        maxlength:32,
        trim: true
    },
    category:{
        type: ObjectId,
        ref: "Category",
        required: true,
    },
    stock:{
        type: Number,
    },
    sold:{
        type:Number,
    },
    photo:{
        data:Buffer,
        contentType:String
    }
},{timestamps:true })

module.exports = mongoose.model("Product",productScheme);