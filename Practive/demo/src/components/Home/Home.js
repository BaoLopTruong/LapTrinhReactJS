import axios from 'axios';
import {useState , useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';


export default function Home(){

    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    
    useEffect(() =>{
        axios.get("http://localhost:3001/books")
        .then(res =>{
            setBooks(res.data)
        })
    })
    
    const handleEdit = (e) =>{
        navigate(`/home/detail/${e.target.id}`)

    }
    
    const handleDelete = (e) =>{
        axios.delete(`http://localhost:3001/books/` + e.target.id )
        .then(res =>{
            alert("Delete succesfully")
        })
        .catch(err =>{
            alert("Something wrong")
        })
    }

    return(
        <div className='home'>
           <div>
            <h1> Home Page</h1>
            <div>
                <Link className="btn btn-success" to={'/home/newbook'}> <i className="bi bi-credit-card"></i></Link>
            </div>
           </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Producer</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book =>(
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>{book.producer}</td>
                            <td>{book.price}</td>
                            <td>
                                <button id={book.id} className="btn btn-info btn-sm edit" type='button' onClick={handleEdit}> <i id={book.id} className="bi bi-pencil-square"></i></button>
                                <button id={book.id} className="btn btn-danger btn-sm trash" type='button' onClick={handleDelete}> <i id={book.id} className='bi bi-trash'></i></button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}