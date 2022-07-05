import axios from 'axios'
import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom'

export default function CreateBook(){

    const [newbook, setNewBook] =useState({});
    const [newId, setNewId] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/books")
        .then(res =>{
            setNewId(res.data[res.data.length -1].id +1)
        })
        .catch(err =>{
            throw err;
        })
        .finally(()=>{
            setNewBook({
                ...newbook,
                id: newId
            })
        })
    }, [newId]);

    const handleChange = (e) =>{
        setNewBook({
            ...newbook,
            [e.target.name] : e.target.value
        })
        console.log(newbook)
    }

    const hanldleSubmit = (e) =>{
        axios.post("http://localhost:3001/books", newbook)
        .then(res =>{
            alert("Create New Book Successfully");
            navigate("/home")
        })
        .catch(err =>{
            alert("Something Wrong");
        })
    }

    return(
        <div>
            <div>
                <h1>Create New Book</h1>
                <br></br>
                <Link className='btn btn-secondary' to={'/home'}> <i className='bi bi-back'></i></Link>
            </div>
            <form className='md-3'>
                <div>
                    <label className='form-label'>Id:</label>
                    <input className='form-control'  type='number' name='id'  readOnly value={newId}></input>
                </div>
                <br></br>
                <div>
                    <label>Name:</label>
                    <input className='form-control' type='text'  name='name' onChange={handleChange}></input>
                </div>
                <br></br>
                <div>
                    <label>Author:</label> 
                    <input className='form-control' type='text'  name='author' onChange={handleChange}></input>
                </div>
                <br></br>
                <div>
                    <label>Producer:</label>
                    <input className='form-control' type='text'  name='producer' onChange={handleChange}></input>
                </div>
                <br></br>
                <div>
                    <label>Price:</label> 
                    <input className='form-control' type='text'  name='price' onChange={handleChange}></input>
                </div>
                <br></br>
                <div>
                   <button className='btn btn-success' type='button' onClick={hanldleSubmit}>Submit</button>
                </div>
                <br></br>
            </form>
        </div>
    )
}