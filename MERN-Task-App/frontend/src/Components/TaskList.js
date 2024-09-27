import TaskForm from "./TaskForm"
import Task from "./Task"
import { useEffect, useState } from "react"
import axios from "axios"
import {toast} from "react-toastify"
import loader from "../loader.gif"


const TaskList = () => {
  const [formData,setformData] = useState ({
    name : "",
    completed : false
  })
  
  const [taskss,settaskss] = useState ([])
  const [completedtasks,setcompletedtasks] = useState ([])
  const [isLoading,setisLoading]=useState(false)
  const [isEditing,setisEditing]=useState(false)
  const [taskID,settaskID]=useState()
  
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
    try{
      await axios.delete(`http://localhost:5000/api/tasks/${identity}`)
      getTasks()
    }
    catch(error){
      toast.error(error.message)
      setisLoading(false)
    }
  }


  useEffect ( () => {
    getTasks()
  },[])

  useEffect ( () => {
    setcompletedtasks(taskss.filter((e) => {
      
      return e.completed===true
      
  
    }))
  },[taskss])

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
  
  const getSingletask = async (task) => {
      setformData({name:task.name,completed:false})
      setisEditing(true)
      settaskID(task._id)
      
  }

  const updatetask = async (e) => {
    e.preventDefault()
    if(name === ""){
      return toast.error("Please Enter valid task")
 }
    try{
      await axios.put(`http://localhost:5000/api/tasks/${taskID}`,formData)
      setformData ({
        ...formData,
        name : ""
       })
      getTasks()
    }
    catch(error){
      toast.error(error.message)
      setisLoading(false)
    }
    setisEditing(false)
  } 

  const completedfunction = async (task) => {
    const newformdata = {
      name:task.name,
      completed: !(task.completed)
    }
    try{
      await axios.put(`http://localhost:5000/api/tasks/${task._id}`,newformdata)
      setformData ({
        ...formData,
        name : ""
       })
      getTasks()
    }
    catch(error){
      toast.error(error.message)
      setisLoading(false)
    }
    
    
    
  } 
  
   console.log(completedtasks)
  
 
  //const updatetask = async (identity) => {
  //      console.log(56363636336)
  //}
  //console.log(formData)
  
  return (
    <div>
        <h2>Task Manager</h2>
        <TaskForm name = {name} handleinputchange ={handleinputchange} createtask={createtask} isEditing={isEditing} updatetask={updatetask}/>
        <div className="--flex-between --pb">
            
            <p>
              <b>Total Tasks:</b> {taskss.length}
            </p>
            <p>
            <b>Tasks Completed:</b> {completedtasks.length}
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
              <Task key={ele._id} i={i} ele={ele} deleteTasks={deleteTasks} getSingletask={getSingletask} completedfunction={completedfunction}/>
            )
            })
          
            
        
         )
         }
    </div>
  )
}

export default TaskList