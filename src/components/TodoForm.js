import React, { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const handleChange = (e)=>{
    setInput(e.target.value)
  }

  const handleSubmit =(event)=>{
    event.preventDefault();
    props.onSubmit({
        id: Math.floor(Math.random() * 1000),
        text: input
    })
    setInput(" ")
    }
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a to do"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      />
      <button className="todo-button">Add to do</button>
    </form>
  );
};

export default TodoForm;
