
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'
export default function Article() {
    const { userId } = useParams();
    const [articles, setArticles] = useState([]);
    const [article, setArticle] = useState({});
    const [lastId, setLastId] = useState(userId);
    useEffect(() => {
        axios.get(`http://localhost:3001/users/${userId}/articles`)
            .then(res => {
                setArticles(res.data)
                console.log(res.data)
            })
            .catch(err => {
                throw err;
            })
            .finally(() => {
                //console.log(articles)
              
            });
        //
        axios.get('http://localhost:3001/articles')
        .then(res => {
            setLastId (res.data[res.data.length - 1].id);
            console.log(lastId)
        })

    });

    const handleChange = (e) => {
    
        setArticle({
            ...article,
            id: lastId+1,
            userId: userId,
            title: e.target.value
        })
    }

    const handleAdd = () =>{
        console.log (lastId)
        console.log(article)
        axios.post('http://localhost:3001/articles', article)
        .then(res=>{
            alert("add new article successfully")
        })
        .catch(err=>{
            alert('something wrong', err)
        })
    }

    const handleDelete = (e) =>{
        axios.delete('http://localhost:3001/articles/' + e.target.id)
        .then(res =>{
            alert("delete successfully")
        })
        .catch(err =>{
            alert('something wrong')
        })
    }
    return (
        <div>
            <h1>Article Details</h1>
            <br></br>
            <div>
                <input type='name' name='article' value={article.title} onChange={handleChange}></input>
                <button onClick={handleAdd}>Add</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Article
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map(article => (
                        <tr key={article.id}>
                            <td>{article.title}</td>
                            <td>
                                <button>Edit</button>
                                <button id={article.id} onClick={handleDelete}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}