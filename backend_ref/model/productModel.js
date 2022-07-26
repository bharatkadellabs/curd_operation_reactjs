const mongoose = require('mongoose')
 const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    subTitle : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    mrpPrice : {
        type : Number,
        required : true
    }
})

 module.exports = mongoose.model("product",ProductSchema);

