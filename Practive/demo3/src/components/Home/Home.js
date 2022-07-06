import { useSelector } from "react-redux";


export default function Home() {
    const books = useSelector(state => state.books);

    return (
        <div className="home">
            <div className="title">
                <h1>List Book</h1>
            </div>
            <div className="content">
                <table>
                    <thead>
                        <tr>

                            <th>Id</th>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Producer</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>Aciton</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => (
                            <tr key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.bookname}</td>
                                <td>{book.author}</td>
                                <td>{book.producer}</td>
                                <td>{book.price}</td>
                                <td>{book.amount}</td>
                                <td>
                                    <button className="btn btn-info" type="button"><i className="bi bi-pencil-square"></i></button>
                                    <button className="btn btn-danger" type="button"><i className="bi bi-trash"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}