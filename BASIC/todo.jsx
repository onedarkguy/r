import { useState } from "react";
import "./index.css"

function Todo(){
    const[task,setTask]=useState("");
    const[list,setList]=useState([]);

    const addTask=()=>{
        if(task.trim()==="")return;

        setList([...list,task]);
        setTask("");
    };

    const deleteTask=(index)=>{
        const newList=list.filter((_,i)=>i!==index);
        setList(newList);
    };

    return(
        <div>
            <h2>Todo App</h2>

            <input type="text" name="task" value={task} placeholder="Enter task" onChange={(e)=>setTask(e.target.value)}/><br/>

            <button onClick={addTask}>Add</button>
            <ul>
                {list.map((item,index)=>(
                    <li key={index}>
                        {item}
                        <button onClick={()=>deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );

}
export default Todo;
