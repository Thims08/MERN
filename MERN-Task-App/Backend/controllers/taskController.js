const Task=require("../model/taskModel");

const gethomepage = (req,res) => {
    res.send("HOME PAGE");
}

const CreateTask = async (req,res) => {
    try{
        const task = await Task.create(req.body);
        res.json(task)
    }
    catch(error){
        res.status(500).json({"msg":error.message})

    }
}

const GetAllTasks = async (req,res) => {
    try{
        const task = await Task.find();
        res.json(task)
    }
    catch(error){
        res.status(500).json({"msg":error.message})

    }
}

const GetTask = async (req,res) => {
    try{
        const {id} = req.params;
        const task = await Task.findById(id);
        if(!task){
            res.json(`No id called ${id}`)
        }
        else{
            res.send("Task Deleted")
        }
    }
    catch(error){
        res.status(500).json({"msg":error.message})

    }
}

const DeleteTask = async (req,res) => {
    try{
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id);
        if(!task){
            res.json(`No id called ${id}`)
        }
        else{
            res.send("Task Deleted")
        }
        
    }
    catch(error){
        res.status(500).json({"msg":error.message})
    }
}

const UpdateWholeTask = async (req,res) => {
    try{
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate(
            {_id:id}, req.body , {new:true,runValidators:true}
        );
        res.json(task)
    }
    catch(error){
        res.status(500).json({"msg":error.message})
    }
}

const UpdatePartoftheTask = async (req,res) => {
    try{
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate(
            {_id:id}, req.body , {new:true,runValidators:true}
        );
        res.json(task)
    }
    catch(error){
        res.status(500).json({"msg":error.message})
    }
}

module.exports = {
    gethomepage,
    CreateTask,
    GetAllTasks,
    GetTask,
    DeleteTask,
    UpdateWholeTask,
    UpdatePartoftheTask
}