import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import React from "react";

function Todo({todo, toggleComplete, removeTodo}){

function handleCheckboxClick(){
    toggleComplete(todo.id);
}  

function handleRemoveClick(){
    removeTodo(todo.id);
}

return(
<ListItem style={{display: "flex"}}>
<Checkbox
checked = {todo.completed}

 onClick = {handleCheckboxClick}/>
<Typography
style={{
  
    textDecoration: todo.completed ? "line-through": null
}}
>{todo.task}
</Typography>
<IconButton onClick={handleRemoveClick}>x<closeIcon/></IconButton>

    </ListItem>
);
}

export default Todo;
