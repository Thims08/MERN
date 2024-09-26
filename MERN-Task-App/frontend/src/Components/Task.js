import { MdModeEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
const Task = ({ele,i,deleteTasks,changeisEditing}) => {
  
  
  return (
    <div className="task">
        
            <div>
            <p>
            <b>{i+1}.</b>
            {ele.name}
            </p>
            </div>
          
        
        <div className="task-icons">
        <MdModeEdit />
        <FaCheck onClick={() => changeisEditing(ele._id)}/>
        <FaRegTrashAlt onClick={() => deleteTasks(ele._id)}/>
        </div>
    </div>
    
  )
}

export default Task