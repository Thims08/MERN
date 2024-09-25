import TaskForm from "./TaskForm"
import Task from "./Task"
import { useEffect, useState } from "react"
import axios from "axios"
import {toast} from "react-toastify"
import loader from "../tenor.gif"

const TaskList = () => {
  const [formData,setformData] = useState ({
    name : "",
    completed : false
  })
  const [taskss,settaskss] = useState ([])
  const [completedtasks,setcompletedtasks] = useState ([])
  const [isLoading,setisLoading]=useState(false)
  
  const {name} = formData;
  
  const handleinputchange = (e) => {
       const value = e.target.value;
       setformData ({
        ...formData,
        name : value
      })
  }

  const getTasks = async () => {
    setisLoading(true)
    try{
      const response = await axios.get(`http://localhost:5000/api/tasks`)
      const {data}= response
      settaskss(data)
      console.log(response)
      setisLoading(false)
    }
    catch(error){
      toast.error(error.message)
      setisLoading(false)
    }
  }

  useEffect ( () => {
    getTasks()
  },[])

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
          {
            isLoading && (
               <div className="--flex-center">
                <img src={loader} alt="iiii"/>

               </div>
            )
            
            
          }
          <Task/>
    </div>
  )
}

export default TaskList