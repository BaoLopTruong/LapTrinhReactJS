import { useLocation } from "react-router-dom";
function Home() {
    const { state } = useLocation();
    console.log(state);
    const employees = [
        {
            id: 1,
            name: "Hoa",
            age: 20
        },
        {
            id: 2,
            name: "Khánh",
            age: 25
        },
        {
            id: 3,
            name: "Tú",
            age: 22
        },
    ]
    return (

        <div>
        <h3>Info Account </h3> <br></br>
        <h2> Email: {state.email }</h2> <br></br>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
            { employees.map((student, index) => (
                  <tr key={index}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    );
}
export default Home;