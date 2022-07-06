import './detail.css'
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
export default function CreatePage(){

    const [newBook, setNewBook] = useState({});
    const [newId, setNewId] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:3001/books/")
        .then(res =>{
            setNewId(res.data[res.data.length -1].id + 1)
        })
        .catch(err =>{
            throw err;
        })
        .finally(()=>{
            setNewBook({
                ...newBook,
                id: newId
            })
        })
    }, [newId])

    const handleChange = (e) =>{
        setNewBook({
            ...newBook,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () =>{
        axios.post("http://localhost:3001/books", newBook)
        .then(res =>{
            alert("Create New Book Successfully");
            navigate("/home")
        })
        .catch(err =>{
            alert("Something Wrong");
        })
    }
    return(
        <div className="createpage">
           <div className="title">
            <h1>Create New Book</h1>
            <Link to={'/home'} className="btn btn-secondary"><i className="bi bi-back"></i></Link>
           </div>
           <div className="form-input">
               
                {/* test */}
                <form className='md-3'>
                <div>
                    <label className='form-label'>Id:</label>
                    <input className='form-control'  type='number' name='id'  readOnly value={newId}></input>
                </div>
                
                <div>
                    <label className='form-label'>Name:</label>
                    <input className='form-control' type='text'  name='bookname' onChange={handleChange}></input>
                </div>
               
                <div>
                    <label className='form-label'>Author:</label> 
                    <input className='form-control' type='text'  name='author' onChange={handleChange}></input>
                </div>
               
                <div>
                    <label className='form-label'>Producer:</label>
                    <input className='form-control' type='text'  name='producer' onChange={handleChange}></input>
                </div>
               
                <div>
                    <label className='form-label'>Price:</label> 
                    <input className='form-control' type='text'  name='price' onChange={handleChange}></input>
                </div>
               
                <div>
                    <label className='form-label'>Amount:</label> 
                    <input className='form-control' type='text'  name='amount' onChange={handleChange}></input>
                </div>

                <div>
                   <button style={{marginLeft: '160px', marginTop: '20px'}} className='btn btn-success' type='button' onClick={handleSubmit}>Submit</button>
                </div>
               
            </form>
                {/* end test */}
           </div>
        </div>
    )
}