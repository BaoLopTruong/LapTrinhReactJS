
import {useState, useEffect} from 'react'
import axios from 'axios'
export default function ListUser(){

    const [users, setUsers] = useState([]);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/users/')
        .then((res) =>{
            setUsers(res.data)
        })
        .catch((err) =>{
            throw err
        })
    });
    const hanldeAdd = () =>{
        window.location.href = ('/add')
    }
    const handleChange = (e) => {
        window.location.href = `update/${e.target.id}`;
    };

    return(
        <div>
            <h2>Users</h2>
            <button style={{float: 'right', marginRight:'100px'}} onClick={hanldeAdd}>Add</button>
            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user =>((
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>
                                <button id={user.id} onClick={handleChange}>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    )))}
                </tbody>
            </table>
        </div>
    )
}