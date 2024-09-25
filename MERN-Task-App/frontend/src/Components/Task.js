import { MdModeEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
const Task = () => {

  
  return (
    <div className="task">
        
        <div className="task-icons">
        <MdModeEdit />
        <FaCheck />
        <FaRegTrashAlt />
        </div>
    </div>
    
  )
}

export default Task