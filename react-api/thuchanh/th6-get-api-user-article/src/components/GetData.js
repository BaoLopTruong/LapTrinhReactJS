import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function GetData(){
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        const getUsers = axios.get("http://localhost:3001/api/users");
        const getArticle = axios.get("http://localhost:3001/api/articles");
        setTimeout(()=>{
            axios
            .all([getUsers, getArticle])
            .then(
                axios.spread((res1,res2) =>{
                    const users = res1.data.map(user =>{
                        return{
                            ...user,
                            article: res2.data.filter(item =>{
                                return item.user_id === user.id;
                            })
                        }
                    })
                    setUsers(users)
                })
            )
            .catch(err =>{
                throw err;
            })
            .finally(()=>{
                setLoading(false);
            })
        },1000)
      
    }, []);
    if(isLoading) return <p>Loading ...</p>
    return (
        <div>
          <h1>Users</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Article numbers</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td> {user.name} </td>
                  <td> {user.article.length} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}