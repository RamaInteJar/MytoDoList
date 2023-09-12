import React,{useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

const TodoList = () => {
    const[todos, setTodos]=useState([])

    const addTodo=(todo)=>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
        console.log(...todos);
    }
    const completeTodo=id=>{
        let updatedTodo = todos.map(todo=>{
            if(todo.id===id){
                todo.isComplete = !todo.isComplete
            }
        })
        setTodos(updatedTodo)
    }
  return (
    <div>
        <h1>Today's plan</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo
        todos={todos}
        completeTodo={completeTodo}
        />
    </div>
  )
}

export default TodoList