

const TaskForm = ({name,handleinputchange,createtask}) => {
  return (
    <form className="task-form" onSubmit={createtask}>
        <input type="text" placeholder="Enter Task Here" 
        name="name" value={name} onChange={handleinputchange}/>
        <button type="submit">Add</button>

    </form>
  )
}

export default TaskForm