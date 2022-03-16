const  mongoose = require('mongoose')

const Comments=mongoose.Schema({
    user_id:{type:String},
    Title:{type:String},
    Body:{type:String,required:true},
<<<<<<< HEAD
    Date:{type:String}
=======
    Data:{type:Date}
>>>>>>> 1eec277fd99947e8804f216a71463d7c95a0fe96
});
const Author=mongoose.Schema({
    First_name:{type:String,index:true},
    Middle_name:{type:String},
    Last_name:{type:String},
<<<<<<< HEAD
   
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

=======
    Birth_day:{type:Date},
    Country:{type:String}
});

const Book=mongoose.Schema({
book_id:{type:Number,required:true,index:true },
Title:{type:String,required:true,index:true },
TotalPage:{type:Number,required:true },
ISBN:{type:String,required:true,index:true },
publish_date:{type:Date,required:true},
Edition:{type:String,required:true},
comment:[Comments],
Authors:[Author]
>>>>>>> 1eec277fd99947e8804f216a71463d7c95a0fe96
}
);




module.exports=mongoose.model('Books',Book);



