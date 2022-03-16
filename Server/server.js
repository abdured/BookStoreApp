const  express = require('express');
const mongoose = require('mongoose');
const UserRoute =require('./routes/users');
const BookRoute =require('./routes/book');
const cors = require('cors');
require("dotenv").config();
const app = express();

const DbURI = process.env.ATLAS_URI;
mongoose
	.connect(DbURI, { useNewUrlParser: true })
	.then(() => {
        console.log(`DB successfully connected`)
       
	})


app.use(express.json())
app.use(cors())


app.use('/api/users',UserRoute);
app.use('/api/books',BookRoute);

app.use((err,req,res,next)=>{
	console.error(err);
})
const port =process.env.PORT;
app.listen(port,()=>console.log(`Server Started at ${port} Sucessfully`))

