import axios from 'axios';
export async function getStaticProps() {
    const res = await axios.get('http://localhost:3001/api/users');
    return {
        props: {
            users: res.data
        }
    }
}

export default function Users({ users }) {
    console.log(users);
    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map(user =>(
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>

        </div>
    )
}