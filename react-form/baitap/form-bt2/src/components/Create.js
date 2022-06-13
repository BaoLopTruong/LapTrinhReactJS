import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function AddBook() {
    const { bookId } = useParams();
    const isCreate = !bookId;
    const [book, setBook] = useState({});
  
    function handleChange(event) {
      setBook({
        ...book,
        [event.target.name]: event.target.value
      });
    }
  
    function handleSubmit() {
      axios
        .post("http://localhost:3001/books", book)
        .then(res => {
          alert(
            `${isCreate ? "Create" : "Edit"} book ${JSON.stringify(
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
            <input style={{marginLeft: "56px"}} name="id" value={book.id || ""} onChange={handleChange} />
          </div>
          <br></br>
          <div>
            <label>title:</label>
            <input style={{marginLeft: "43px"}} name="title" value={book.title || ""} onChange={handleChange} />
          </div>
          <br></br>
          <div>
            <label>Quantity:</label>
            <input style={{marginLeft: "10px"}} name="quantity" value={book.quantity || ""} onChange={handleChange} />
          </div>
          <br></br>
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }