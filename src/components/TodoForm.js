import { TextField } from "@material-ui/core";
import React, {useState} from "react";
// import uuid from "uuid";
 import { v4 as uuidv4 } from 'uuid';

 export default function TodoForm({addTodo}){
const [todo, setTodo]= useState({
    id: "",
    task: "",
    completed: false
});

function handleTaskInputChange(e){
    setTodo({...todo, task: e.target.value});
}

function handleSubmit(e){
    e.preventDefault();
    if (todo.task.trim()){
        // addTodo({...todo, id: uuid.v4()});
        addTodo({ ...todo, id: uuidv4() });
        // reset task input
        setTodo({...todo, task: ""})
    }

}

     return(
         <form className="todo-form" onSubmit={handleSubmit}>
             <TextField
             label = "Task"
             name="task"
             type="text"
             value={todo.task}
             onChange = {handleTaskInputChange}
             />
             <button type="submit">submit</button>
         </form>
     );

 }