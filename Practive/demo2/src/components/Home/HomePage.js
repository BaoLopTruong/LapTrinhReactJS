import './home.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
export default function HomePage() {

    const [books, setBooks] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:3001/books")
            .then(res => {
                // sortId(res.data)
                 setBooks(res.data)
                // axios.patch("http://localhost:3001/books/", res.data)
                // .then(() =>{
                //     console.log("OK")
                // })
            })
            .catch(err => {
                throw err;
            })
            .finally(()=>{
            
            })
        
  
    });

    const sortId = (books) =>{
        for(let i=0; i< books.length; i++){
            if(books[i].id !== i+1){
                books[i].id = i+1;
            }
        }
        console.log(books)
    }

    const handleEdit = (e) =>{
        navigate(`/home/detail/${e.target.id}`);
    }
    const handleDelete = (e) =>{
        axios.delete(`http://localhost:3001/books/`+e.target.id)
        .then(res =>{
            alert("Delete book successfully");
        })
        .catch(err =>{
            alert("Something wrong")
        })
    }

    return (
        <div className="homepage">
            <div className='title'>
               <h1> List Books</h1>
               <br></br>
               <Link to={'/home/newbook'} className='btn btn-success' ><i className='bi bi-credit-card'></i></Link>
            </div>
            <div className='content'>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Producer</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book =>(
                            <tr key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.bookname}</td>
                                <td>{book.author}</td>
                                <td>{book.producer}</td>
                                <td>{book.price}</td>
                                <td>{book.amount}</td>
                                <td>
                                    <button id={book.id} className='btn btn-info' onClick={handleEdit}><i id={book.id} className='bi bi-pencil-square'></i></button>
                                    <button id={book.id} className='btn btn-danger' onClick={handleDelete}><i id={book.id} className='bi bi-trash'></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}