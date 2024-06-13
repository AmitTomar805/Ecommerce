// importing express modules in our application
const express=require('express');
const dbConnect = require('./config/dbConnect');
// creating instance of express application
const app=express();
// importing dotenv module and calling it's config method to load the environment variables
const dotenv=require('dotenv').config();
const PORT=process.env.PORT || 4000;
const authRouter=require('./routes/authRoute');
const bodyParser = require('body-parser');
const { notFound, errorHandlerApi } = require('./middleware/errorHandler');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
dbConnect();
app.use('/api/User',authRouter);
app.use(errorHandlerApi);
app.use(notFound);
// arrow function to display on which port server is running
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})