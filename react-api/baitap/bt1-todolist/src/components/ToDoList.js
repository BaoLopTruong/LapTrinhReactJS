
import React, {useState, useEffect} from 'react';
import axios from 'axios'

export default function ToDoList() {
    const [todo, setToDo] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/todos')
        .then(res =>{
            setToDo(res.data)
        })
        .catch(err =>{
            throw err;
        })
    });

    const handleCreate = () => {
        window.location.href = "/todo/add";
      };
    return(
        <div>

            <div>
                <h2>To Do List</h2>
                <ul>
                    {todo.map(todo =>(
                        <li key={todo.id}> {todo.name}</li>
                    ))}
                </ul>
                <button type="button" onClick={handleCreate}>
                  Create
                </button>
            </div>
        </div>
    )
}