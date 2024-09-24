import TaskForm from "./TaskForm"
import Task from "./Task"
import { useState } from "react"
import axios from "axios"
import {toast} from "react-toastify"


const TaskList = () => {
  const [formData,setformData] = useState ({
    name : "",
    completed : false
  })
  
  const {name} = formData;
  
  const handleinputchange = (e) => {
       const value = e.target.value;
       setformData ({
        ...formData,
        name : value
      })
  }

  const createtask = async (e) => {
       e.preventDefault()
       console.log(formData)
       if(name === ""){
            return toast.error("Please Enter valid task")
       }
       try{
           await axios.post(`/api/tasks`,formData)
           toast.success("Task added")
           setformData ({
            ...formData,
            name : ""
           })
       }
       catch(error){
          toast.error(error.message)
       }
  }

  
  
  return (
    <div>
        <h2>Task Manager</h2>
        <TaskForm name = {name} handleinputchange ={handleinputchange} createtask={createtask}/>
        <div className="--flex-between --pb">
            
            <p>
              <b>Total Tasks:</b> 0
            </p>
            <p>
            <b>Tasks Completed:</b> 0
            </p>
          </div>
          
          <hr/>
          <Task/>
    </div>
  )
}

export default TaskList