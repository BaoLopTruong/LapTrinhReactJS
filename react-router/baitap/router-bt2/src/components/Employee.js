import { useLocation, useNavigate } from "react-router-dom";

const Employee = () => {
    const location = useLocation();
    const navigate = useNavigate();
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
    ];
    const showDetail = (employee) => {
        navigate('/employee-detail', { state: employee });
    }
    console.log(location);
    return (
        <div className="container">
            Logged in info: {location.state.username} - {location.state.password}
            <hr />
            <table className="table table-striped">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {employees.map((currentValue, index) => (
                        <tr key={index}>
                            <td>{currentValue.id}</td>
                            <td>{currentValue.name}</td>
                            <td>{currentValue.age}</td>
                            <td>
                                <button className="btn btn-info" onClick={(e) => { showDetail(currentValue) }}>Detail</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Employee;