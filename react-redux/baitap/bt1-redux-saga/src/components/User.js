import React from "react";
import { useSelector } from "react-redux";
// import axios from 'axios'

export default function User(props) {
  
  const users = useSelector(state => state.users);
  console.log(props.store)
  console.log(users);
  const handleDelete = (id) =>{
    // axios.delete("http://localhost:3001/users/"+id)
    // .then(res =>{
    //   alert("Delete succesfully" +res);
    // })
    // .catch(err =>{
    //   throw err;
    // })
  }
  return (

    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td>
                <button onClick={handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
