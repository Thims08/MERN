
// METHOD 1 TO CONNECT TO MONGO DB (LONGER METHOD)

const mongoose = require("mongoose");

const connectDB = async () => {
    try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo DB Connected");
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
    
};

module.exports = connectDB;

//USE THE BELOW CODE FOR METHOD 1 IN server.js 

//const Serverstart  = async () => {
//    try{
//        await connectDB();
//        app.listen(PORT, () => {
//            console.log(`Port in ${PORT}`);
//        })
//    }
//    catch(error){
//        console.log(error)
//    }
//};
//Serverstart();