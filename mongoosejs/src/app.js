const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Blogger",{useNewUrlParser : true,useUnifiedTopology :true} )
.then(() => console.log("connection successfull .........."))
.catch((err) => console.log(err)) ;

const bloggerSchema = new mongoose.Schema({
    name:{
        type :String,
        required : true
    },

    email_id:{
        type : String,
        required : true
    },

    content :{
        type : String,
        required : true
    },

    phone :{
        type : Number,
        required : false
    },

    rating :{
        type : Float64Array,
        required : false
    }
    
})