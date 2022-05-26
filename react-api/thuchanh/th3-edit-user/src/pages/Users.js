import axios from "axios";
import { useEffect, useState } from "react";


export default function Users(){

    const [users, setUser] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:3001/api/users")
        .then(res =>{
            setUser(res.data);
        })
        .catch(err =>{
            throw err;
        });
    });

    const handleCreate = () => {
        window.location.href = "/user/add";
      };
    
      return (
              <div>
                <h1>Users</h1>
                {users.map(user => (
                  <div key={user.id}>
                    <a href={`/user/${user.id}`}> {user.name} </a>
                  </div>
                ))}
                <button type="button" onClick={handleCreate}>
                  Create
                </button>
              </div>
            );
          
}




// import React, { Component } from "react";
// import axios from "axios";

// class Users extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: []
//     };
//   }

//   componentDidMount() {
//     axios
//       .get("http://localhost:3001/api/users")
//       .then(res => {
//         this.setState({ users: res.data });
//       })
//       .catch(err => {
//         throw err;
//       });
//   }

//   handleCreate = () => {
//     window.location.href = "/user/add";
//   };
 
//   render() {
    
//     const { users } = this.state;
//     console.log(users);
//     return (
//       <div>
//         <h1>Users</h1>
//         {users.map(user => (
//           <div key={user.id}>
//             <a href={`/user/${user.id}`}> {user.name} </a>
//           </div>
//         ))}
//         <button type="button" onClick={this.handleCreate}>
//           Create
//         </button>
//       </div>
//     );
//   }
// }

// export default Users;