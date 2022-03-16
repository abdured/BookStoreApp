const  mongoose = require('mongoose')

const Comments=mongoose.Schema({
    user_id:{type:String},
    Title:{type:String},
    Body:{type:String,required:true},
    Date:{type:String}
});
const Author=mongoose.Schema({
    First_name:{type:String,index:true},
    Middle_name:{type:String},
    Last_name:{type:String},
   
});

const Book=mongoose.Schema({
Authors:{type:String},
Edition:{type:String,required:true},
ISBN:{type:String,required:true,index:true },
Title:{type:String,required:true,index:true },
TotalPage:{type:Number,required:true },
book_id:{type:Number,required:true,index:true },
publish_date:{type:Date,required:true},
comment:[Comments],

}
);




module.exports=mongoose.model('Books',Book);



