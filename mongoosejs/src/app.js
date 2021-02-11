const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Blogger",{useNewUrlParser : true,useUnifiedTopology :true} )
.then(() => console.log("connection successfull .........."))
.catch((err) => console.log(err)) ;

const bloggerschema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
        trim : true
    },

    email_id:{
        lowercase : true,
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

    active :{
        type : Boolean,
        required : true
    },

    rating :{
        type : Number,
        required : false
    }
    
});

const Post_Collection = new mongoose.model('Post_Collection',bloggerschema);

const createDocument = async () =>{
    try{
        const input_first = new Post_Collection({
            name :"           Anubhav          " ,
            email_id : "anubhav.nag_cs18@gla.ac.in",
            content : "Gaming",
            phone : 7894654132,
            active : true,
            rating : 8.9
        })

        const input_second = new Post_Collection({
            name :"Tushar        " ,
            email_id : "TUSHAR.GUPTA_cs18@gla.ac.in",
            content : "Gaming",
            phone : 7894654132,
            active : true,
            rating : 8.9
        })

        const input_third = new Post_Collection({
            name :"Kartik" ,
            email_id : "KARTIK.AGRWAL_cs18@gla.ac.in",
            content : "Gaming",
            phone : 7894654132,
            active : true,
            rating : 8.9
        })

        const input_fourth = new Post_Collection({
            name :"Yash" ,
            email_id : "yash.gautam_cs18@gla.ac.in",
            content : "Gaming",
            phone : 7894654132,
            active : true,
            rating : 8.9
        })

        const result = await Post_Collection.insertMany([input_first,input_second,input_third,input_fourth]);
        console.log(result);
    }
    catch(err){
        console.log("Document ound not be inserted because : ");
    }
}

createDocument();

const updateDocument = async(_id) =>{
    try{
        const result = await Post_Collection.updateOne({_id},{
            $set :{
                name : "Seth Ji"
            }
        });
        
        console.log("One Document Updated");
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

updateDocument("60256c522d466b3b6063a234");

const deleteDocument = async(_id) => {
    try{
        const result = await Post_Collection.deleteOne({_id});
        console.log("One Document Deleted");
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

deleteDocument("60256c522d466b3b6063a234");

