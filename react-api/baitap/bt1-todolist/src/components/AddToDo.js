import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function AddToDo() {
    const { todoId } = useParams();
    const isCreate = !todoId;
    const [todo, setToDo] = useState({});
  
    function handleChange(event) {
      setToDo({
        ...todo,
        [event.target.name]: event.target.value
      });
    }
  
    function handleSubmit() {
      axios
        .post("http://localhost:3001/todos", todo)
        .then(res => {
          alert(
            `${isCreate ? "Create" : "Edit"} todo ${JSON.stringify(
              res.data
            )} successfully!!!`
          );
          console.log(res)
        })
        .catch(err => {
          throw err;
        })
        .finally(()=>{
            window.location.href = "/";
        })

    }   
    return (
      <div>
        <h1>Add  Todo</h1>
        <form>
          <div>
            <label>Id:</label>
            <input style={{marginLeft: "39px"}} name="id" value={todo.id || ""} onChange={handleChange} />
          </div>
          <br></br>
          <div>
            <label>Name:</label>
            <input style={{marginLeft: "10px"}} name="name" value={todo.name || ""} onChange={handleChange} />
          </div>
          <br></br>
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }