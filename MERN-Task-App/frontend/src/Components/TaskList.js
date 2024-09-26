import TaskForm from "./TaskForm"
import Task from "./Task"
import { useEffect, useState } from "react"
import axios from "axios"
import {toast} from "react-toastify"
import loader from "../loader.gif"
import { get } from "mongoose"

const TaskList = () => {
  const [formData,setformData] = useState ({
    name : "",
    completed : false
  })
  const [taskss,settaskss] = useState ([])
  const [completedtasks,setcompletedtasks] = useState ([])
  const [isLoading,setisLoading]=useState(false)
  const [isEditing,setisEditing]=useState(false)
  
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
      
      setisLoading(false)
    }
    catch(error){
      toast.error(error.message)
      setisLoading(false)
    }
  }

  const deleteTasks = async (identity) => {
    setisLoading(true)
    try{
      await axios.delete(`http://localhost:5000/api/tasks/${identity}`)
      getTasks()
      
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
           getTasks()
       }
       catch(error){
          toast.error(error.message)
       }
  }
  
  const changeisEditing = async (identity) => {
    setisEditing(!isEditing)
  }
  const Updatetask = async (identity) => {
        console.log(56363636336)
  }
  
  
  return (
    <div>
        <h2>Task Manager</h2>
        <TaskForm name = {name} handleinputchange ={handleinputchange} createtask={createtask} isEditing={isEditing}/>
        <div className="--flex-between --pb">
            
            <p>
              <b>Total Tasks:</b> 0
            </p>
            <p>
            <b>Tasks Completed:</b> 0
            </p>
          </div>
          
          <hr/>
         {isLoading && (
              <div className="--flex-center">
                <img src={loader} alt="iiii"/>
              </div>
         )}
         {(!isLoading && taskss.length===0)?(
             <div>
             <p>Empty , Enter Tasks</p>
             
             </div>
         ):
         (  
             
            
            taskss.map( (ele,i) => {
            return(
              <Task key={ele._id} i={i} ele={ele} deleteTasks={deleteTasks} changeisEditing={changeisEditing}/>
            )
            })
          
            
        
         )
         }
    </div>
  )
}

export default TaskList