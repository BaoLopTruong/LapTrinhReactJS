import "./createpage.css"
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios'

export default function DetailPage() {

    const [book, setBook] = useState({});
    const { bookId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/books/${bookId}`)
            .then(res => {
                setBook(res.data)
            })
            .catch(err => {
                throw err;
            })
    },[bookId]);


    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = () =>{
        axios.put(`http://localhost:3001/books/${bookId}`, book)
        .then(res =>{
            alert("update Book Successfully");
            navigate("/home")
        })
        .catch(err =>{
            alert("Something Wrong");
        })
    }
    return (
        <div className="detailpage">
            <div className="title">
                <h1>DetailPage</h1>
                <Link to={'/home'} className="btn btn-secondary"><i className="bi bi-back"></i></Link>
            </div>
            <div className="form-detail">
                <form className='md-3'>
                    <div>
                        <label className='form-label'>Id:</label>
                        <input className='form-control' type='number' name='id' readOnly value={bookId}></input>
                    </div>

                    <div>
                        <label className='form-label'>Name:</label>
                        <input className='form-control' type='text' name='bookname' value={book.bookname || ""} onChange={handleChange}></input>
                    </div>

                    <div>
                        <label className='form-label'>Author:</label>
                        <input className='form-control' type='text' name='author' value={book.author || ""} onChange={handleChange}></input>
                    </div>

                    <div>
                        <label className='form-label'>Producer:</label>
                        <input className='form-control' type='text' name='producer' value={book.producer || ""} onChange={handleChange}></input>
                    </div>

                    <div>
                        <label className='form-label'>Price:</label>
                        <input className='form-control' type='text' name='price' value={book.price || ""} onChange={handleChange}></input>
                    </div>

                    <div>
                        <label className='form-label'>Amount:</label>
                        <input className='form-control' type='text' name='amount' value={book.amount || ""} onChange={handleChange}></input>
                    </div>

                    <div>
                        <button style={{ marginLeft: '160px', marginTop: '20px' }} className='btn btn-success' type='button' onClick={handleSubmit}>Submit</button>
                    </div>

                </form>
            </div>
        </div>
    )
}