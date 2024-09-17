const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
    {
        name : {
            type: String,
            required: [true,"Please enter a name"]
        },
        completed : {
            type: Boolean,
            required: true,
            defaut: false
        }

    },
    {
        timestamps: true
    }
)

const Task = mongoose.model("Task",taskSchema);

module.exports = Task