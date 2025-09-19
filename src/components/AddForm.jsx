import { useState} from 'react'
import { useDispatch } from "react-redux";
import { addTodo } from '../features/todo/todoSlice';
export default function AddForm()
{
    const [task,setTask] = useState('');
    const dispatch=useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
    };
    return(
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Add Todo" />
            <button type="submit">Add</button>
        </form>
    )
}