
import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function List() {
    const [books, setBook] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/danhba')
            .then(res => {
                setBook(res.data)
            })
            .catch(err => {
                throw err;
            })
    });

    const handleCreate = () => {
        window.location.href = "/danhba/add";
    };

    const handleChange = (e) => {
        window.location.href = `danhba/${e.target.id}`;
    };
    const handleDelete = (e) => {
        axios.delete(`http://localhost:3001/danhba/` + e.target.id)
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
                            <th>Name</th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Phone</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => (
                            <tr key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.name}</td>
                                <td> <image style={{width: '50px', height: '50px'}} href={book.image}></image></td>
                                <td>{book.email}</td>
                                <td>{book.phone}</td>
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