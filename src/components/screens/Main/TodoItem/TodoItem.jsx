
import Check from "./Check";
import { BsTrash } from "react-icons/bs";


const TodoItem = ({todo, changeTodo, removeTodo}) => {
    
    return ( 
    <div className="flex items-center justify-between 
     mb-3 rounded-xl bg-indigo-900 p-3 w-full"
    
    >
        <button className="flex items-center" onClick={() => changeTodo(todo._id)} >
            <Check isComplited = {todo.isComplited}/>
            <span className={`${
                todo.isComplited && 'line-through'
            }`} >{todo.title}</span>

        </button>
        <button onClick={() => removeTodo(todo._id)}>
            <BsTrash size={19} onClick={() => removeTodo} className = "text-violet-500 hover:text-slate-900 
            transition-colors ease-in-out duration-300"/>
       </button>
       
    </div>
    
     );
}
 
export default TodoItem;