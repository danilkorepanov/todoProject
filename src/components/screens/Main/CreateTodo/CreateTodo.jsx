import { useState } from "react";

const CreateTodo = ({ setTodos }) => {

    const [title, setTitle] = useState('')

    const addTodo = title => {
            setTodos(prev => [{
                _id:new Date(),
                title,
                isComplited: false,
            },
            ...prev,])
            setTitle(' ')
    }



    return ( 
        
        <div className="flex items-center justify-between 
        mb-3    w-full" >

            <input type="text" 
            className=" w-full pl-5 py-2 bg-gray-900 outline-none border-2 border-indigo-900 rounded-2xl"
            onChange={e => setTitle(e.target.value)}
            value = {title}
            onKeyPress = {(e) =>  
                {if (e.target.value !== " " && e.target.value !== "") {
                e.key === 'Enter' && addTodo(title)}} }
            placeholder = 'Add a task'
             />

        </div>

     )
}
 
export default CreateTodo;

