import React, { useState } from "react";
import TodoForm from "./TodoForm";

const Todo = () => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  return todos.map((todo, index) => (
    <div
      className={!todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
        <div key={todo.id} onClick={()=>completTodo(todo.id)}>
            {todo.text}
        </div>
     <div className="icons">
        <RiCloseCirleLine/>
     </div>
    </div>
  ));
};

export default Todo;
