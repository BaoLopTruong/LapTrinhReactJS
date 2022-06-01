import { Link } from "react-router-dom";





function Home() {
    return (
        <div>
            <h2>Home Page</h2>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <hr />
        </div>

    );
}
export default Home;