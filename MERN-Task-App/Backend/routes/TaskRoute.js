const exp = require("express");
const Task=require("../model/taskModel.js");
const router = exp.Router();

const {gethomepage,CreateTask,GetAllTasks,GetTask,DeleteTask,UpdateWholeTask,UpdatePartoftheTask}=require("../controllers/taskController.js")

router.get("/", gethomepage)

router.post("/api/tasks", CreateTask)

router.get("/api/tasks", GetAllTasks)

router.get("/api/tasks/:id", GetTask)

router.delete("/api/tasks/:id", DeleteTask)

router.put("/api/tasks/:id", UpdateWholeTask)

router.patch("/api/tasks/:id", UpdatePartoftheTask)

module.exports = router;