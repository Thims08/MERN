import { MdModeEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
const Task = () => {
  return (
    <div className="task">
        <p>
            <b>1. </b>Task 1
        </p>
        <div className="task-icons">
        <MdModeEdit />
        <FaCheck />
        <FaRegTrashAlt />
        </div>
    </div>
    
  )
}

export default Task