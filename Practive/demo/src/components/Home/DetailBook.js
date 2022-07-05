import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios'

export default function DetailBook() {
    const [book, setBook] = useState({});
    const navigate = useNavigate();
    const { bookId } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3001/books/${bookId}`)
            .then(res => {
                setBook(res.data)

            })
            .catch(err => {
                throw err;
            })
            .finally(() => {
                console.log(book)
            })

    }, [bookId]);

    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
        console.log(book)
    }

    const handleSave = (e) => {
        axios.put(`http://localhost:3001/books/${bookId}`, book)
            .then(res => {
                alert("Chagne Book Successfully");
                navigate("/home")
            })
            .catch(err => {
                alert("Something Wrong");
            })
    }

    return (
        <div>
            <div>
                <h1>Edit Book</h1>
                <br></br>
                <Link className='btn btn-primary' to={'/home'}> <i className='bi bi-back'></i></Link>
            </div>
            <form>
                <div>
                    <label>Id:</label> <br></br>
                    <input type='number' name='id' readOnly value={book.id || ""}></input>
                </div>
                <br></br>
                <div>
                    <label>Name:</label> <br></br>
                    <input type='text' name='name' value={book.name || ""} onChange={handleChange}></input>
                </div>
                <br></br>
                <div>
                    <label>Author:</label> <br></br>
                    <input type='text' name='author' value={book.author || ""} onChange={handleChange}></input>
                </div>
                <br></br>
                <div>
                    <label>Producer:</label> <br></br>
                    <input type='text' name='producer' value={book.producer || ""} onChange={handleChange}></input>
                </div>
                <br></br>
                <div>
                    <label>Price:</label> <br></br>
                    <input type='text' name='price' value={book.price || ""} onChange={handleChange}></input>
                </div>
                <br></br>
                <div>
                    <button type='button' onClick={handleSave}>Submit</button>
                </div>
                <br></br>
            </form>
        </div>
    )
}