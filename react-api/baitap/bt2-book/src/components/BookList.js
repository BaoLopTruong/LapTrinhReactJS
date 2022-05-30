
import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function BookList() {
    const [books, setBook] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/books')
            .then(res => {
                setBook(res.data)
            })
            .catch(err => {
                throw err;
            })
    });

    const handleCreate = () => {
        window.location.href = "/books/add";
    };

    const handleChange = (e) => {
        window.location.href = `books/${e.target.id}`;
    };
    const handleDelete = (e) => {
        axios.delete(`http://localhost:3001/books/` + e.target.id)
            .then(res => {
                alert("delete successfully");
            })
            .catch(err => {

            })
    }
    return (
        <div>

            <div>
                <h2>To Do List</h2> <button type='button' onClick={handleCreate}> Create Book</button>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => (
                            <tr key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.title}</td>
                                <td>{book.quantity}</td>
                                <td>
                                    <button id={book.id} onClick={handleChange} className="mx-4 btn btn-warning">Edit</button>
                                    <button id={book.id} onClick={handleDelete} className="mx-4 btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}