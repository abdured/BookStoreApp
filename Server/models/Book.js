const  mongoose = require('mongoose')

const Comments=mongoose.Schema({
    user_id:{type:String},
    Title:{type:String},
    Body:{type:String,required:true},
    Date:{type:String}
});

const Book=mongoose.Schema({
Authors:{type:String,required:true},
Edition:{type:String,required:true},
ISBN:{type:String,required:true,index:true },
Title:{type:String,required:true,index:true },
TotalPage:{type:Number,required:true },
book_id:{type:Number,required:true,index:true },
publish_date:{type:Date,required:true},
comment:[Comments],
file:{type:String},
}
);




module.exports=mongoose.model('Books',Book);



