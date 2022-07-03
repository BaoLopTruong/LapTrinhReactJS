import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

export default function HomePage(){

    const books = useSelector(state => state.books)

    const navigate = useNavigate();
    const userlogined = useSelector(state => state.userlogined);
    useEffect(() => {
      if (!userlogined.username) {
        navigate("/login");
      }
    }, [userlogined, navigate]);

    return(
        <div className="home-page">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Book</th>
                        <th>Amount</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book =>(
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.name}</td>
                            <td>{book.amount}</td>
                            <td>{book.price}</td>
                            <td>
                            <button style={{ marginRight: '5px' }} className="btn btn-primary btn-sm edit" type="button" title="Sửa"
                                                    id={book.id} data-toggle="modal" data-target="#ModalUP" >
                                                    <i id={book.id} className="bi bi-trash"></i>
                                                </button>
                                                <button id={book.id} className="btn btn-primary btn-sm trash" type="button" title="Xóa"
                                                    >
                                                    <i className="bi bi-trash"></i>
                                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}