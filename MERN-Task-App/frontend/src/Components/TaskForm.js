

const TaskForm = ({name,handleinputchange,createtask,isEditing,updatetask}) => {
  return (
    
    <form className="task-form" onSubmit={(isEditing)?updatetask:createtask}>
        <input type="text" placeholder="Enter Task Here" 
        name="name" value={name} onChange={handleinputchange}/>
        <button type="submit">{(isEditing)?"Edit":"Add"}</button>
    </form>
  )
}

export default TaskForm