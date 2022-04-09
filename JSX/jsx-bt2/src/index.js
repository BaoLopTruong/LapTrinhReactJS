import './index.css';
import { createRoot } from 'react-dom/client';

// bai tap 1: Tạo Element thể hiện bảng thông tin các sinh viên trong lớp học

const students = [
  {
    name: "Le Ngoc Bao",
    contact: "Nguyen Thi Bich Thuy",
    country: "VietNam"
  },
  {
    name: "Ernst Handel",
    contact: "Roland Mendel",
    country: "Austria"
  },
  {
    name: "Dany Bennett",
    contact: "Helen Bennett",
    country: "America"
  },
  {
    name: "David Beckham",
    contact: "Victoria Beckham",
    country: "England"
  }
];

const show = (
  <div>
    <h2 style= {{textAlign: "center"}}>Students</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Contact</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
      { students.map((student) => (
          <tr>
            <td>{student.name}</td>
            <td>{student.contact}</td>
            <td>{student.country}</td>
          </tr>
        )) }
      </tbody>
    </table>
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(show);
