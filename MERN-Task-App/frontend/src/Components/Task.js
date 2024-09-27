import { MdModeEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
const Task = ({ele,i,deleteTasks,getSingletask,completedfunction}) => {
  
  
  return (
    
    <div className={(ele.completed)?"completed":"task"}>
        
            <div>
            <p>
            <b>{i+1}.</b>
            {ele.name}
            </p>
            </div>
          
        
        <div className="task-icons">
        <MdModeEdit  onClick={() => getSingletask(ele)}/>
        <FaCheck onClick={() => completedfunction(ele)}/>
        <FaRegTrashAlt onClick={() => deleteTasks(ele._id)}/>
        </div>
    </div>
    )
}

export default Task