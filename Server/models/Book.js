const  mongoose = require('mongoose')

const Comments=mongoose.Schema({
    user_id:{type:String},
    Title:{type:String},
    Body:{type:String,required:true},
    Data:{type:Date}
});
const Author=mongoose.Schema({
    First_name:{type:String,index:true},
    Middle_name:{type:String},
    Last_name:{type:String},
    Birth_day:{type:Date},
    Country:{type:String}
});

const Book=mongoose.Schema({
book_id:{type:String,required:true,index:true },
Title:{type:String,required:true,index:true },
TotalPage:{type:Number,required:true },
ISBN:{type:String,required:true,index:true },
publish_date:{type:Date,required:true},
Edition:{type:String,required:true},
comment:[Comments],
Authors:[Author]
}
);




module.exports=mongoose.model('Books',Book);



