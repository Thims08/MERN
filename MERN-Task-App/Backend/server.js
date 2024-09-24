const dotenv=require("dotenv").config();
const exp = require ("express");
const mongoose = require("mongoose");
const Task=require("./model/taskModel");
const taskroutes = require("./routes/TaskRoute")
const cors = require("cors")

const app = exp();

app.use(exp.json())
app.use(cors())
app.use(taskroutes)


const PORT = process.env.PORT || 5000;

mongoose
        .connect(process.env.MONGO_URI)
        .then( () => {
                app.listen(PORT, () => {
                    console.log(`Port in ${PORT}`);
                })
        })
        .catch( (error) => console.log(error));   
        


