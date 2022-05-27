import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Loading(){
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getUsers()
        .then(res =>{
            setUsers(res.data);
        })
        .catch(err =>{
            throw err;
        })
        .finally(() =>{
            setLoading(false)
        })
        
    }, []);

    const getUsers = async () => {
        await new Promise(resolve => {
          setTimeout(resolve, 1000);
        });
        return await axios.get("http://localhost:3001/api/users");
      };
    
      if(isLoading) return <p>Loading ...</p>
      return(
          <div>
              <h1>Users</h1>
              <ul>
                  {users.map(user =>(
                    <li key={user.id}> {user.name}</li>
                  ))}
              </ul>
          </div>
      )
}