import React, { Component } from "react";
import axios from "axios";
import { useState, useEffect } from 'react'
export default function Loading() {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        getUsers()
        .then(res => {
            setUsers(res.data)
            console.log(res)
        })
        .catch(err => {
            throw err;
        })
        .finally(() => {
            setLoading(false)
        })

    },[]);
    const getUsers = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                axios
                    .get("http://localhost:3001/api/users")
                    .then(res => {
                        resolve(res);
                    })
                    .catch(err => {
                        reject(err);
                    });
            }, 1000);
        });
    };

    if (isLoading) return <p>loading...</p>;
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}> {user.name} </li>
          ))}
        </ul>
      </div>
    );
    
}