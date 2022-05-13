import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import Employee from './Employee';
import EmployeeDetails from './EmployeeDetails ';

const Home = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/employee" element={<Employee />}></Route>
                <Route path="/employee-detail" element={<EmployeeDetails />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
export default Home;