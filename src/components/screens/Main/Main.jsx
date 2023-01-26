import { useState } from "react"
import CreateTodo from "./CreateTodo/CreateTodo"
import TodoItem from "./TodoItem/TodoItem"


const todo = [
    {
        _id: "wadasd",
        title: 'Read book',
        isComplited: false,
    },
    {
        _id: "wadaasdsd",
        title: 'Read book2',
        isComplited: false,
    }
]

const Main = () => {
    const [todos, setTodos] = useState(todo)

    const changeTodo = id => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isComplited = !current.isComplited
        setTodos(copy)
    }

    const removeTodo = id => {
        setTodos([...todos].filter(t => t._id !== id))
    }
    

    return (
        <div className=" text-white w-4/5 mx-auto">
            <h1 className="text-center text-2xl font-bold p-4" >Todo for junior</h1>
            <CreateTodo setTodos = { setTodos }/>
                {todos.map(todo => 
                (<TodoItem key = {todo._id} todo = {todo} changeTodo = {changeTodo} removeTodo = {removeTodo}/>)
                )}
            
            
        </div>
    )

}

export default Main