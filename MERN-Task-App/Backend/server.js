const dotenv=require("dotenv").config()
const exp = require ("express");
const mongoose = require("mongoose");

const app = exp();

app.get("/", (req,res) => {
    res.send("HOME PAGE");
})

const PORT = process.env.PORT || 5000;

mongoose
        .connect(process.env.MONGO_URI)
        .then( () => {
                app.listen(PORT, () => {
                    console.log(`Port in ${PORT}`);
                })
        })
        .catch( (error) => console.log(error));   
        


