

const TaskForm = ({name,handleinputchange,createtask,isEditing,updatetask}) => {
  return (
    <div>
    {
      (!isEditing)?(
      
    <form className="task-form" onSubmit={createtask}>
        <input type="text" placeholder="Enter Task Here" 
        name="name" value={name} onChange={handleinputchange}/>
        <button type="submit">Add</button>

    </form>):(
      <form className="task-form" onSubmit={updatetask}>
      <input type="text" placeholder="Enter Task Here" 
      name="name" value={name} onChange={handleinputchange}/>
      <button type="submit">Edit</button>

      </form>
    )
  
    }
  </div>
  )
}

export default TaskForm